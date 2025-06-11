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
    <div className="flex flex-col md:flex-row items-center justify-center py-6 md:py-12  bg-white">
      {/* Left section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#2e5c9a] text-white p-8 md:px-12 md:py-20 rounded-r-2xl w-full md:w-1/2"
      >
        <p className="text-sm md:text-base leading-relaxed">
          We are a group of tech enthusiasts, with inclination towards agile,
          who started their IT journey in 2010 (within our home office), and
          now building to a team of 120+ tech experts matching the top
          problem-solving strategies with the power of digitization.
        </p>
      </motion.div>

      {/* Right section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/2"
      >
        <div className="bg-white shadow-md rounded-l-4xl p-8 md:p-10 border-l-4 border-[#2e5c9a] transition-all duration-300 ease-in-out relative right-10">
          <h3 className="text-[#002f6c] text-3xl font-bold">
            {id < 10 ? `0${id}` : id}
          </h3>
          <h4 className="text-[#2e5c9a] text-xl font-semibold mb-2">
            {title}
          </h4>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
