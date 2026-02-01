"use client";

import EditorSidebar from '@/components/reforger/editor/EditorSidebar';
import ResumeCanvas from '@/components/reforger/editor/ResumeCanvas';
import { Button } from '@/components/ui/button';
import { useViewMode } from '@/context/ViewModeContext';
import { exportResumeToPdf } from '@/lib/exportPdf';
import { cn } from '@/lib/utils';
import { TemplateId } from '@/types/resume';
import { ArrowLeft, Download, Menu, X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { toast } from 'sonner';

type EditorLayoutProps = {
  templateId: TemplateId;
  onTemplateChange: (templateId: TemplateId) => void;
};

const EditorLayout = ({ templateId, onTemplateChange }: EditorLayoutProps) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const { viewMode, setViewMode } = useViewMode();
  const [isExporting, setIsExporting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleExport = async () => {
    if (!resumeRef.current) {
      toast.error('Resume not ready to export.');
      return;
    }
    try {
      setIsExporting(true);
      await exportResumeToPdf(resumeRef.current, `${templateId}-resume.pdf`);
      toast.success('PDF exported.');
    } catch (error) {
      toast.error('Export failed. Try again.');
    } finally {
      setIsExporting(false);
    }
  };

  if (viewMode) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] flex-col bg-slate-100">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
          <Button
            type="button"
            variant="ghost"
            className="gap-2"
            onClick={() => setViewMode(false)}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Edit
          </Button>
          <Button
            type="button"
            className="gap-2"
            onClick={handleExport}
            disabled={isExporting}
          >
            <Download className="h-4 w-4" />
            {isExporting ? 'Exporting...' : 'Export PDF'}
          </Button>
        </div>
        <div className="flex-1 p-4 md:p-8">
          <ResumeCanvas ref={resumeRef} templateId={templateId} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-slate-100">
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-72 transform border-r border-slate-200 bg-slate-50 transition-transform md:static md:translate-x-0',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <EditorSidebar
          templateId={templateId}
          onTemplateChange={(next) => {
            onTemplateChange(next);
            setIsSidebarOpen(false);
          }}
          onViewResult={() => setViewMode(true)}
        />
      </div>

      {isSidebarOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      ) : null}

      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="text-sm font-semibold text-slate-700">
            Resume Editor
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
        <div className="flex-1 p-4 md:p-8">
          <ResumeCanvas ref={resumeRef} templateId={templateId} />
        </div>
      </div>
    </div>
  );
};

export default EditorLayout;
