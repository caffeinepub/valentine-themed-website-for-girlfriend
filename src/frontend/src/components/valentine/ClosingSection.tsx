import { useState, useRef } from 'react';
import SectionShell from './SectionShell';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { valentineContent } from '@/content/valentineContent';

interface ClosingSectionProps {
  onCtaClick: () => void;
}

export default function ClosingSection({ onCtaClick }: ClosingSectionProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const noContainerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    if (!noContainerRef.current || !noButtonRef.current) return;

    const container = noContainerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();
    
    // Calculate safe boundaries within the "No" button container
    const maxX = container.width - button.width - 20;
    const maxY = container.height - button.height - 20;
    
    // Generate random position within the container
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleNoHover = () => {
    moveNoButton();
  };

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  // Handle touch attempts
  const handleNoTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  return (
    <SectionShell className="bg-gradient-to-b from-rose-50 to-rose-100 dark:from-rose-950/20 dark:to-rose-950/40">
      <div className="text-center max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-rose-900 dark:text-rose-100">
            {valentineContent.closing.title}
          </h2>
          <p className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-rose-700 dark:text-rose-300">
            {valentineContent.closing.question}
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center justify-center">
          {/* Yes Button */}
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-rose-600 hover:bg-rose-700 text-white shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 text-2xl px-12 py-8 rounded-full group hover:scale-125"
          >
            <Heart className="mr-3 h-7 w-7 fill-white group-hover:animate-pulse" />
            {valentineContent.closing.yesButtonText}
          </Button>

          {/* No Button Container - positioned below Yes button */}
          <div 
            ref={noContainerRef}
            className="relative w-full max-w-md h-32 flex items-center justify-center"
          >
            <Button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              onMouseDown={handleNoClick}
              onTouchStart={handleNoTouchStart}
              onClick={handleNoClick}
              size="lg"
              variant="outline"
              className="border-rose-300 text-rose-600 hover:bg-rose-50 dark:border-rose-700 dark:text-rose-400 dark:hover:bg-rose-950/50 transition-all duration-200 text-xl px-10 py-6 rounded-full absolute"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              {valentineContent.closing.noButtonText}
            </Button>
          </div>
        </div>

        <p className="text-sm text-rose-600 dark:text-rose-400 italic">
          (Try clicking either button!)
        </p>
      </div>
    </SectionShell>
  );
}
