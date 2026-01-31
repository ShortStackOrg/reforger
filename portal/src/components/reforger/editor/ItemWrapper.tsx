"use client";

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Trash2 } from 'lucide-react';
import React from 'react';

type ItemWrapperProps = {
  children: React.ReactNode;
  onRemove?: () => void;
  className?: string;
};

const ItemWrapper = ({ children, onRemove, className }: ItemWrapperProps) => {
  return (
    <div
      className={cn(
        'group relative rounded-xl border border-transparent p-1 transition hover:border-slate-200',
        className
      )}
    >
      {onRemove ? (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1 h-6 w-6 text-muted-foreground opacity-0 transition group-hover:opacity-100 hover:text-foreground"
          onClick={onRemove}
          aria-label="Remove item"
        >
          <Trash2 className="h-3 w-3" />
        </Button>
      ) : null}
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default ItemWrapper;
