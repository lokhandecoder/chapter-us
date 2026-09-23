import React from 'react';
import { X, Mail, Clock, MessageSquare, Heart, Trash2 } from 'lucide-react';
import { SavedResponse } from '../types';

interface RepliesInboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  replies: SavedResponse[];
  onClearReplies: () => void;
  senderEmail: string;
}

export const RepliesInboxModal: React.FC<RepliesInboxModalProps> = ({
  isOpen,
  onClose,
  replies,
  onClearReplies,
  senderEmail,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F1B16]/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] border border-[#E0D5C9] rounded-2xl w-full max-w-lg p-6 shadow-xl relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E8DFD5] pb-4 mb-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#8E5A47]/10 flex items-center justify-center text-[#8E5A47]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#221F1B] font-medium">
                Replies Inbox
              </h3>
              <p className="text-xs text-[#756D63] font-sans">
                Responses delivered to {senderEmail}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-[#756D63] hover:text-[#221F1B] hover:bg-[#F0E8DE] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="overflow-y-auto space-y-4 pr-1 grow">
          {replies.length === 0 ? (
            <div className="text-center py-12 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F3ECE4] text-[#8E5A47] flex items-center justify-center mx-auto">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-[#221F1B]">No responses yet</h4>
              <p className="text-xs text-[#756D63] max-w-xs mx-auto leading-relaxed">
                When Dr. Trunali clicks "Send to Amit's Email" or replies through the app, her choices and notes will automatically appear here and arrive at <strong className="text-[#221F1B]">{senderEmail}</strong>.
              </p>
            </div>
          ) : (
            replies.map((reply) => (
              <div
                key={reply.id}
                className="bg-[#F8F4EE] border border-[#E4D9CE] rounded-xl p-4 space-y-2 text-sm"
              >
                <div className="flex items-center justify-between text-xs text-[#756D63] border-b border-[#EFE7DC] pb-2">
                  <span className="font-medium text-[#8E5A47] flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 fill-[#8E5A47]/30" />
                    From: {reply.recipientName}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(reply.timestamp).toLocaleString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-[#756D63] uppercase tracking-wider font-semibold block">
                    Choice:
                  </span>
                  <p className="font-serif text-base text-[#221F1B] font-medium">
                    {reply.choiceTitle}
                  </p>
                </div>

                {reply.note && (
                  <div className="pt-1">
                    <span className="text-xs text-[#756D63] uppercase tracking-wider font-semibold block">
                      Her Note:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-[#463F37] bg-[#F2ECE3] p-2.5 rounded-md mt-1 italic">
                      “{reply.note}”
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer info & Clear */}
        {replies.length > 0 && (
          <div className="border-t border-[#E8DFD5] pt-3 mt-3 flex items-center justify-between shrink-0">
            <span className="text-xs text-[#756D63]">
              {replies.length} {replies.length === 1 ? 'response' : 'responses'} received
            </span>
            <button
              onClick={onClearReplies}
              className="text-xs text-[#9E4A3B] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear history</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
