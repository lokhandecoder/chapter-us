/**
 * Ambient calming audio synthesized via Web Audio API.
 * Produces a warm, soft, harmonic drone and gentle resonant chimes.
 * Requires no external audio files or network requests.
 */

class AmbientSoundscapes {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private intervalId: number | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3);
    this.masterGain.connect(this.ctx.destination);

    // Warm peaceful pentatonic frequencies (F# major / peaceful aura)
    const baseFreqs = [185.0, 277.18, 369.99, 440.0, 554.37];

    const playChime = () => {
      if (!this.ctx || !this.isPlaying || !this.masterGain) return;
      const freq = baseFreqs[Math.floor(Math.random() * baseFreqs.length)];
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.value = 600;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.06, this.ctx.currentTime + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 6.0);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 6.2);
    };

    // Trigger initial gentle tone
    playChime();

    // Occasional gentle ambient chime every 4 to 7 seconds
    this.intervalId = window.setInterval(() => {
      playChime();
    }, 4500);
  }

  public stop() {
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.5);
      setTimeout(() => {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
        this.isPlaying = false;
      }, 1600);
    } else {
      this.isPlaying = false;
    }
  }
}

export const ambientSound = new AmbientSoundscapes();
