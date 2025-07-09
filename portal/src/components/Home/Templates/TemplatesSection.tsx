"use client"

import { Button } from "@/components/ui/button"
import ResumeCard from "./ResumeCard"

export default function TemplatesSection() {
  const resumes = [
    {
      title: "Professional",
      image: "/images/ProfessionalResume.jpg"
    },
    {
      title: "Creative",
      image: "/images/CreativeResume.jpg"
    },
    {
      title: "Bold",
      image: "/images/BoldResume.jpg"
    },
    {
      title: "Modern",
      image: "/images/ModernResume.jpg"
    }
  ]
  return (
    <section className="text-foreground flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 space-y-2">
      <h1 className="text-2xl font-bold">
        Top Resume Templates
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-60 place-items-center">
        {resumes.map((resume, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 h-full min-w-[250px] animate-fly-in"
            style={{ animationDelay: `${index * 400}ms` }}
          >
            <ResumeCard
              title={resume.title}
              image={resume.image}
            />
          </div>
        ))}
      </div>
      <Button
        className="mt-6 px-6 py-2 rounded-md bg-primary text-white font-semibold transition-colors duration-200 hover:bg-primary/80 shadow"
      >
        View more templates
      </Button>
    </section>
  )
}
