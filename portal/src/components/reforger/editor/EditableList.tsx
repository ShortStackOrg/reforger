"use client";

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Plus, X } from 'lucide-react';
import EditableText from './EditableText';

type EditableListProps = {
  items: string[];
  onChange: (index: number, value: string) => void;
  onAdd?: () => void;
  onRemove?: (index: number) => void;
  className?: string;
  itemClassName?: string;
  ordered?: boolean;
};

const EditableList = ({
  items,
  onChange,
  onAdd,
  onRemove,
  className,
  itemClassName,
  ordered = false,
}: EditableListProps) => {
  const ListElement = ordered ? 'ol' : 'ul';

  return (
    <div className={cn('space-y-2', className)}>
      <ListElement className="w-full space-y-1 overflow-hidden">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="mt-1 text-xs text-muted-foreground">
              {ordered ? `${index + 1}.` : '•'}
            </span>
            <EditableText
              value={item}
              onChange={(value) => onChange(index, value)}
              className={cn('flex-1 min-w-0', itemClassName)}
              placeholder="Add detail"
              multiline
            />
            {onRemove ? (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-muted-foreground hover:text-foreground"
                onClick={() => onRemove(index)}
              >
                <X className="h-3 w-3" />
              </Button>
            ) : null}
          </li>
        ))}
      </ListElement>
      {onAdd ? (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-7 gap-1 text-xs"
          onClick={onAdd}
        >
          <Plus className="h-3 w-3" />
          Add item
        </Button>
      ) : null}
    </div>
  );
};

export default EditableList;
