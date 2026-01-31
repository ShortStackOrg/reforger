import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import React from 'react';
import EditableText from './EditableText';

type SectionWrapperProps = {
  title: string;
  onTitleChange?: (value: string) => void;
  onAddItem?: () => void;
  children: React.ReactNode;
  className?: string;
  headingClassName?: string;
  titleClassName?: string;
};

const SectionWrapper = ({
  title,
  onTitleChange,
  onAddItem,
  children,
  className,
  headingClassName,
  titleClassName,
}: SectionWrapperProps) => {
  return (
    <section className={cn('space-y-3', className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {onTitleChange ? (
          <EditableText
            value={title}
            onChange={onTitleChange}
            className={cn(
              'text-xs uppercase tracking-[0.3em] text-muted-foreground',
              headingClassName,
              titleClassName
            )}
            placeholder="Section title"
          />
        ) : (
          <div
            className={cn(
              'text-xs uppercase tracking-[0.3em] text-muted-foreground',
              headingClassName,
              titleClassName
            )}
          >
            {title}
          </div>
        )}
        {onAddItem ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-7 gap-1 text-xs"
            onClick={onAddItem}
          >
            <Plus className="h-3 w-3" />
            Add section
          </Button>
        ) : null}
      </div>
      <div className="space-y-3">{children}</div>
    </section>
  );
};

export default SectionWrapper;
