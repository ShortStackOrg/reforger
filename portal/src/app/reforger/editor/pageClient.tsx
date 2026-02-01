"use client";

import EditorLayout from '@/components/reforger/editor/EditorLayout';
import { ResumeProvider } from '@/context/ResumeContext';
import { ViewModeProvider } from '@/context/ViewModeContext';
import { templateOptions } from '@/lib/templateData';
import { TemplateId } from '@/types/resume';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const templateIds = new Set(templateOptions.map((template) => template.id));

const EditorPageClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTemplate = searchParams.get('template') as TemplateId | null;
  const [templateId, setTemplateId] = useState<TemplateId>(
    templateIds.has(initialTemplate ?? 'professional')
      ? (initialTemplate as TemplateId)
      : 'professional'
  );

  useEffect(() => {
    const nextTemplate = searchParams.get('template') as TemplateId | null;
    if (nextTemplate && templateIds.has(nextTemplate)) {
      setTemplateId(nextTemplate);
    }
  }, [searchParams]);

  const handleTemplateChange = (nextTemplate: TemplateId) => {
    setTemplateId(nextTemplate);
    router.push(`/reforger/editor?template=${nextTemplate}`);
  };

  return (
    <ResumeProvider>
      <ViewModeProvider>
        <EditorLayout
          templateId={templateId}
          onTemplateChange={handleTemplateChange}
        />
      </ViewModeProvider>
    </ResumeProvider>
  );
};

export default EditorPageClient;
