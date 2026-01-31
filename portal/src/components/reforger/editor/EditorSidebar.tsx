"use client";

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useResume } from '@/context/ResumeContext';
import { templateOptions } from '@/lib/templateData';
import { ResumeSectionId, TemplateId } from '@/types/resume';
import { Download } from 'lucide-react';

type EditorSidebarProps = {
  templateId: TemplateId;
  onTemplateChange: (templateId: TemplateId) => void;
  onExport: () => void;
  isExporting: boolean;
};

const sectionLabels: { id: ResumeSectionId; label: string }[] = [
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
];

const EditorSidebar = ({
  templateId,
  onTemplateChange,
  onExport,
  isExporting,
}: EditorSidebarProps) => {
  const { resumeData, toggleSection } = useResume();

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
          {sectionLabels.map((section) => (
            <label
              key={section.id}
              className="flex items-center justify-between gap-3 text-sm text-slate-700"
            >
              <span>{section.label}</span>
              <Checkbox
                checked={resumeData.sections[section.id]}
                onCheckedChange={(checked) =>
                  toggleSection(section.id, checked === true)
                }
              />
            </label>
          ))}
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
