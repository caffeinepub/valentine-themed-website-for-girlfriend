import SectionShell from './SectionShell';
import { Card, CardContent } from '@/components/ui/card';
import { valentineContent } from '@/content/valentineContent';
import { Sparkles } from 'lucide-react';

export default function SeparateMessageSection() {
  return (
    <SectionShell className="bg-gradient-to-b from-white to-rose-50 dark:from-background dark:to-rose-950/20">
      <div className="flex justify-center">
        <Card className="max-w-2xl w-full bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/40 dark:to-pink-950/40 border-rose-300 dark:border-rose-800 shadow-2xl">
          <CardContent className="p-8 sm:p-10 lg:p-12 space-y-6 text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12 text-rose-500 dark:text-rose-400 animate-pulse" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-rose-900 dark:text-rose-100 mb-6">
              {valentineContent.separateMessage.title}
            </h2>
            
            <div className="space-y-4">
              {valentineContent.separateMessage.paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-lg sm:text-xl font-serif text-rose-800 dark:text-rose-200 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-6 flex justify-center gap-2">
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0ms' }}>💖</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '150ms' }}>✨</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '300ms' }}>👑</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
