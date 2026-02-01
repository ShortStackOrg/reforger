import { useLayoutEffect, useRef, useState } from 'react';

const DEFAULT_BASE_WIDTH = 794;

export const useContainerScale = (baseWidth: number = DEFAULT_BASE_WIDTH) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const updateScale = (width: number) => {
      const nextScale = Math.min(1, width / baseWidth);
      setScale(Number(nextScale.toFixed(3)));
    };

    updateScale(element.clientWidth);

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => updateScale(entry.contentRect.width));
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [baseWidth]);

  return { containerRef, scale, baseWidth };
};
