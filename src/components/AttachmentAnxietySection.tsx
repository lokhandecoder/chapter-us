import React, { useState } from 'react';
import { Shield, Lock, Unlock, Compass, CheckCircle2 } from 'lucide-react';
import { attachmentFears } from '../data/defaultContent';

export const AttachmentAnxietySection: React.FC = () => {
  const [activeFearIndex, setActiveFearIndex] = useState(0);

  return (
    <section id="attachment" className="py-16 border-t border-[#E8DFD5] bg-[#F7F3EC]/40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-sans font-semibold uppercase tracking-widest text-[#8E5A47] mb-2">
            Chapter 03 · Emotional Safety
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#221F1B] font-normal leading-tight text-balance">
            Deconstructing the fear of attachment
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756D63] font-sans leading-relaxed">
            Attachment anxiety is not a personal failure; it is an intelligent defense mechanism your mind developed to keep you safe. Here is how we make sure you stay safe without having to stay isolated.
          </p>
        </div>

        {/* Interactive Tab Selector for Fears */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {attachmentFears.map((item, index) => {
            const isSelected = activeFearIndex === index;
            return (
              <button
                key={index}
                onClick={() => setActiveFearIndex(index)}
                className={`p-4 text-left rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#FAF7F2] border-[#8E5A47] shadow-sm'
                    : 'bg-[#F2ECE3] border-[#E2D7CB] hover:bg-[#EBE3D7] text-[#5A534B]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-sans font-bold text-[#8E5A47]">
                    Concern 0{index + 1}
                  </span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-[#8E5A47]" />}
                </div>
                <div className="text-xs sm:text-sm font-serif font-medium text-[#221F1B] line-clamp-2">
                  {item.fear}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Breakdown Card for Active Fear */}
        <div className="bg-[#FAF7F2] border border-[#E4D9CE] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#A3523B] font-sans font-semibold block mb-1">
                The Inner Hesitation:
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#221F1B] font-medium leading-snug">
                “{attachmentFears[activeFearIndex].fear}”
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              <div className="bg-[#F5EFEB] p-5 rounded-xl border border-[#E8DFD5] space-y-2">
                <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#8E5A47] uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5" />
                  The Calming Reality
                </div>
                <p className="text-sm font-sans text-[#3A342D] leading-relaxed">
                  {attachmentFears[activeFearIndex].reality}
                </p>
              </div>

              <div className="bg-[#EDF1EE] p-5 rounded-xl border border-[#D5E0D7] space-y-2">
                <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#5F7161] uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  How We Protect You
                </div>
                <p className="text-sm font-sans text-[#2D3A2F] leading-relaxed">
                  {attachmentFears[activeFearIndex].howWeHandleIt}
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#F2EDE6] rounded-lg border-l-3 border-[#8E5A47] text-xs sm:text-sm text-[#4E473F] font-serif italic">
              Key Takeaway: True connection never demands that you sacrifice your independence or your boundaries. If it suffocates you, it isn’t love—it’s control. With us, your freedom comes first.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
