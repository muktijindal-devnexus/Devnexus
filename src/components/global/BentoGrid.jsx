"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// ✅ Remove fetching logic; it just receives props now
const BentoGrid = ({ testimonials }) => {
  if (!testimonials || testimonials.length < 5) return null;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const renderCard = (testimonial, index) => (
    <div
      key={testimonial._id || index}
      className="relative bg-[#00357A] rounded-2xl p-1 h-full w-full"
    >
      <motion.div
        variants={item}
        className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center gap-3 sm:gap-4 shadow-lg h-full w-full"
        whileHover={{
          y: -10,
          x: index % 2 === 0 ? -6 : 6,
          rotate: index % 2 === 0 ? -4 : 4,
          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
        }}
      >
        <div className="flex justify-center">
          <FaQuoteLeft className="text-[#00357A] w-[35px] h-[35px] sm:w-[45px] sm:h-[45px]" />
        </div>
        <p className="text-gray-700 text-sm sm:text-base text-center">
          {testimonial.description || testimonial.review}
        </p>
        <div className="flex items-center mt-auto gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100 w-full">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 truncate">{testimonial.name}</p>
            <p className="text-xs text-gray-500 mb-1 truncate">
              {testimonial.destination || testimonial.company}
            </p>
            <div className="flex gap-1">
              {[...Array(testimonial.stars || 5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xs sm:text-sm" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl w-full"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="col-span-full sm:col-span-1 lg:col-span-2 flex flex-col gap-6">
            {renderCard(testimonials[0], 0)}
            {renderCard(testimonials[1], 1)}
          </div>

          <div className="col-span-full sm:col-span-3 lg:col-span-2 flex flex-col items-center justify-center mt-0 sm:mt-[30px] order-first sm:order-none">
            <h2 className="hidden sm:block font-semibold text-xl sm:text-2xl md:text-[30px] mb-6 sm:mb-8 text-center">
              Trusted by Many for Digital and Web Solutions
            </h2>
            {renderCard(testimonials[2], 2)}
          </div>

          <div className="col-span-full sm:col-span-1 lg:col-span-2 flex flex-col gap-6">
            {renderCard(testimonials[3], 3)}
            {renderCard(testimonials[4], 4)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoGrid;
