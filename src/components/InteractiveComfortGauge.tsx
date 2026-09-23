import React, { useState } from 'react';
import { Sliders, CheckCircle2, Clock, HelpCircle, XCircle, Copy, Check } from 'lucide-react';
import { defaultComfortItems } from '../data/defaultContent';
import { ComfortItem } from '../types';

export const InteractiveComfortGauge: React.FC = () => {
  const [items, setItems] = useState<ComfortItem[]>(defaultComfortItems);
  const [copied, setCopied] = useState(false);

  const setStatus = (id: string, newStatus: ComfortItem['status']) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const copySummary = () => {
    const comfortable = items.filter((i) => i.status === 'comfortable').map((i) => i.title);
    const maybe = items.filter((i) => i.status === 'maybe later').map((i) => i.title);
    const notNow = items.filter((i) => i.status === 'not now').map((i) => i.title);

    const text = `My Comfort Level Check-In:\n\n✨ Feels comfortable:\n${comfortable.map((c) => `• ${c}`).join('\n') || 'None selected'}\n\n🌿 Maybe later:\n${maybe.map((c) => `• ${c}`).join('\n') || 'None selected'}\n\n🛑 Not right now (let\'s hold off):\n${notNow.map((c) => `• ${c}`).join('\n') || 'None selected'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const comfortableCount = items.filter((i) => i.status === 'comfortable').length;

  return (
    <section id="comfort-gauge" className="py-16 border-t border-[#E8DFD5] bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-sans font-semibold uppercase tracking-widest text-[#8E5A47] mb-2">
            Interactive Agency · What Feels Safe Today?
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#221F1B] font-normal leading-tight text-balance">
            Your Comfort & Pace Selector
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756D63] font-sans leading-relaxed">
            You don’t have to guess or feel pressured into doing things outside your comfort zone. Click the badges below to set where you stand today. Anything marked “Not right now” is 100% respected.
          </p>
        </div>

        {/* Live Comfort List */}
        <div className="space-y-3.5 mb-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F4EE] border border-[#E4D9CE] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#D5C6B7] transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-sans text-[#756D63]">
                  <Clock className="w-3.5 h-3.5 text-[#8E5A47]" />
                  <span>{item.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize">{item.pressureLevel} pressure</span>
                </div>
                <h4 className="font-serif text-lg text-[#221F1B] font-medium">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5C554C]">
                  {item.description}
                </p>
              </div>

              {/* Status Segmented Buttons */}
              <div className="flex items-center gap-1.5 p-1 bg-[#EBE3D7] rounded-lg shrink-0 self-start md:self-center">
                <button
                  onClick={() => setStatus(item.id, 'comfortable')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                    item.status === 'comfortable'
                      ? 'bg-[#5F7161] text-white shadow-xs'
                      : 'text-[#5C554C] hover:text-[#221F1B]'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Comfortable</span>
                </button>

                <button
                  onClick={() => setStatus(item.id, 'maybe later')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                    item.status === 'maybe later'
                      ? 'bg-[#8E5A47] text-white shadow-xs'
                      : 'text-[#5C554C] hover:text-[#221F1B]'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Maybe Later</span>
                </button>

                <button
                  onClick={() => setStatus(item.id, 'not now')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                    item.status === 'not now'
                      ? 'bg-[#4A443D] text-white shadow-xs'
                      : 'text-[#5C554C] hover:text-[#221F1B]'
                  }`}
                >
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Not Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Summary Bar */}
        <div className="bg-[#FAF7F2] border border-[#E0D5C9] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase tracking-wider text-[#8E5A47] font-semibold block">
              Pacing Overview
            </span>
            <p className="text-sm font-sans text-[#221F1B]">
              You have selected <span className="font-semibold">{comfortableCount}</span> activities that feel comfortable right now.
            </p>
          </div>

          <button
            onClick={copySummary}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#221F1B] bg-[#F1EAE2] hover:bg-[#E7DED4] rounded-lg border border-[#DACFBF] transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#5F7161]" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#8E5A47]" />
                <span>Copy My Comfort Preferences</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
