import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { valentineContent } from '@/content/valentineContent';

export default function HeroSection() {
  const scrollToLetter = () => {
    document.getElementById('love-letter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-hero-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 via-rose-100/70 to-rose-50/90 dark:from-rose-950/80 dark:via-rose-900/70 dark:to-rose-950/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-rose-900 dark:text-rose-100 tracking-tight leading-tight">
              {valentineContent.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-rose-700 dark:text-rose-300 font-light">
              {valentineContent.hero.subtitle}
            </p>
          </div>

          <Button
            onClick={scrollToLetter}
            size="lg"
            className="mt-8 bg-rose-600 hover:bg-rose-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 rounded-full group"
          >
            {valentineContent.hero.scrollText}
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-rose-300 dark:text-rose-700 text-4xl opacity-60 animate-float">
          ♥
        </div>
        <div className="absolute top-40 right-20 text-rose-400 dark:text-rose-600 text-3xl opacity-50 animate-float-delayed">
          ♥
        </div>
        <div className="absolute bottom-32 left-1/4 text-rose-300 dark:text-rose-700 text-5xl opacity-40 animate-float">
          ♥
        </div>
        <div className="absolute bottom-20 right-1/3 text-rose-400 dark:text-rose-600 text-4xl opacity-50 animate-float-delayed">
          ♥
        </div>
      </div>
    </section>
  );
}
