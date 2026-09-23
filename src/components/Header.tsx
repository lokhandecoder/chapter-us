import React from 'react';
import { SlidersHorizontal, Mail } from 'lucide-react';

interface HeaderProps {
  onOpenPersonalize: () => void;
  onOpenInbox: () => void;
  replyCount: number;
  recipientName: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPersonalize,
  onOpenInbox,
  replyCount,
  recipientName,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8DFD5] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#letter" 
          className="font-serif text-xl tracking-tight font-medium text-[#221F1B] hover:text-[#8E5A47] transition-colors"
        >
          At Your Pace
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-sans font-medium tracking-wide uppercase text-[#756D63]">
          <a href="#why-you" className="hover:text-[#221F1B] transition-colors py-1">
            Why You
          </a>
          <a href="#why-us" className="hover:text-[#221F1B] transition-colors py-1">
            Why Us
          </a>
          <a href="#attachment" className="hover:text-[#221F1B] transition-colors py-1">
            Safe Attachment
          </a>
          <a href="#small-steps" className="hover:text-[#221F1B] transition-colors py-1">
            Small Steps
          </a>
          <a href="#reliability" className="hover:text-[#221F1B] transition-colors py-1">
            Reliability
          </a>
          <a href="#comfort-gauge" className="hover:text-[#221F1B] transition-colors py-1">
            Comfort Gauge
          </a>
          <a href="#response" className="hover:text-[#221F1B] transition-colors py-1">
            A Safe Reply
          </a>
        </nav>

        {/* Zone 3: Actions - Inbox + Personalize */}
        <div className="flex items-center gap-2.5">
          {/* Inbox Button */}
          <button
            onClick={onOpenInbox}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4A443D] bg-[#F1EAE2] hover:bg-[#E7DED4] active:bg-[#DDD2C6] rounded-md transition-colors border border-[#E0D5C9] cursor-pointer relative"
            title="View replies from Dr. Trunali"
          >
            <Mail className="w-3.5 h-3.5 text-[#8E5A47]" />
            <span className="hidden sm:inline">Inbox</span>
            {replyCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#8E5A47] text-white text-[10px] font-bold flex items-center justify-center">
                {replyCount}
              </span>
            )}
          </button>

          {/* Personalize Button */}
          <button
            onClick={onOpenPersonalize}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4A443D] bg-[#F1EAE2] hover:bg-[#E7DED4] active:bg-[#DDD2C6] rounded-md transition-colors border border-[#E0D5C9] whitespace-nowrap cursor-pointer"
            title="Personalize names, email, and details"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8E5A47]" />
            <span className="hidden sm:inline">For</span>
            <span className="font-semibold text-[#221F1B] max-w-[80px] truncate">{recipientName}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

