import { useState } from 'react';
import SectionShell from './SectionShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Sparkles } from 'lucide-react';
import { valentineContent } from '@/content/valentineContent';
import ConfettiBurst from './ConfettiBurst';

export default function VirtualGiftBoxSection() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpenGift = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setIsRevealed(true);
      setShowConfetti(false);
    }, 1000);
  };

  return (
    <SectionShell className="bg-gradient-to-b from-white to-rose-50 dark:from-background dark:to-rose-950/20">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-rose-900 dark:text-rose-100">
            {valentineContent.giftBox.title}
          </h2>
          <p className="text-lg text-rose-600 dark:text-rose-400 font-serif italic">
            {valentineContent.giftBox.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!isRevealed ? (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <Gift className="w-32 h-32 text-rose-600 dark:text-rose-400 animate-bounce" />
                  <Sparkles className="w-8 h-8 text-rose-400 absolute -top-2 -right-2 animate-pulse" />
                  <Sparkles className="w-6 h-6 text-rose-500 absolute -bottom-1 -left-1 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
              <Button
                onClick={handleOpenGift}
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 text-2xl px-12 py-8 rounded-full group hover:scale-110"
              >
                {valentineContent.giftBox.buttonText}
              </Button>
            </div>
          ) : (
            <Card className="border-4 border-rose-300 dark:border-rose-700 shadow-2xl bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 dark:from-rose-950/40 dark:via-pink-950/40 dark:to-rose-950/60 animate-in fade-in zoom-in duration-500">
              <CardHeader className="text-center border-b-2 border-rose-200 dark:border-rose-800 pb-6">
                <CardTitle className="text-4xl font-display font-bold text-rose-900 dark:text-rose-100">
                  {valentineContent.giftBox.couponTitle}
                </CardTitle>
                <div className="flex justify-center gap-2 mt-4">
                  <Sparkles className="w-6 h-6 text-rose-500 animate-pulse" />
                  <Sparkles className="w-6 h-6 text-rose-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <Sparkles className="w-6 h-6 text-rose-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
              </CardHeader>
              <CardContent className="pt-8 space-y-6">
                <p className="text-xl text-rose-700 dark:text-rose-300 font-serif text-center font-semibold">
                  {valentineContent.giftBox.couponText}
                </p>
                <ul className="space-y-3">
                  {valentineContent.giftBox.couponOptions.map((option, index) => (
                    <li key={index} className="flex items-start gap-3 text-rose-800 dark:text-rose-200">
                      <span className="text-rose-500 text-xl mt-1">♥</span>
                      <span className="text-lg font-serif">{option}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t-2 border-dashed border-rose-300 dark:border-rose-700">
                  <p className="text-sm text-rose-600 dark:text-rose-400 text-center italic">
                    {valentineContent.giftBox.couponNote}
                  </p>
                </div>
                <div className="text-center pt-4">
                  <p className="text-3xl">💕</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {showConfetti && <ConfettiBurst />}
    </SectionShell>
  );
}
