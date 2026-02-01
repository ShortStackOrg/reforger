"use client";

import TemplateCard from '@/components/reforger/landing/TemplateCard';
import { templateOptions } from '@/lib/templateData';

const TemplateGallery = () => {
  return (
    <section id="templates" className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-semibold text-slate-900">
            Choose your starting point
          </h2>
          <p className="text-sm text-slate-600">
            Each template is fully editable and optimized for PDF export.
          </p>
        </div>
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
          4 Templates
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {templateOptions.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </section>
  );
};

export default TemplateGallery;
