import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, Heart, Bookmark } from 'lucide-react';
import { whyILikeHerPoints } from '../data/defaultContent';

interface WhyHerSectionProps {
  recipientName: string;
  sharedMemory: string;
  specialTrait: string;
}

export const WhyHerSection: React.FC<WhyHerSectionProps> = ({
  recipientName,
  sharedMemory,
  specialTrait,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="why-you" className="py-16 border-t border-[#E8DFD5] bg-[#F7F3EC]/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-sans font-semibold uppercase tracking-widest text-[#8E5A47] mb-2">
            Chapter 01 · What I See In You
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#221F1B] font-normal leading-tight text-balance">
            Why I like you, for exactly who you are
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756D63] font-sans leading-relaxed">
            I don’t like you because of an unrealistic fantasy or a checklist. I like you because of the specific, real, grounded qualities you bring into every conversation.
          </p>
        </div>

        {/* Highlight Callout: Personalized Memory */}
        <div className="mb-10 bg-[#FAF7F2] border border-[#E0D5C9] rounded-xl p-5 sm:p-6 text-sm sm:text-base">
          <div className="flex items-start gap-3.5">
            <Bookmark className="w-5 h-5 text-[#8E5A47] shrink-0 mt-0.5" />
            <div>
              <span className="font-sans font-semibold text-[#221F1B] block mb-1">
                A memory I keep coming back to:
              </span>
              <p className="text-[#5C554C] font-serif text-base sm:text-lg italic leading-relaxed">
                “Thinking about {sharedMemory}, and how effortless it felt just to be in your orbit. Especially how much I admire {specialTrait}.”
              </p>
            </div>
          </div>
        </div>

        {/* The 4 Core Pillars of Admiration */}
        <div className="space-y-4">
          {whyILikeHerPoints.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] border border-[#E4D9CE] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#F5EFEB]/60 transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-sans text-[#8E5A47] font-medium tracking-wide">
                      <span>0{idx + 1}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.tagline}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#221F1B] font-medium">
                      {item.title}
                    </h3>
                  </div>

                  <div className="p-1 rounded-full text-[#756D63] bg-[#EFE8DF] shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#EDE5DC] text-[#4A433A] space-y-3 font-sans text-sm sm:text-base leading-relaxed">
                    <p>{item.body}</p>
                    <div className="bg-[#F3EBE2]/70 p-3.5 rounded-lg border-l-3 border-[#8E5A47] text-xs sm:text-sm text-[#463E36] font-serif italic">
                      {item.nuance}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
