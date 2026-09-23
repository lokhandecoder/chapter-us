import React, { useState } from 'react';
import { Clock, ShieldCheck, ArrowRight, CheckCircle, Coffee, Compass } from 'lucide-react';
import { microSteps } from '../data/defaultContent';

export const SmallStepsRoadmap: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <section id="small-steps" className="py-16 border-t border-[#E8DFD5] bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-sans font-semibold uppercase tracking-widest text-[#8E5A47] mb-2">
            Chapter 04 · Micro-Pacing
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#221F1B] font-normal leading-tight text-balance">
            Small, comfortable steps forward
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756D63] font-sans leading-relaxed">
            We don’t dive straight into high-stakes dinner dates or heavy commitments. We take low-stress micro-steps where you always have an easy exit and full control.
          </p>
        </div>

        {/* Timeline Stepper Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {microSteps.map((step, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedStep(idx)}
                className={`p-5 rounded-xl border text-left cursor-pointer transition-all duration-150 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FAF7F2] border-[#8E5A47] shadow-sm ring-1 ring-[#8E5A47]/30'
                    : 'bg-[#F6F1EA] border-[#E5DCD0] hover:bg-[#EFE8DF]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-sans text-[#8E5A47] font-semibold mb-2">
                    <span>STEP {step.stepNumber}</span>
                    <span className="text-[#756D63] font-normal font-mono">{step.duration}</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#221F1B] font-medium leading-snug mb-2">
                    {step.name}
                  </h4>
                </div>
                <div className="pt-3 border-t border-[#E8DFD5]/60 flex items-center justify-between text-xs text-[#756D63]">
                  <span>{isSelected ? 'Viewing details' : 'Click to view'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-[#8E5A47]' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Card for Active Step */}
        <div className="bg-[#FAF7F2] border border-[#E0D5C9] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8DFD5] pb-4 mb-5">
            <div>
              <div className="text-xs font-sans uppercase tracking-widest text-[#8E5A47] font-semibold">
                Step {microSteps[selectedStep].stepNumber} Deep Dive
              </div>
              <h3 className="font-serif text-2xl text-[#221F1B] font-medium mt-1">
                {microSteps[selectedStep].name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-sans text-[#756D63] bg-[#F1EAE1] px-3 py-1.5 rounded-md border border-[#E3D7CB] shrink-0 self-start sm:self-auto">
              <Clock className="w-3.5 h-3.5 text-[#8E5A47]" />
              <span>Timeframe: {microSteps[selectedStep].duration}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-sans font-semibold text-[#221F1B] text-xs uppercase tracking-wider">
                The Concept & Philosophy:
              </div>
              <p className="text-[#4E473F] leading-relaxed">
                {microSteps[selectedStep].concept}
              </p>
            </div>

            <div className="bg-[#F3EFE9] p-4 rounded-xl border border-[#E4D9CE] space-y-2">
              <div className="font-sans font-semibold text-[#8E5A47] text-xs uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                The Built-In Safe Escape:
              </div>
              <p className="text-[#3E3831] leading-relaxed">
                {microSteps[selectedStep].safeEscape}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8DFD5] flex items-center justify-between flex-wrap gap-4 text-xs text-[#756D63]">
            <span>Rule: At no point are you obligated to proceed to the next step.</span>
            <span className="font-serif italic text-[#8E5A47]">“You always hold the remote control.”</span>
          </div>
        </div>
      </div>
    </section>
  );
};
