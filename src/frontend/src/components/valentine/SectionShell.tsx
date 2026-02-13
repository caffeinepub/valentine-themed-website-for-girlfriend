import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionShell({ children, className, id }: SectionShellProps) {
  return (
    <section 
      id={id}
      className={cn(
        "w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
