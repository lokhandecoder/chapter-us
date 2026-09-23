import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroLetter } from './components/HeroLetter';
import { WhyHerSection } from './components/WhyHerSection';
import { WhyUsSection } from './components/WhyUsSection';
import { AttachmentAnxietySection } from './components/AttachmentAnxietySection';
import { SmallStepsRoadmap } from './components/SmallStepsRoadmap';
import { ReliabilityBlueprint } from './components/ReliabilityBlueprint';
import { InteractiveComfortGauge } from './components/InteractiveComfortGauge';
import { GroundRulesAgreement } from './components/GroundRulesAgreement';
import { ResponseBox } from './components/ResponseBox';
import { Footer } from './components/Footer';
import { PersonalizeModal } from './components/PersonalizeModal';
import { RepliesInboxModal } from './components/RepliesInboxModal';
import { PersonalizationConfig, SavedResponse } from './types';
import { defaultPersonalization } from './data/defaultContent';

export default function App() {
  const [personalization, setPersonalization] = useState<PersonalizationConfig>(() => {
    // Check URL query parameters first
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlHer = params.get('her');
      const urlFrom = params.get('from');
      const urlDrink = params.get('drink');
      const urlMem = params.get('mem');
      const urlTrait = params.get('trait');
      const urlMail = params.get('mail');
      const urlPhone = params.get('phone');

      if (urlHer || urlFrom) {
        return {
          recipientName: urlHer || defaultPersonalization.recipientName,
          senderName: urlFrom || defaultPersonalization.senderName,
          senderEmail: urlMail || defaultPersonalization.senderEmail,
          senderPhone: urlPhone || defaultPersonalization.senderPhone,
          sharedMemory: urlMem || defaultPersonalization.sharedMemory,
          favoriteDrink: urlDrink || defaultPersonalization.favoriteDrink,
          specialTrait: urlTrait || defaultPersonalization.specialTrait,
        };
      }

      // Check localStorage
      try {
        const saved = localStorage.getItem('at_your_pace_config');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.recipientName && parsed.recipientName !== 'You') {
            return { ...defaultPersonalization, ...parsed };
          }
        }
      } catch {
        // Ignore fallback
      }
    }
    return defaultPersonalization;
  });

  const [replies, setReplies] = useState<SavedResponse[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('dr_trunali_saved_replies');
        if (stored) {
          return JSON.parse(stored);
        }
      } catch {
        // Ignore fallback
      }
    }
    return [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInboxOpen, setIsInboxOpen] = useState(false);

  const handleSaveConfig = (newConfig: PersonalizationConfig) => {
    setPersonalization(newConfig);
    try {
      localStorage.setItem('at_your_pace_config', JSON.stringify(newConfig));
    } catch {
      // Ignore
    }
  };

  const handleNewResponse = (response: SavedResponse) => {
    setReplies((prev) => {
      const updated = [response, ...prev];
      try {
        localStorage.setItem('dr_trunali_saved_replies', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const handleClearReplies = () => {
    setReplies([]);
    try {
      localStorage.removeItem('dr_trunali_saved_replies');
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#24211D] font-sans selection:bg-[#E8DDD4] selection:text-[#1F1B16]">
      {/* Top Bar Navigation */}
      <Header
        recipientName={personalization.recipientName}
        onOpenPersonalize={() => setIsModalOpen(true)}
        onOpenInbox={() => setIsInboxOpen(true)}
        replyCount={replies.length}
      />

      {/* Main Content Area */}
      <main>
        {/* Opening Letter & Ambient Sound */}
        <HeroLetter
          recipientName={personalization.recipientName}
          senderName={personalization.senderName}
          favoriteDrink={personalization.favoriteDrink}
        />

        {/* Chapter 01: Why You */}
        <WhyHerSection
          recipientName={personalization.recipientName}
          sharedMemory={personalization.sharedMemory}
          specialTrait={personalization.specialTrait}
        />

        {/* Chapter 02: Why Us (Friendship bedrock) */}
        <WhyUsSection />

        {/* Chapter 03: Safe Attachment (Deconstructing fears) */}
        <AttachmentAnxietySection />

        {/* Chapter 04: Small Steps Roadmap */}
        <SmallStepsRoadmap />

        {/* Chapter 05: Demonstrating Reliability */}
        <ReliabilityBlueprint />

        {/* Interactive Pacing & Comfort Gauge */}
        <InteractiveComfortGauge />

        {/* Sacred Ground Rules */}
        <GroundRulesAgreement />

        {/* Pressure-Free Response & Direct Delivery */}
        <ResponseBox
          recipientName={personalization.recipientName}
          senderName={personalization.senderName}
          senderEmail={personalization.senderEmail}
          senderPhone={personalization.senderPhone}
          onResponseSaved={handleNewResponse}
        />
      </main>

      {/* Editorial Footer */}
      <Footer recipientName={personalization.recipientName} />

      {/* Personalization Dialog */}
      <PersonalizeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        config={personalization}
        onSave={handleSaveConfig}
      />

      {/* Private Replies Inbox Dialog */}
      <RepliesInboxModal
        isOpen={isInboxOpen}
        onClose={() => setIsInboxOpen(false)}
        replies={replies}
        onClearReplies={handleClearReplies}
        senderEmail={personalization.senderEmail}
      />
    </div>
  );
}
