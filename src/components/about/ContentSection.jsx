"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

const slides = [
  {
    title: "Our Approach",
    description:
      "We, DevNexians, believe every client is unique, every project requires a unique approach, and a new strategy altogether. Thus, we customize our offerings to each client in terms of their requirement, preferences and budget.",
  },
];

export const AboutDevnexus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id, title, description } = slides[currentIndex];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
      {/* Left section - Blue background */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#2e5c9a] text-white p-6 sm:p-8 md:p-10 lg:px-12 lg:py-20 rounded-xl lg:rounded-r-2xl w-full lg:w-1/2 order-2 lg:order-1"
      >
      
           <h4 className="text-white text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
            {title}
          </h4>
          <p className="text-normal sm:text-base md:text-lg text-whie leading-relaxed">
            {description}
          </p>
      </motion.div>

      {/* Right section - White card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="relative w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0"
      >
        <div className="bg-white shadow-md rounded-xl lg:rounded-l-4xl p-6 sm:p-8 md:p-10 border-l-0 lg:border-l-4 border-[#2e5c9a] transition-all duration-300 ease-in-out lg:relative lg:right-10">
          <h3 className="text-[#002f6c] text-2xl sm:text-3xl font-bold">
            {id < 10 ? `0${id}` : id}
          </h3>
           <p className="text-normal sm:text-base md:text-lg leading-relaxed">
          We are a group of tech enthusiasts, with an inclination towards Agile methodology,
          who started their IT journey in 2010, and have
          now grown into a team of 50+ tech experts matching the top
          problem-solving strategies with the power of digitization.
        </p>
        </div>
      </motion.div>
    </div>
  );
};