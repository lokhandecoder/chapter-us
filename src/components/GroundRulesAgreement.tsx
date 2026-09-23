import React from 'react';
import { Shield, Sparkles, HeartHandshake, Smile } from 'lucide-react';
import { groundRules } from '../data/defaultContent';

export const GroundRulesAgreement: React.FC = () => {
  return (
    <section className="py-16 border-t border-[#E8DFD5] bg-[#F7F3EC]/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-sans font-semibold uppercase tracking-widest text-[#8E5A47] mb-2">
            Sanctuary · Mutual Safety Contract
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#221F1B] font-normal leading-tight text-balance">
            Our 4 Sacred Ground Rules
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756D63] font-sans leading-relaxed">
            These aren’t legal conditions; they are agreements to ensure neither of us ever feels cornered, misunderstood, or anxious.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {groundRules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] border border-[#E3D8CC] rounded-xl p-6 space-y-2 hover:border-[#D5C6B7] transition-all"
            >
              <div className="flex items-center gap-2 text-xs font-sans text-[#8E5A47] font-semibold tracking-wider uppercase">
                <span>Rule 0{idx + 1}</span>
              </div>
              <h3 className="font-serif text-xl text-[#221F1B] font-medium">
                {rule.rule}
              </h3>
              <p className="text-sm text-[#4A433A] leading-relaxed pt-1">
                {rule.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
