"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 px-8 py-12 md:px-14 md:py-16">
      <div className="absolute -right-24 top-8 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute -left-24 bottom-8 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-500">
            Resume Reforger
          </div>
          <h1 className="text-4xl font-display font-semibold leading-tight text-slate-900 md:text-5xl">
            Shape a resume that feels modern, sharp, and unmistakably yours.
          </h1>
          <p className="max-w-xl text-base text-slate-600">
            Choose a template, click to edit every detail, and export a print-ready
            PDF in minutes. No design tools required.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full px-6">
              <Link href="/reforger/editor?template=professional">Start editing</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="#templates">Browse templates</Link>
            </Button>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.55)]">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Live Preview
          </div>
          <div className="space-y-3">
            <div className="h-3 w-3/4 rounded-full bg-slate-200" />
            <div className="h-2 w-1/2 rounded-full bg-slate-200" />
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="space-y-2">
              <div className="h-2 w-1/3 rounded-full bg-amber-200" />
              <div className="h-2 w-full rounded-full bg-slate-200" />
              <div className="h-2 w-5/6 rounded-full bg-slate-200" />
            </div>
            <div className="grid gap-2">
              <div className="h-2 w-4/5 rounded-full bg-slate-200" />
              <div className="h-2 w-3/5 rounded-full bg-slate-200" />
            </div>
          </div>
          <div className="grid gap-2 text-xs text-slate-500">
            <p>Inline editing, real-time previews.</p>
            <p>Optimized for A4 export.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
