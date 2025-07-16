"use client"
import HeroCard from "@/components/Home/HeroCard";
import TemplatesSection from "@/components/Home/Templates/TemplatesSection";
import Instructions from "@/components/Home/Instructions"

const ReforgerMainPage = () => {

    return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <section className="flex flex-col gap-6">
          <HeroCard />
          <TemplatesSection />
          <Instructions />
        </section>
      </div>
    )
  }
  
  export default ReforgerMainPage;