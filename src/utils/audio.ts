/**
 * Audio playback for "Alexa for Trunali"
 * Plays the personal recording (Alexa playing 'Ek Din Aap' from Yes Boss)
 * from './alexa-for-trunali.mp3' in the public/ folder.
 * Falls back to peaceful ambient chimes if the file is loading or absent.
 */

class AlexaAudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private listeners: Set<(playing: boolean) => void> = new Set();
  private fallbackCtx: AudioContext | null = null;
  private fallbackGain: GainNode | null = null;
  private fallbackInterval: number | null = null;
  private isFallback = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private init() {
    try {
      this.audio = new Audio('./alexa-for-trunali.mp3');
      this.audio.preload = 'auto';
      this.audio.loop = true;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('error', () => {
        // If file not yet in public folder, use fallback chimes seamlessly
        if (this.isPlaying) {
          this.startFallback();
        }
      });
    } catch {
      // Audio element not supported
    }

    // Allow developer or user to drag-and-drop the audio file anywhere on the window
    if (typeof window !== 'undefined') {
      window.addEventListener('dragover', (e) => e.preventDefault());
      window.addEventListener('drop', (e) => {
        e.preventDefault();
        const file = e.dataTransfer?.files?.[0];
        if (file && file.type.startsWith('audio/')) {
          this.loadCustomBlob(file);
        }
      });
    }
  }

  public loadCustomBlob(blob: Blob) {
    const url = URL.createObjectURL(blob);
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.loop = true;
    }
    this.audio.src = url;
    this.stopFallback();
    this.play();
  }

  public subscribe(cb: (playing: boolean) => void): () => void {
    this.listeners.add(cb);
    cb(this.isPlaying);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      await this.play();
      return true;
    }
  }

  public async play(): Promise<void> {
    if (this.audio) {
      try {
        await this.audio.play();
        this.isPlaying = true;
        this.notify();
        return;
      } catch {
        // If playing file fails (e.g. 404), seamlessly play the peaceful ambient chimes
        this.startFallback();
        return;
      }
    } else {
      this.startFallback();
    }
  }

  public pause(): void {
    if (this.audio && !this.isFallback) {
      this.audio.pause();
    }
    this.stopFallback();
    this.isPlaying = false;
    this.notify();
  }

  private startFallback() {
    this.isFallback = true;
    this.isPlaying = true;
    this.notify();

    if (!this.fallbackCtx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.fallbackCtx = new AudioCtx();
    }

    if (this.fallbackCtx.state === 'suspended') {
      this.fallbackCtx.resume();
    }

    this.fallbackGain = this.fallbackCtx.createGain();
    this.fallbackGain.gain.setValueAtTime(0.01, this.fallbackCtx.currentTime);
    this.fallbackGain.gain.exponentialRampToValueAtTime(0.12, this.fallbackCtx.currentTime + 2.5);
    this.fallbackGain.connect(this.fallbackCtx.destination);

    const baseFreqs = [185.0, 220.0, 277.18, 329.63, 369.99, 440.0, 554.37];

    const playChime = () => {
      if (!this.fallbackCtx || !this.isPlaying || !this.fallbackGain) return;
      const freq = baseFreqs[Math.floor(Math.random() * baseFreqs.length)];
      const osc = this.fallbackCtx.createOscillator();
      const gain = this.fallbackCtx.createGain();
      const filter = this.fallbackCtx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.value = 650;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.fallbackCtx.currentTime);

      gain.gain.setValueAtTime(0.001, this.fallbackCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.07, this.fallbackCtx.currentTime + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.fallbackCtx.currentTime + 6.0);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.fallbackGain);

      osc.start();
      osc.stop(this.fallbackCtx.currentTime + 6.2);
    };

    playChime();
    this.fallbackInterval = window.setInterval(playChime, 4200);
  }

  private stopFallback() {
    this.isFallback = false;
    if (this.fallbackCtx && this.fallbackGain) {
      this.fallbackGain.gain.exponentialRampToValueAtTime(0.001, this.fallbackCtx.currentTime + 0.8);
      setTimeout(() => {
        if (this.fallbackInterval) {
          clearInterval(this.fallbackInterval);
          this.fallbackInterval = null;
        }
      }, 900);
    }
  }
}

export const alexaAudio = new AlexaAudioPlayer();
