import React from 'react';
import Image from 'next/image';

// components/Home/HeroCard.tsx

// interface HeroCardProps {
//     title?: string;
//     subtitle?: string;
//     description?: string;
//     ctaText?: string;
//     onCtaClick?: () => void;
// }

// const HeroCard: React.FC<HeroCardProps> = ({
//     title = "Build Your Resume Effortlessly",
//     subtitle = "Resume Builder",
//     description = "Easily generate the perfect resume to land your dream job today!",
//     ctaText = "Get Started",
//     onCtaClick,
// }) => (
//     <div className="max-w-md mx-auto my-8 p-8 rounded-2xl shadow-lg bg-white text-center">
//         <h2 className="mb-2 text-3xl font-bold">{title}</h2>
//         <h3 className="mb-4 text-blue-700 font-medium">{subtitle}</h3>
//         <p className="mb-8 text-gray-700">{description}</p>
//         <button
//             className="px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold text-base hover:bg-blue-800 transition-colors"
//             onClick={onCtaClick}
//         >
//             {ctaText}
//         </button>
//     </div>
// );

// export default HeroCard;

export default function HeroCard() {
  return (
  <section className="flex flex-col-reverse md:flex-row w-full items-center justify-center gap-8 mx-auto px-[5%] h-auto md:h-[50vh] bg-gray-200 rounded-bl-[5rem] rounded-tr-[5rem]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 relative">
        <Image
          src="/images/reforger_logo.png"
          alt="Build your resume easily"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      {/* Text and Buttons Section */}
      <div className="w-full md:w-1/2 pt-6 pr-6 md:ml-8 flex flex-col justify-start">
        <h1 className="text-3xl font-bold mb-4">
          Build Your Resume Effortlessly
        </h1>
        <p className="text-gray-600 mb-6">
          Create a professional resume in minutes with our intuitive builder.
        </p>
        
        <div className="flex flex-col gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-500 transition">
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
}


// export default function HeroCard() {
//   return (
//     <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 lg:py-32">
//       <div className="max-w-3xl">
//         <Image
//             src="/images/reforger_logo.png"
//             alt="Hero"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//         />
//       </div>
//       <div className="max-w-3xl">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
//           Build Your Resume Effortlessly
//         </h1>
//         <p className="text-lg sm:text-xl text-muted-foreground mb-8">
//           Create professional, ATS-friendly resumes that help you land your dream job — in just minutes.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="/signup"
//             className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
//           >
//             Get Started Free
//           </a>
//           <a
//             href="/templates"
//             className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
//           >
//             Browse Templates
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }