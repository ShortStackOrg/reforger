"use client";

import HeroSection from '@/components/reforger/landing/HeroSection';
import TemplateGallery from '@/components/reforger/landing/TemplateGallery';

const ReforgerMainPage = () => {

    return (
      <div className="min-h-screen bg-slate-50 px-6 py-10">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <HeroSection />
          <TemplateGallery />
        </section>
      </div>
    )
  }
  
  export default ReforgerMainPage;
