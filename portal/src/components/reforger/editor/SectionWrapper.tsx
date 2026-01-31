import { cn } from '@/lib/utils';
import React from 'react';

type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  headingClassName?: string;
};

const SectionWrapper = ({
  title,
  children,
  className,
  headingClassName,
}: SectionWrapperProps) => {
  return (
    <section className={cn('space-y-3', className)}>
      <div
        className={cn(
          'text-xs uppercase tracking-[0.3em] text-muted-foreground',
          headingClassName
        )}
      >
        {title}
      </div>
      <div className="space-y-3">{children}</div>
    </section>
  );
};

export default SectionWrapper;
