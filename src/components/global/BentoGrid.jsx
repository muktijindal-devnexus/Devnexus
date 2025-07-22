"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const BentoGrid = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          "https://backend.devnexussolutions.com/api/all-Testimonials"
        );
        const data = await res.json();
        console.log("Fetched Testimonials:", data?.data);
        setTestimonials(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  if (testimonials.length < 5) return null;

  return (
    <div className="">
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* First Column */}
          <div className="sm:col-span-1 lg:col-span-2 flex flex-col gap-10 relative">
            {[testimonials[0], testimonials[1]].map((testimonial, index) => (
              <div
                key={testimonial._id || index}
                className="relative bg-[#00357A] rounded-2xl p-1 h-full w-full transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              >
                <motion.div
                  variants={item}
                  className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center gap-4 shadow-lg h-full w-full absolute"
                  whileHover={{
                    y: -10,
                    x: -6,
                    rotate: -4,
                    transition: {
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div className="flex justify-center">
                    <FaQuoteLeft className="text-[#00357A] text-xl w-[45px] h-[45px]" />
                  </div>
                  <p className="text-gray-700 text-sm md:text-base text-center">
                    {testimonial.description || testimonial.review}
                  </p>
                  <div className="flex items-center mt-auto gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500 mb-1">
                        {testimonial.destination || testimonial.company}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.stars || 5)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Center column */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col items-center justify-center mt-[30px]">
            <h2 className="font-semibold text-[20px] md:text-[30px] mb-8 text-center">
              Trusted by Many for Digital and Web Solutions
            </h2>
            <motion.div
              variants={item}
              className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300  h-full w-full transition-transform duration-[500ms] hover:-translate-y-12 hover:-translate-x-2 hover:-rotate-6"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex justify-center mb-4">
                <FaQuoteLeft className="text-[#00357A] text-xl w-[45px] h-[45px]" />
              </div>

              <p className="text-gray-700 text-sm md:text-base text-center ">
                {testimonials[2].description || testimonials[2].description}
              </p>
              <div className="flex items-center mt-auto gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={testimonials[2].avatar}
                    alt={testimonials[2].name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 ">
                    {testimonials[2].name}
                  </p>
                  <p className="text-xs text-gray-500 mb-1 ">
                    {testimonials[2].destination || testimonials[2].company}
                  </p>
                  <div className="flex gap-1 ">
                    {[...Array(testimonials[2].stars || 5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Third Column */}
         <div className="sm:col-span-1 lg:col-span-2 flex flex-col gap-10 relative">
  {[testimonials[3], testimonials[4]].map((testimonial, index) => (
    <div
      key={testimonial._id || index}
      className="relative bg-[#00357A] rounded-2xl p-1 h-full w-full transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
    >
      <motion.div
        variants={item}
        className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center gap-4 shadow-lg h-full w-full absolute"
        whileHover={{
          y: -10,
          x: -6,
          rotate: -4,
          transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }}
        transition={{
          duration: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="flex justify-center">
          <FaQuoteLeft className="text-[#00357A] text-xl w-[45px] h-[45px]" />
        </div>
        <p className="text-gray-700 text-sm md:text-base text-center">
          {testimonial.description || testimonial.review}
        </p>
        <div className="flex items-center mt-auto gap-4 pt-4 border-t border-gray-100">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900">
              {testimonial.name}
            </p>
            <p className="text-xs text-gray-500 mb-1">
              {testimonial.destination || testimonial.company}
            </p>
            <div className="flex gap-1">
              {[...Array(testimonial.stars || 5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  ))}
</div>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoGrid;
