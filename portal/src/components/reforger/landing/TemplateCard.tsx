"use client";

import { TemplateOption } from '@/lib/templateData';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type TemplateCardProps = {
  template: TemplateOption;
};

const TemplateCard = ({ template }: TemplateCardProps) => {
  return (
    <Link
      href={`/reforger/editor?template=${template.id}`}
      className="group flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(15,23,42,0.4)]"
    >
      <div
        className={cn(
          'relative h-40 overflow-hidden rounded-2xl bg-gradient-to-br',
          template.palette
        )}
      >
        <div className="absolute inset-0 bg-white/30" />
        <div className="absolute bottom-4 left-4 space-y-2">
          <div className="h-2 w-24 rounded-full bg-white/70" />
          <div className="h-2 w-16 rounded-full bg-white/60" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-display font-semibold text-slate-900">
            {template.name}
          </h3>
          <span className="rounded-full border border-slate-200 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
            {template.highlight}
          </span>
        </div>
        <p className="text-sm text-slate-600">{template.description}</p>
        <span className="inline-flex items-center text-xs font-semibold text-slate-700">
          Edit this template
        </span>
      </div>
    </Link>
  );
};

export default TemplateCard;
