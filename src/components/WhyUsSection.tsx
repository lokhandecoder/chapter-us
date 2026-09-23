import React, { useState } from 'react';
import { ShieldCheck, HeartHandshake, Smile, Check, X } from 'lucide-react';
import { whyDatingMakesSense } from '../data/defaultContent';

export const WhyUsSection: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'comparison' | 'pillars'>('pillars');

  return (
    <section id="why-us" className="py-16 border-t border-[#E8DFD5] bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-sans font-semibold uppercase tracking-widest text-[#8E5A47] mb-2">
            Chapter 02 · Why We Make Sense
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#221F1B] font-normal leading-tight text-balance">
            Why exploring dating together feels right
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756D63] font-sans leading-relaxed">
            Transitioning from friendship into dating shouldn’t feel like walking a tightrope. It should feel like building an extra layer of warmth onto a foundation that’s already solid.
          </p>

          {/* Interactive view toggle */}
          <div className="mt-6 inline-flex p-1 bg-[#F1EAE2] rounded-lg border border-[#E2D8CC] text-xs font-medium">
            <button
              onClick={() => setSelectedView('pillars')}
              className={`px-4 py-1.5 rounded-md transition-all cursor-pointer ${
                selectedView === 'pillars'
                  ? 'bg-[#FAF7F2] text-[#221F1B] shadow-xs font-semibold'
                  : 'text-[#756D63] hover:text-[#221F1B]'
              }`}
            >
              The Core Reasons
            </button>
            <button
              onClick={() => setSelectedView('comparison')}
              className={`px-4 py-1.5 rounded-md transition-all cursor-pointer ${
                selectedView === 'comparison'
                  ? 'bg-[#FAF7F2] text-[#221F1B] shadow-xs font-semibold'
                  : 'text-[#756D63] hover:text-[#221F1B]'
              }`}
            >
              Strangers vs. Us
            </button>
          </div>
        </div>

        {selectedView === 'pillars' ? (
          <div className="grid sm:grid-cols-3 gap-6">
            {whyDatingMakesSense.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F4EE] border border-[#E6DDD2] rounded-xl p-6 flex flex-col justify-between hover:border-[#D5C6B7] transition-all"
              >
                <div className="space-y-3">
                  <div className="text-xs font-sans font-semibold text-[#8E5A47] tracking-wider uppercase">
                    Pillar 0{idx + 1}
                  </div>
                  <h3 className="font-serif text-xl text-[#221F1B] font-medium leading-snug">
                    {item.headline}
                  </h3>
                  <div className="text-xs text-[#756D63] font-serif italic border-b border-[#E8DFD5] pb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-[#4E473F] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#F8F4EE] border border-[#E6DDD2] rounded-xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-2 divide-x divide-[#E8DFD5] border-b border-[#E8DFD5] text-xs font-medium uppercase tracking-wider">
              <div className="p-4 bg-[#EFE9DF] text-[#756D63] text-center">
                Dating a Typical Stranger
              </div>
              <div className="p-4 bg-[#F2ECE3] text-[#8E5A47] font-semibold text-center">
                Exploring Together (With Us)
              </div>
            </div>

            <div className="divide-y divide-[#E8DFD5] text-xs sm:text-sm">
              <div className="grid grid-cols-2 divide-x divide-[#E8DFD5] p-4">
                <div className="text-[#6B645B] pr-4 space-y-1">
                  <div className="font-medium text-[#463F37]">Constant performance</div>
                  <p>Having to dress up, pretend you love things you don’t, and hide your bad days.</p>
                </div>
                <div className="text-[#2B2722] pl-4 space-y-1">
                  <div className="font-medium text-[#8E5A47] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#5F7161]" />
                    Complete authenticity
                  </div>
                  <p>I already know what makes you laugh, what exhausts you, and how you look on low-energy days.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-[#E8DFD5] p-4">
                <div className="text-[#6B645B] pr-4 space-y-1">
                  <div className="font-medium text-[#463F37]">Ambiguous intentions & ghosting</div>
                  <p>Wondering if they’re lying, dating three other people, or will disappear on Tuesday.</p>
                </div>
                <div className="text-[#2B2722] pl-4 space-y-1">
                  <div className="font-medium text-[#8E5A47] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#5F7161]" />
                    Clear, transparent communication
                  </div>
                  <p>You have my direct honesty. If either of us has a thought, we say it aloud without fear.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-[#E8DFD5] p-4">
                <div className="text-[#6B645B] pr-4 space-y-1">
                  <div className="font-medium text-[#463F37]">Pressure to fit into their box</div>
                  <p>Forced intimacy, fast pace, feeling guilty for needing personal space.</p>
                </div>
                <div className="text-[#2B2722] pl-4 space-y-1">
                  <div className="font-medium text-[#8E5A47] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#5F7161]" />
                    Paced at your comfort
                  </div>
                  <p>You set the tempo. We pause whenever you want, and your alone time is always protected.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-xs text-[#756D63] font-serif italic">
          “Friendship is not a stepping stone we discard; it is the sanctuary we preserve.”
        </div>
      </div>
    </section>
  );
};
