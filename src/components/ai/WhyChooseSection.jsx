"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseSection() {
  const features = [
    { title: "Tailored AI Solutions", icon: "/images/ai/image 134.svg" },
    { title: "End-to-End Expertise", icon: "/images/ai/image 135.svg" },
    { title: "Proven Technical Excellence", icon: "/images/ai/image 136.svg" },
    { title: "Scalable Development", icon: "/images/ai/image 137.svg" },
    { title: "Responsible AI", icon: "/images/ai/image 138.svg" },
    { title: "Ongoing Support", icon: "/images/ai/image 139.svg" },
    { title: "Industry-driven data", icon: "/images/ai/image 140.svg" },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-10 max-w-7xl mx-auto">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-[#00357A]">
            Why Choose <br />
            <span className="font-semibold">DevNexus Solutions?</span>
          </h2>
          <hr className="w-16 sm:w-20 border-[#00357A] border mb-4 sm:mb-6" />
          <p className="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
            As a leading AI software development services provider, DevNexus
            Solutions goes beyond technology; we are delivering tailored,
            future-ready solutions that drive real business value. Our team of
            experts in AI automation, data-driven innovation ensures that every
            solution is designed with your unique challenges and vision in mind.
          </p>
          <button className="bg-[#00357A] text-white px-4 sm:px-6 py-1 sm:py-2 rounded text-sm sm:text-base transition-all duration-300 hover:bg-[#002a5f] hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
            Consult Our Experts
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 mt-6 lg:mt-0"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative w-full aspect-square perspective"
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180 hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center text-center border rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-sm bg-white">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={48}
                      height={48}
                      className="mb-2 sm:mb-4 w-12 h-12 sm:w-12 sm:h-12"
                    />
                  </div>
                  {/* Back Side */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center text-center border rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-sm bg-[#00357A] text-white">
                    <p className="text-xs sm:text-sm md:text-base font-medium px-1">
                      {feature.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add Tailwind utilities manually (extend Tailwind or add inline) */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group-hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}