"use client";

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useResume } from '@/context/ResumeContext';
import { templateOptions } from '@/lib/templateData';
import { SectionType, TemplateId } from '@/types/resume';
import {
  ChevronDown,
  ChevronUp,
  Download,
  Eye,
  EyeOff,
  Plus,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';

type EditorSidebarProps = {
  templateId: TemplateId;
  onTemplateChange: (templateId: TemplateId) => void;
  onExport: () => void;
  isExporting: boolean;
};

const sectionTypeOptions: { value: SectionType; label: string }[] = [
  { value: 'experience', label: 'Experience' },
  { value: 'education', label: 'Education' },
  { value: 'skills', label: 'Skills' },
];

const EditorSidebar = ({
  templateId,
  onTemplateChange,
  onExport,
  isExporting,
}: EditorSidebarProps) => {
  const {
    resumeData,
    addSection,
    removeSection,
    moveSection,
    toggleSectionVisibility,
  } = useResume();
  const [sectionTypeToAdd, setSectionTypeToAdd] =
    useState<SectionType>('experience');

  return (
    <aside className="flex h-full w-full flex-col gap-6 border-r border-slate-200 bg-slate-50/80 px-5 py-6">
      <div className="space-y-3">
        <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Template
        </div>
        <Select value={templateId} onValueChange={onTemplateChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select template" />
          </SelectTrigger>
          <SelectContent>
            {templateOptions.map((template) => (
              <SelectItem key={template.id} value={template.id}>
                {template.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Sections
        </div>
        <div className="space-y-2">
          {resumeData.sections.map((section, index) => (
            <div
              key={section.id}
              className="rounded-lg border border-slate-200 bg-white p-2"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-sm font-medium text-slate-700">
                    {section.title}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {section.type}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-slate-500 hover:text-slate-700"
                    onClick={() => moveSection(section.id, 'up')}
                    disabled={index === 0}
                    aria-label="Move section up"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-slate-500 hover:text-slate-700"
                    onClick={() => moveSection(section.id, 'down')}
                    disabled={index === resumeData.sections.length - 1}
                    aria-label="Move section down"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-slate-500 hover:text-slate-700"
                    onClick={() => toggleSectionVisibility(section.id)}
                    aria-label="Toggle section visibility"
                  >
                    {section.visible ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-rose-500 hover:text-rose-600"
                    onClick={() => removeSection(section.id)}
                    aria-label="Remove section"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Select
            value={sectionTypeToAdd}
            onValueChange={(value) => setSectionTypeToAdd(value as SectionType)}
          >
            <SelectTrigger className="h-8">
              <SelectValue placeholder="Section type" />
            </SelectTrigger>
            <SelectContent>
              {sectionTypeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-8 gap-1"
            onClick={() => addSection(sectionTypeToAdd)}
          >
            <Plus className="h-3 w-3" />
            Add Section
          </Button>
        </div>
      </div>

      <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-500">
        <div className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
          Tips
        </div>
        <p>Click any text to edit. Paste keeps only plain text.</p>
        <p>Use sections to focus the narrative for each job.</p>
      </div>

      <Button
        type="button"
        className="mt-auto gap-2"
        onClick={onExport}
        disabled={isExporting}
      >
        <Download className="h-4 w-4" />
        {isExporting ? 'Exporting...' : 'Export PDF'}
      </Button>
    </aside>
  );
};

export default EditorSidebar;
