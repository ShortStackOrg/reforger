import React from 'react';
import Image from 'next/image';

export default function HeroCard() {
  return (
  <section className="flex flex-col-reverse md:flex-row w-full items-center justify-center gap-8 mx-auto px-[5%] h-auto md:h-[50vh] bg-gray-200 rounded-bl-[5rem] rounded-tr-[5rem]">
      {/* Image Section */}
      <div className="w-full mb-6 md:mb-0 md:w-1/2 md:max-w-[30vw] h-64 relative">
        <Image
          src="/images/reforger_logo.png"
          alt="Build your resume easily"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      {/* Text and Buttons Section */}
      <div className="w-full md:w-1/2 md:max-w-[30vw] pt-6 pr-6 md:ml-8 flex flex-col justify-start text-center">
        <h1 className="text-3xl font-bold mb-4">
          Reforge Your Future 
        </h1>
        <p className="text-gray-600 mb-6 font-serif ">
          Stand out from the crowd with Reforger resume building.
          Effortlessly tailor your skills and experiences to secure your dream role now!
          {/* Instantly build your with Reforger resume building
          to build standard resumes effortlessly and secure your dream role. */}
        </p>
        
        <div className="flex flex-col gap-4">
          <button className="bg-teal-500 text-white px-6 py-3 rounded-3xl hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-3xl hover:bg-gray-500 transition">
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
}