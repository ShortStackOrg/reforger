import React from 'react';
import Image from 'next/image';

export default function Instructions() {
  return (
<section className="flex flex-col-reverse md:flex-row w-full max-w-full items-center justify-center gap-8 px-[5%] pb-8 pt-4 h-auto bg-gray-200 rounded-bl-[5rem] rounded-tr-[5rem]">

      {/* Text and Buttons Section */}
      <div className="w-full md:w-1/2 md:max-w-[30vw] pt-6 pr-6 md:ml-8 flex flex-col justify-start text-center">
        <h1 className="text-3xl font-bold mb-4">
          Three easy steps to perfecting your resume
        </h1>
        <p className="text-gray-600 mb-6 font-serif ">
          Stand out from the crowd with Reforger resume building.
          Effortlessly tailor your skills and experiences to secure your dream role now!
          {/* Instantly build your with Reforger resume building
          to build standard resumes effortlessly and secure your dream role. */}
        </p>
        
        <div className="flex flex-row gap-4">
          <button className="flex-1 bg-teal-500 text-white px-6 py-3 rounded-3xl hover:bg-teal-700 transition">
            Build New Resume
          </button>
          <button className="flex-1 bg-gray-300 text-gray-800 px-6 py-3 rounded-3xl hover:bg-gray-500 transition">
            Improve Existing Resume
          </button>
        </div>
      </div>

    </section>
  );
}