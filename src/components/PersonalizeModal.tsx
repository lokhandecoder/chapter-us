import React, { useState } from 'react';
import { X, Check, Copy, Share2, Sparkles, RotateCcw } from 'lucide-react';
import { PersonalizationConfig } from '../types';
import { defaultPersonalization } from '../data/defaultContent';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: PersonalizationConfig;
  onSave: (newConfig: PersonalizationConfig) => void;
}

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [formData, setFormData] = useState<PersonalizationConfig>(config);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(defaultPersonalization);
  };

  const copyShareLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('her', formData.recipientName);
    url.searchParams.set('from', formData.senderName);
    if (formData.favoriteDrink) url.searchParams.set('drink', formData.favoriteDrink);
    if (formData.sharedMemory) url.searchParams.set('mem', formData.sharedMemory);
    if (formData.specialTrait) url.searchParams.set('trait', formData.specialTrait);

    navigator.clipboard.writeText(url.toString());
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] border border-[#E3D8CC] rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-[#E8DFD5] pb-4 mb-6">
          <div>
            <h3 className="font-serif text-2xl text-[#221F1B] font-medium">
              Personalize This Letter
            </h3>
            <p className="text-xs text-[#756D63] font-sans mt-0.5">
              Tailor this page for your specific friend before sending it to her.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#756D63] hover:text-[#221F1B] hover:bg-[#F0E8DE] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-xs font-sans">
          <div>
            <label className="block text-[#4A433A] font-medium mb-1 uppercase tracking-wider text-[11px]">
              Her Name or Nickname
            </label>
            <input
              type="text"
              value={formData.recipientName}
              onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
              placeholder="e.g. Maya, Sarah, You"
              required
              className="w-full text-sm bg-[#F5EFEB] border border-[#E0D5C9] rounded-lg p-2.5 text-[#221F1B] focus:outline-none focus:border-[#8E5A47]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[#4A433A] font-medium mb-1 uppercase tracking-wider text-[11px]">
                Your Email (Where replies are sent)
              </label>
              <input
                type="email"
                value={formData.senderEmail}
                onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                placeholder="e.g. amitlokhande909@gmail.com"
                required
                className="w-full text-sm bg-[#F5EFEB] border border-[#E0D5C9] rounded-lg p-2.5 text-[#221F1B] focus:outline-none focus:border-[#8E5A47]"
              />
            </div>
            <div>
              <label className="block text-[#4A433A] font-medium mb-1 uppercase tracking-wider text-[11px]">
                WhatsApp Number (Optional)
              </label>
              <input
                type="tel"
                value={formData.senderPhone || ''}
                onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                placeholder="e.g. +919876543210"
                className="w-full text-sm bg-[#F5EFEB] border border-[#E0D5C9] rounded-lg p-2.5 text-[#221F1B] focus:outline-none focus:border-[#8E5A47]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#4A433A] font-medium mb-1 uppercase tracking-wider text-[11px]">
              Her Favorite Drink or Coffee Order
            </label>
            <input
              type="text"
              value={formData.favoriteDrink}
              onChange={(e) => setFormData({ ...formData, favoriteDrink: e.target.value })}
              placeholder="e.g. oat vanilla latte, iced matcha, warm tea"
              className="w-full text-sm bg-[#F5EFEB] border border-[#E0D5C9] rounded-lg p-2.5 text-[#221F1B] focus:outline-none focus:border-[#8E5A47]"
            />
          </div>

          <div>
            <label className="block text-[#4A433A] font-medium mb-1 uppercase tracking-wider text-[11px]">
              A Cherished Shared Memory
            </label>
            <textarea
              value={formData.sharedMemory}
              onChange={(e) => setFormData({ ...formData, sharedMemory: e.target.value })}
              placeholder="e.g. the night we sat in the park talking about our craziest fears"
              rows={2}
              className="w-full text-sm bg-[#F5EFEB] border border-[#E0D5C9] rounded-lg p-2.5 text-[#221F1B] focus:outline-none focus:border-[#8E5A47]"
            />
          </div>

          <div>
            <label className="block text-[#4A433A] font-medium mb-1 uppercase tracking-wider text-[11px]">
              A Specific Quality You Admire In Her
            </label>
            <input
              type="text"
              value={formData.specialTrait}
              onChange={(e) => setFormData({ ...formData, specialTrait: e.target.value })}
              placeholder="e.g. your kindness, your sharp wit, how thoughtfully you listen"
              className="w-full text-sm bg-[#F5EFEB] border border-[#E0D5C9] rounded-lg p-2.5 text-[#221F1B] focus:outline-none focus:border-[#8E5A47]"
            />
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#E8DFD5] flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-[#756D63] hover:text-[#221F1B] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={copyShareLink}
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#4A433A] bg-[#EFE8DF] hover:bg-[#E5DCD1] rounded-lg border border-[#DACFBF] transition-all cursor-pointer flex-1 sm:flex-none"
                title="Generates a customized URL with these details encoded"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#5F7161]" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#8E5A47]" />
                    <span>Shareable Link</span>
                  </>
                )}
              </button>

              <button
                type="submit"
                className="px-4 py-2 text-xs font-medium text-white bg-[#8E5A47] hover:bg-[#7D4C3A] rounded-lg transition-all shadow-xs cursor-pointer flex-1 sm:flex-none text-center"
              >
                Save & Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
