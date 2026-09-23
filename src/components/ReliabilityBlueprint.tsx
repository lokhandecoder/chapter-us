import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { reliabilityCommitments } from '../data/defaultContent';

export const ReliabilityBlueprint: React.FC = () => {
  const [activeCommitment, setActiveCommitment] = useState<string | null>('consistency');

  return (
    <section id="reliability" className="py-16 border-t border-[#E8DFD5] bg-[#F7F3EC]/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-sans font-semibold uppercase tracking-widest text-[#8E5A47] mb-2">
            Chapter 05 · Earning Trust
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#221F1B] font-normal leading-tight text-balance">
            How I demonstrate reliability & safety
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756D63] font-sans leading-relaxed">
            Anyone can whisper sweet words; reliability is demonstrated through quiet, repeated consistency. You don’t owe me blind trust. I will earn it through these concrete commitments.
          </p>
        </div>

        {/* The 5 Commitments Accordion / Cards */}
        <div className="space-y-4">
          {reliabilityCommitments.map((commitment, idx) => {
            const isOpen = activeCommitment === commitment.id;
            return (
              <div
                key={commitment.id}
                className="bg-[#FAF7F2] border border-[#E3D8CC] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setActiveCommitment(isOpen ? null : commitment.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#F3EBE2]/60 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-sans text-[#8E5A47] font-semibold tracking-wider uppercase">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Commitment 0{idx + 1}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#221F1B] font-medium">
                      {commitment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#756D63] font-sans">
                      {commitment.whatItMeans}
                    </p>
                  </div>

                  <div className="p-1 rounded-full text-[#756D63] bg-[#EFE8DF] shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#E8DFD5] space-y-4 font-sans text-sm">
                    <div className="bg-[#EDF1EE] p-4 rounded-xl border border-[#D5E0D7] space-y-1.5">
                      <span className="text-xs font-bold text-[#5F7161] uppercase tracking-wider block">
                        Concrete Action I Promise To Take:
                      </span>
                      <p className="text-[#2C382D] leading-relaxed">
                        {commitment.concreteAction}
                      </p>
                    </div>

                    <div className="text-xs text-[#756D63] flex items-center gap-2 pt-1">
                      <span className="font-semibold text-[#8E5A47] uppercase">Addresses:</span>
                      <span className="italic">{commitment.fearItAddresses}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Thought on Trust */}
        <div className="mt-8 p-6 bg-[#FAF7F2] border border-[#E0D5C9] rounded-xl text-center space-y-2">
          <p className="font-serif text-lg text-[#221F1B] italic">
            “You don’t have to force yourself to feel safe today. Safety is something we build together, brick by brick, through actions that never leave you second-guessing.”
          </p>
          <span className="text-xs font-sans uppercase tracking-widest text-[#756D63]">
            Actions speak louder than promises
          </span>
        </div>
      </div>
    </section>
  );
};
