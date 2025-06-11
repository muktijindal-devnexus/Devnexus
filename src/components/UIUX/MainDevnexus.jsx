"use client";

import { useState } from "react";
import React from 'react'



const slides = [
  {
    id: 1,
    title: "User Centric Approach",
    description:
      "At DevNexus Solutions, we first understand the requirements of the client so that we can connect with the target audience. We do comprehensive user research and persona development which ensures design aligns with the user needs and behaviours. ",
  },
  {
    id: 2,
    title: "Expertise Over diverse Platform",
    description:
      "At DevNexus solutions we have the experience to create ux ui design across various platforms, including web and mobile applications. ",
  },
  {
    id: 3,
    title: "Collaborative and Transparent Process",
    description:
      "DevNexus Solutions involves clients throughout the design journey that has begun till the end point. We give regular feedback which make sure that the end product aligns with your vision. ",
  },
  {
    id: 4,
    title: "Commitment to Innovation",
    description:
      "Capturing the latest design and technologies, DevNexus crafting innovative solutions which meet with current standards and trends. Their attention to detail and commitment towards ensuring quality that each ui ux design functionally or visualising is appealing. ",
  },
];


export const MainDevnexus = () => {
      const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const { id, title, description } = slides[currentIndex];
  return (
 <div className="flex flex-col md:flex-row items-center justify-center py-6 md:py-12 bg-white">
      {/* Left section */}
      <div className="bg-[#2e5c9a] text-white p-8 md:px-12 md:py-20 rounded-r-2xl w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
          What Makes DevNexus Solutions a Better UI UX Design company for business?
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          At DevNexus solutions we believe that thoughtful design and user based strategies
          increase the user experience. Our UI UX design services are crafted to convert your
          digital product into an engaging, visually appealing stuff, which will connect your
          audience very well.
        </p>
      </div>

      {/* Right section */}
      <div className="relative w-full md:w-1/2">
        <div className="bg-white shadow-md rounded-l-4xl p-8 md:p-10 border-l-4 border-[#2e5c9a] transition-all duration-300 ease-in-out relative right-10">
          <h3 className="text-[#002f6c] text-3xl font-bold">
            {id < 10 ? `0${id}` : id}
          </h3>
          <h4 className="text-[#2e5c9a] text-xl font-semibold mb-2">{title}</h4>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute -left-10 -bottom-2 bg-[#002f6c] text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#001e47] transition"
        >
          &#x276E;
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-6 -bottom-2 bg-[#002f6c] text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#001e47] transition"
        >
          &#x276F;
        </button>
      </div>
    </div>
  )
}
