import React, { useState } from 'react';
import { Volume2, VolumeX, Clock, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { ambientSound } from '../utils/audio';

interface HeroLetterProps {
  recipientName: string;
  senderName: string;
  favoriteDrink: string;
}

export const HeroLetter: React.FC<HeroLetterProps> = ({
  recipientName,
  senderName,
  favoriteDrink,
}) => {
  const [isAudioActive, setIsAudioActive] = useState(false);

  const toggleSound = () => {
    const nextState = ambientSound.toggle();
    setIsAudioActive(nextState);
  };

  return (
    <section id="letter" className="pt-14 pb-20 px-6 max-w-4xl mx-auto">
      {/* Editorial Header Block */}
      <div className="text-center space-y-4 mb-12">
        <div className="flex items-center justify-center gap-3 text-xs tracking-widest uppercase text-[#8E5A47] font-medium">
          <span>A Heartfelt Confession</span>
          <span aria-hidden="true">·</span>
          <span>From My Heart to Yours</span>
          <span aria-hidden="true">·</span>
          <span>Zero Pressure</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#221F1B] font-normal tracking-tight leading-[1.15] text-balance">
          Dear {recipientName},<br />
          <span className="italic text-[#8E5A47]">I really, truly like you.</span>
        </h1>

        <p className="text-sm md:text-base text-[#756D63] font-sans max-w-xl mx-auto leading-relaxed">
          I wanted to put this into words so you have them forever: why I couldn’t just be a friend, what you mean to me, and how we will take this first dating journey together at your exact pace.
        </p>

        {/* Utility bar: Reading time & Ambient Sound Toggle */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-[#756D63]">
          <div className="flex items-center gap-1.5 bg-[#F4EDE5] px-3 py-1.5 rounded-full border border-[#E8DFD5]">
            <Clock className="w-3.5 h-3.5 text-[#8E5A47]" />
            <span>4 min read</span>
          </div>

          <button
            onClick={toggleSound}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all border cursor-pointer ${
              isAudioActive
                ? 'bg-[#E8DDD4] text-[#221F1B] border-[#D4C3B5] shadow-xs'
                : 'bg-[#F4EDE5] text-[#756D63] border-[#E8DFD5] hover:text-[#221F1B]'
            }`}
            title="Toggle calming ambient chime soundscape"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#8E5A47] animate-pulse" />
                <span>Ambient Chimes: Playing</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Play Calming Audio</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Letter Parchment Card */}
      <div className="bg-[#FAF7F2] border border-[#E4D9CE] rounded-2xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative overflow-hidden">
        {/* Delicate decorative hairline accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8E5A47]/40 to-transparent" />

        <div className="prose prose-stone max-w-none text-[#2B2723] font-serif text-lg sm:text-xl leading-relaxed space-y-6">
          {/* Confession Spotlight Banner */}
          <div className="bg-[#F3ECE4] border border-[#DFCFC1] rounded-xl p-5 sm:p-6 mb-6 not-prose">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#8E5A47] font-semibold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>The Confession</span>
            </div>
            <p className="font-serif text-xl sm:text-2xl text-[#221F1B] italic leading-snug">
              “I couldn’t pretend to be just your friend anymore. My heart chose you. Thank you for saying yes to dating me today.”
            </p>
          </div>

          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#8E5A47]">
            I wanted to write this confession down so that whenever you have a quiet moment, you can read it and know exactly where my heart stands: <strong>I really, truly like you, {recipientName}.</strong>
          </p>

          <p>
            When I told you today that I want more than friendship, it came from a place of deep honesty. Over this past month of talking every single day and the two times we spent together in person, I realized that being "just friends" would be denying what I genuinely feel. The way your mind works, your dedication to your work as a doctor, your quiet strength, and the effortless peace between us—you completely captured my heart.
          </p>

          <p>
            When you agreed to date me today, it made me happier than I can put into words. But I also know the courage that took from your side: <strong>you have never dated anyone before, and you have never been in any relationship.</strong>
          </p>

          <p>
            Stepping into your very first dating experience is unfamiliar territory. It is completely natural to feel scared of attachment, to protect your independence, and to wonder what this means for your life and your medical career.
          </p>

          <p>
            I made this page to give you absolute peace of mind: <strong>You are safe with me.</strong> We will take this one comfortable day at a time. No rushing, no expectations, and no pressure to know the "rules" of dating.
          </p>

          <p className="italic text-[#756D63] border-l-2 border-[#8E5A47]/40 pl-4 py-1 my-4">
            “You gave me a chance today by agreeing to date. My promise to you is that your comfort, your career, and your peace will always come first.”
          </p>

          <p>
            Read through what I love about you, how we will take small steps, and how I will prove my reliability to you every single day. Sip your {favoriteDrink || 'favorite drink'}, breathe easy, and know that you are deeply cared for.
          </p>

          <div className="pt-4 text-right">
            <span className="block text-sm font-sans text-[#756D63] uppercase tracking-wider">With warmth & honesty,</span>
            <span className="font-serif text-2xl text-[#221F1B] italic">{senderName}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
