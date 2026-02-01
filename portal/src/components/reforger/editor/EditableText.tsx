"use client";

import { useViewMode } from '@/context/ViewModeContext';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

type EditableTextProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
};

const EditableText = ({
  value,
  onChange,
  className,
  placeholder,
  multiline = false,
}: EditableTextProps) => {
  const { viewMode } = useViewMode();
  const ref = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(!value);

  useEffect(() => {
    if (!ref.current || document.activeElement === ref.current) {
      return;
    }
    if (ref.current.innerText !== value) {
      ref.current.innerText = value;
      setIsEmpty(value.trim().length === 0);
    }
  }, [value]);

  const handleBlur = () => {
    if (!ref.current) {
      return;
    }
    const nextValue = ref.current.innerText.replace(/\s+$/g, '');
    setIsEmpty(nextValue.trim().length === 0);
    onChange(nextValue);
  };

  const handleInput = () => {
    if (!ref.current) {
      return;
    }
    const nextValue = ref.current.innerText;
    setIsEmpty(nextValue.trim().length === 0);
    onChange(nextValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!multiline && event.key === 'Enter') {
      event.preventDefault();
      ref.current?.blur();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const text = event.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  if (viewMode) {
    return (
      <div
        className={cn(
          'min-h-[1.2em] whitespace-pre-wrap break-words [overflow-wrap:anywhere]',
          multiline ? 'w-full min-w-0' : 'min-w-[6ch]',
          className
        )}
      >
        {value}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      data-placeholder={placeholder}
      onBlur={handleBlur}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      className={cn(
        'min-h-[1.2em] whitespace-pre-wrap break-words [overflow-wrap:anywhere] outline-none transition',
        multiline ? 'w-full min-w-0' : 'min-w-[6ch]',
        isEmpty && placeholder
          ? 'relative before:pointer-events-none before:absolute before:inset-0 before:text-muted-foreground before:content-[attr(data-placeholder)] before:text-inherit before:whitespace-pre-wrap'
          : '',
        className
      )}
    />
  );
};

export default EditableText;
