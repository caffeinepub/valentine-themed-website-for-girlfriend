import SectionShell from './SectionShell';
import { Card, CardContent } from '@/components/ui/card';
import { valentineContent } from '@/content/valentineContent';

export default function LoveLetterSection() {
  return (
    <SectionShell id="love-letter" className="bg-gradient-to-b from-rose-50 to-white dark:from-rose-950/20 dark:to-background">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Letter Content */}
        <Card className="order-2 lg:order-1 bg-white/80 dark:bg-card/80 backdrop-blur-sm border-rose-200 dark:border-rose-900/30 shadow-xl">
          <CardContent className="p-8 sm:p-10 lg:p-12 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-rose-900 dark:text-rose-100 mb-6">
              {valentineContent.loveLetter.title}
            </h2>
            
            <div className="space-y-4 text-rose-800 dark:text-rose-200 leading-relaxed">
              {valentineContent.loveLetter.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg font-serif">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-rose-200 dark:border-rose-800">
              <p className="text-rose-700 dark:text-rose-300 font-serif italic text-lg">
                {valentineContent.loveLetter.signature},
              </p>
              <p className="text-rose-900 dark:text-rose-100 font-display font-semibold text-xl mt-1">
                {valentineContent.fromName}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Decorative Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <img 
            src="/assets/generated/valentine-heart-illustration.dim_800x800.png"
            alt="Heart illustration"
            className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl animate-float"
          />
        </div>
      </div>
    </SectionShell>
  );
}
