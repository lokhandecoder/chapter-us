import React, { useState, useEffect } from 'react';
import { Volume2, Clock, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { alexaAudio } from '../utils/audio';

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
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return alexaAudio.subscribe(setIsPlaying);
  }, []);

  const toggleSound = () => {
    alexaAudio.toggle();
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

        {/* Utility bar: Reading time & Alexa for Trunali Audio Toggle */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-[#756D63]">
          <div className="flex items-center gap-1.5 bg-[#F4EDE5] px-3 py-1.5 rounded-full border border-[#E8DFD5]">
            <Clock className="w-3.5 h-3.5 text-[#8E5A47]" />
            <span>4 min read</span>
          </div>

          {/* Alexa for Trunali Audio Button */}
          <button
            onClick={toggleSound}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border cursor-pointer ${
              isPlaying
                ? 'bg-[#EAE0D5] text-[#221F1B] border-[#D1BEAF] shadow-xs'
                : 'bg-[#F4EDE5] text-[#756D63] border-[#E8DFD5] hover:text-[#221F1B] hover:border-[#D1BEAF]'
            }`}
            title="Alexa for Trunali - Play calming ambient chimes"
          >
            {isPlaying ? (
              <>
                <span className="flex items-center gap-0.5 h-3">
                  <span className="w-0.5 h-2.5 bg-[#8E5A47] rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-0.5 h-3.5 bg-[#8E5A47] rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-0.5 h-2 bg-[#8E5A47] rounded-full animate-bounce [animation-delay:300ms]" />
                </span>
                <span>Alexa for Trunali: Playing ♪</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#8E5A47]" />
                <span>Alexa for Trunali</span>
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
          <p>
            When we first started spending time together, I tried telling myself that being just friends was enough. But every time you laughed, every time you passionately spoke about medicine and your patients, and every quiet moment we shared, it became impossible to hide what was happening inside me.
          </p>

          <p>
            The truth is simple: <strong>I couldn't just remain a friend, because my heart was already choosing you.</strong> You bring a calming grace, an intelligence, and an unspoken kindness that I admire more than words can say.
          </p>

          <div className="my-8 py-6 px-7 bg-[#F4EDE5]/70 rounded-xl border border-[#E8DFD5] not-prose space-y-3">
            <div className="flex items-center gap-2 text-[#8E5A47] font-sans text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>What I Promise You on This Journey</span>
            </div>
            <ul className="space-y-2.5 text-[#4A443D] font-sans text-sm leading-relaxed">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#8E5A47] shrink-0 mt-0.5" />
                <span><strong>No Pressure, Ever:</strong> We move strictly at the pace you are comfortable with. No forced milestones.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Heart className="w-4 h-4 text-[#8E5A47] shrink-0 mt-0.5" />
                <span><strong>Total Support for Your Medical Career:</strong> Your shifts, study hours, and clinical focus will always be honored and respected.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#8E5A47] shrink-0 mt-0.5" />
                <span><strong>A Safe Space:</strong> You can always speak your mind freely without fearing you will hurt my feelings or push me away.</span>
              </li>
            </ul>
          </div>

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
