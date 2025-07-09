import { StaticImageData } from "next/image"
import Image from "next/image"

interface ResumeCardProp {
  title: string
  image: string | StaticImageData
}

export default function ResumeCard({ title, image }: ResumeCardProp) {
  return (
    <div className="resume-card flex flex-col items-center gap-4 transition-transform duration-200 hover:shadow-5xl hover:-translate-y-2 hover:cursor-pointer">
      <div className="relative w-80 h-96">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded-md"
        />
      </div>
      <h3 className="mt-2 text-lg font-medium">{title}</h3>
    </div>
  )
}
