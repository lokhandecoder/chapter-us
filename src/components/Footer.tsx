import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  recipientName: string;
}

export const Footer: React.FC<FooterProps> = ({ recipientName }) => {
  return (
    <footer className="border-t border-[#E8DFD5] py-12 px-6 bg-[#F6F1EA] text-center text-xs text-[#756D63] font-sans">
      <div className="max-w-4xl mx-auto space-y-3">
        <p className="font-serif italic text-base text-[#463F37]">
          “At your speed. In your time. Always with unconditional respect.”
        </p>

        <div className="flex items-center justify-center gap-2 text-xs text-[#8E8478] pt-2">
          <span>Crafted with genuine care for {recipientName}</span>
          <span aria-hidden="true">·</span>
          <span>Zero pressure guaranteed</span>
        </div>
      </div>
    </footer>
  );
};
