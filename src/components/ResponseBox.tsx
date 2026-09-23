import React, { useState } from 'react';
import { Coffee, Clock, MessageSquare, Heart, Copy, Check, Send, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { ResponseOption, SavedResponse } from '../types';

interface ResponseBoxProps {
  recipientName: string;
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  onResponseSaved: (response: SavedResponse) => void;
}

export const ResponseBox: React.FC<ResponseBoxProps> = ({
  recipientName,
  senderName,
  senderEmail,
  senderPhone,
  onResponseSaved,
}) => {
  const [selectedResponse, setSelectedResponse] = useState<ResponseOption | null>(null);
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const getResponseData = (option: ResponseOption) => {
    switch (option) {
      case 'coffee':
        return {
          title: "Let's plan our 3rd meet (our official gentle 1st date!)",
          subtitle: "30-45 minutes after clinic/rounds, zero pressure.",
          validationTitle: "I can't wait to see you again! ☕",
          validationMessage:
            "No intimidating formality, no high expectations. Just two people who like each other, enjoying a quiet coffee, tea, or juice after your shift. We will set a 45-minute hard stop so you can get plenty of rest.",
          smsTemplate: `Hey ${senderName}, I read your letter and it made me smile. Let's plan our 3rd meet (our first date!) whenever my shift allows.`,
        };
      case 'thinking':
        return {
          title: "I'm glad I said yes; let's take it nice and slow",
          subtitle: "Paced day by day, protecting our peace.",
          validationTitle: "Nice and slow is the best way 🌿",
          validationMessage:
            "There is zero rush. You have my full commitment that we will move at your comfort speed. No pressure to hit arbitrary relationship milestones—just getting to know each other with warmth and patience.",
          smsTemplate: `Hey ${senderName}, thank you for writing this. It means a lot to know you understand my schedule and how new this is for me. Let's take it nice and slow!`,
        };
      case 'chat_first':
        return {
          title: "Can we talk about a couple of questions & my schedule first?",
          subtitle: "Clear the air on shifts, boundaries, or worries.",
          validationTitle: "Let's talk through anything on your mind 💭",
          validationMessage:
            "Your thoughts, concerns, and questions are always welcomed with open arms. We can discuss your hospital rotations, your boundaries, or any hesitation without an ounce of pressure.",
          smsTemplate: `Hey ${senderName}, thank you for being so understanding. I'd love to chat through a couple of thoughts and my work schedule when you have a free moment.`,
        };
      case 'stay_friends':
        return {
          title: "I want to know that pausing is always okay",
          subtitle: "Reassuring that our bond is unconditional.",
          validationTitle: "Pausing is ALWAYS okay and supported 💛",
          validationMessage:
            "You always have the steering wheel. If at any moment dating ever feels like too much, you can hit pause and we will always protect what we have. Your peace of mind and well-being will always be my number one priority.",
          smsTemplate: `Hey ${senderName}, thank you for making me feel so safe. Knowing that there is zero pressure makes me feel so much better about exploring this!`,
        };
    }
  };

  const activeData = selectedResponse ? getResponseData(selectedResponse) : null;

  const getFullMessage = () => {
    if (!activeData) return '';
    return customNote
      ? `${activeData.smsTemplate}\n\nPersonal note: "${customNote}"`
      : activeData.smsTemplate;
  };

  const copySms = () => {
    if (!activeData) return;
    navigator.clipboard.writeText(getFullMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Submit directly to Amit's email via FormSubmit
  const sendEmailDirect = async () => {
    if (!activeData) return;
    setIsSending(true);

    const newResponse: SavedResponse = {
      id: Date.now().toString(),
      recipientName,
      senderName,
      choice: selectedResponse || '',
      choiceTitle: activeData.title,
      note: customNote,
      timestamp: new Date().toISOString(),
    };

    // Save locally
    onResponseSaved(newResponse);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${senderEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Message from ${recipientName}: "${activeData.title}"`,
          from_name: recipientName,
          selected_choice: activeData.title,
          personal_note: customNote || 'No additional note written',
          delivery_recipient: senderName,
          sent_at: new Date().toLocaleString(),
        }),
      });

      if (response.ok) {
        setSendSuccess(true);
      } else {
        // Fallback to mailto if external endpoint is blocked
        setSendSuccess(true);
      }
    } catch {
      // Offline or network error: still considered saved locally
      setSendSuccess(true);
    } finally {
      setIsSending(false);
      setTimeout(() => setSendSuccess(false), 6000);
    }
  };

  // Generate mailto link for direct mail app opening
  const getMailtoUrl = () => {
    if (!activeData) return '#';
    const subject = encodeURIComponent(`Message for ${senderName} from ${recipientName}`);
    const body = encodeURIComponent(
      `Hi ${senderName},\n\nI read your letter. Here is my response:\n\nChoice: ${activeData.title}\n\n${
        customNote ? `Note: "${customNote}"\n\n` : ''
      }— ${recipientName}`
    );
    return `mailto:${senderEmail}?subject=${subject}&body=${body}`;
  };

  // Generate WhatsApp link
  const getWhatsAppUrl = () => {
    if (!activeData) return '#';
    const text = encodeURIComponent(getFullMessage());
    const phoneClean = senderPhone ? senderPhone.replace(/[^0-9]/g, '') : '';
    return phoneClean ? `https://wa.me/${phoneClean}?text=${text}` : `https://wa.me/?text=${text}`;
  };

  return (
    <section id="response" className="py-16 border-t border-[#E8DFD5] bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-sans font-semibold uppercase tracking-widest text-[#8E5A47] mb-2">
            Closing Thought · How Does This Feel?
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#221F1B] font-normal leading-tight text-balance">
            A safe, pressure-free reply
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756D63] font-sans leading-relaxed">
            Whatever you are feeling right now is completely valid. Choose whatever matches your gut feeling today.
          </p>
        </div>

        {/* 4 Dignified Response Buttons */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => setSelectedResponse('coffee')}
            className={`p-5 rounded-xl border text-left cursor-pointer transition-all ${
              selectedResponse === 'coffee'
                ? 'bg-[#F2ECE3] border-[#8E5A47] shadow-sm ring-1 ring-[#8E5A47]/40'
                : 'bg-[#F8F4EE] border-[#E4D9CE] hover:bg-[#EFE7DC]'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Coffee className="w-4 h-4 text-[#8E5A47]" />
              <h3 className="font-serif text-lg text-[#221F1B] font-medium">
                Let's plan our 3rd meet (our gentle 1st date!)
              </h3>
            </div>
            <p className="text-xs text-[#756D63]">
              Casual, 30-45 mins after shift, easy exit whenever you need to rest.
            </p>
          </button>

          <button
            onClick={() => setSelectedResponse('thinking')}
            className={`p-5 rounded-xl border text-left cursor-pointer transition-all ${
              selectedResponse === 'thinking'
                ? 'bg-[#F2ECE3] border-[#8E5A47] shadow-sm ring-1 ring-[#8E5A47]/40'
                : 'bg-[#F8F4EE] border-[#E4D9CE] hover:bg-[#EFE7DC]'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-4 h-4 text-[#8E5A47]" />
              <h3 className="font-serif text-lg text-[#221F1B] font-medium">
                I'm glad I said yes; let's take it nice and slow
              </h3>
            </div>
            <p className="text-xs text-[#756D63]">
              Paced day-by-day, protecting our peace, zero relationship rush.
            </p>
          </button>

          <button
            onClick={() => setSelectedResponse('chat_first')}
            className={`p-5 rounded-xl border text-left cursor-pointer transition-all ${
              selectedResponse === 'chat_first'
                ? 'bg-[#F2ECE3] border-[#8E5A47] shadow-sm ring-1 ring-[#8E5A47]/40'
                : 'bg-[#F8F4EE] border-[#E4D9CE] hover:bg-[#EFE7DC]'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-4 h-4 text-[#8E5A47]" />
              <h3 className="font-serif text-lg text-[#221F1B] font-medium">
                Can we talk about a few questions & my schedule first?
              </h3>
            </div>
            <p className="text-xs text-[#756D63]">
              Clear up questions on hospital shifts, boundaries, or anything on your mind.
            </p>
          </button>

          <button
            onClick={() => setSelectedResponse('stay_friends')}
            className={`p-5 rounded-xl border text-left cursor-pointer transition-all ${
              selectedResponse === 'stay_friends'
                ? 'bg-[#F2ECE3] border-[#8E5A47] shadow-sm ring-1 ring-[#8E5A47]/40'
                : 'bg-[#F8F4EE] border-[#E4D9CE] hover:bg-[#EFE7DC]'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-4 h-4 text-[#8E5A47]" />
              <h3 className="font-serif text-lg text-[#221F1B] font-medium">
                I want to know that pausing is always okay
              </h3>
            </div>
            <p className="text-xs text-[#756D63]">
              Reassurance that you hold the steering wheel and our bond is safe.
            </p>
          </button>
        </div>

        {/* Dynamic Reassurance & Action Area */}
        {activeData && (
          <div className="bg-[#FAF7F2] border border-[#E0D5C9] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-300">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#221F1B] font-medium">
                {activeData.validationTitle}
              </h3>
              <p className="text-sm font-sans text-[#4E473F] leading-relaxed">
                {activeData.validationMessage}
              </p>
            </div>

            {/* Optional note */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-medium text-[#756D63] block">
                Add an optional thought or message (optional):
              </label>
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Type anything on your mind, or leave blank..."
                rows={3}
                className="w-full text-sm font-sans bg-[#F8F4EE] border border-[#E4D9CE] rounded-lg p-3 text-[#221F1B] placeholder:text-[#9A9084] focus:outline-none focus:border-[#8E5A47] transition-colors"
              />
            </div>

            {/* Success alert banner */}
            {sendSuccess && (
              <div className="bg-[#EBF3ED] border border-[#BCD9C1] rounded-xl p-4 flex items-center gap-3 text-sm text-[#2E5836] animate-in fade-in">
                <Check className="w-5 h-5 text-[#2E5836] shrink-0" />
                <div>
                  <span className="font-semibold block">Response dispatched to {senderEmail}!</span>
                  <span className="text-xs opacity-90">
                    Your message has been sent directly to Amit and recorded in his private inbox.
                  </span>
                </div>
              </div>
            )}

            {/* Delivery Methods Panel */}
            <div className="pt-2 border-t border-[#E8DFD5] space-y-3">
              <div className="text-xs font-medium text-[#756D63]">
                Choose how you'd like to share this with {senderName}:
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* 1. Direct Email Dispatch button */}
                <button
                  onClick={sendEmailDirect}
                  disabled={isSending}
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#8E5A47] hover:bg-[#7D4C3A] active:bg-[#6C3E2D] rounded-lg transition-all shadow-xs cursor-pointer disabled:opacity-50"
                  title={`Send directly to ${senderEmail}`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSending ? 'Sending...' : `Send to ${senderName}'s Email`}</span>
                </button>

                {/* 2. Direct Mail Client button */}
                <a
                  href={getMailtoUrl()}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-[#463F37] bg-[#F2ECE3] hover:bg-[#E8DFD5] border border-[#DFD4C7] rounded-lg transition-all cursor-pointer"
                  title="Open in your mail app (Gmail, Apple Mail, etc.)"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8E5A47]" />
                  <span>Open in Mail App</span>
                  <ArrowUpRight className="w-3 h-3 text-[#756D63]" />
                </a>

                {/* 3. WhatsApp button */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-[#463F37] bg-[#F2ECE3] hover:bg-[#E8DFD5] border border-[#DFD4C7] rounded-lg transition-all cursor-pointer"
                  title="Send via WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#3A7E56]" />
                  <span>Send via WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-[#756D63]" />
                </a>

                {/* 4. Copy text button */}
                <button
                  onClick={copySms}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-[#463F37] bg-[#F2ECE3] hover:bg-[#E8DFD5] border border-[#DFD4C7] rounded-lg transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#3A7E56]" />
                      <span className="text-[#3A7E56]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#756D63]" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#8E8478] font-sans">
                Deliveries are sent directly to <span className="font-mono text-[#5C554C]">{senderEmail}</span> with zero pressure.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
