import { useState } from 'react';
import HeroSection from './HeroSection';
import LoveLetterSection from './LoveLetterSection';
import SeparateMessageSection from './SeparateMessageSection';
import ReasonsSection from './ReasonsSection';
import MemoryLaneSection from './MemoryLaneSection';
import VirtualGiftBoxSection from './VirtualGiftBoxSection';
import ClosingSection from './ClosingSection';
import SweetResponseModal from './SweetResponseModal';
import FloatingHearts from './FloatingHearts';
import CursorHeartsTrail from './CursorHeartsTrail';

export default function ValentinePage() {
  const [showResponse, setShowResponse] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const handleCtaClick = () => {
    setShowResponse(true);
    setShowHearts(true);
    // Stop hearts after animation completes
    setTimeout(() => setShowHearts(false), 6000);
  };

  return (
    <div className="relative min-h-screen">
      <CursorHeartsTrail />
      
      <HeroSection />
      <LoveLetterSection />
      <SeparateMessageSection />
      <ReasonsSection />
      <MemoryLaneSection />
      <VirtualGiftBoxSection />
      <ClosingSection onCtaClick={handleCtaClick} />
      
      <SweetResponseModal 
        open={showResponse} 
        onOpenChange={setShowResponse}
      />
      
      {showHearts && <FloatingHearts />}
      
      {/* Footer */}
      <footer className="bg-rose-50 dark:bg-rose-950/20 py-8 text-center border-t border-rose-200 dark:border-rose-900/30">
        <p className="text-sm text-rose-600 dark:text-rose-400">
          Built with <span className="text-rose-500">♥</span> using{' '}
          <a 
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
        <p className="text-xs text-rose-500 dark:text-rose-500 mt-1">
          © {new Date().getFullYear()} · Made with love
        </p>
      </footer>
    </div>
  );
}
