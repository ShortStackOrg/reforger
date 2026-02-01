import { TemplateId } from '@/types/resume';

export type TemplateOption = {
  id: TemplateId;
  name: string;
  description: string;
  highlight: string;
  palette: string;
};

export const templateOptions: TemplateOption[] = [
  {
    id: 'professional',
    name: 'Professional',
    description: 'Quiet, structured, recruiter-ready.',
    highlight: 'Crisp hierarchy',
    palette: 'from-slate-50 via-slate-100 to-slate-200',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Playful layout with color blocks.',
    highlight: 'Editorial rhythm',
    palette: 'from-amber-50 via-rose-100 to-orange-200',
  },
  {
    id: 'bold',
    name: 'Bold',
    description: 'Impactful typography and strong accents.',
    highlight: 'High contrast',
    palette: 'from-zinc-900 via-zinc-800 to-zinc-700',
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Minimal layout with soft geometry.',
    highlight: 'Clean grid',
    palette: 'from-emerald-50 via-teal-100 to-cyan-200',
  },
];
