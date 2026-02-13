import SectionShell from './SectionShell';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { valentineContent } from '@/content/valentineContent';

export default function ReasonsSection() {
  return (
    <SectionShell className="bg-gradient-to-b from-white to-rose-50 dark:from-background dark:to-rose-950/20">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-rose-900 dark:text-rose-100 mb-4">
          {valentineContent.reasons.title}
        </h2>
        <p className="text-lg sm:text-xl text-rose-600 dark:text-rose-400 font-light max-w-2xl mx-auto">
          {valentineContent.reasons.subtitle}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {valentineContent.reasons.list.map((reason, index) => (
          <Card 
            key={index}
            className="group hover:scale-105 transition-all duration-300 bg-white/90 dark:bg-card/90 backdrop-blur-sm border-rose-200 dark:border-rose-900/30 hover:shadow-xl hover:border-rose-400 dark:hover:border-rose-700"
          >
            <CardContent className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Heart className="h-5 w-5 text-rose-500 fill-rose-500 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-rose-800 dark:text-rose-200 leading-relaxed">
                {reason}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
