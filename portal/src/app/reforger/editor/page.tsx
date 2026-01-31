"use client";

import EditorLayout from '@/components/reforger/editor/EditorLayout';
import { ResumeProvider } from '@/context/ResumeContext';
import { templateOptions } from '@/lib/templateData';
import { TemplateId } from '@/types/resume';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const templateIds = new Set(templateOptions.map((template) => template.id));

const EditorPage = () => {
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
      <EditorLayout
        templateId={templateId}
        onTemplateChange={handleTemplateChange}
      />
    </ResumeProvider>
  );
};

export default EditorPage;
