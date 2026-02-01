"use client";

import TemplateRenderer from '@/components/reforger/templates/TemplateRenderer';
import { useContainerScale } from '@/hooks/useContainerScale';
import { TemplateId } from '@/types/resume';
import React from 'react';

type ResumeCanvasProps = {
  templateId: TemplateId;
};

const ResumeCanvas = React.forwardRef<HTMLDivElement, ResumeCanvasProps>(
  ({ templateId }, ref) => {
    const { containerRef, scale, baseWidth } = useContainerScale();

    return (
      <div ref={containerRef} className="h-full w-full overflow-auto">
        <div className="flex min-h-full justify-center">
          <div
            className="origin-top-left"
            style={{
              transform: `scale(${scale})`,
              width: `${baseWidth}px`,
            }}
          >
            <div
              id="resume-canvas"
              ref={ref}
              className="min-h-[1123px] w-full rounded-2xl bg-white shadow-[0_25px_80px_-40px_rgba(15,23,42,0.45)]"
            >
              <TemplateRenderer templateId={templateId} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ResumeCanvas.displayName = 'ResumeCanvas';

export default ResumeCanvas;
