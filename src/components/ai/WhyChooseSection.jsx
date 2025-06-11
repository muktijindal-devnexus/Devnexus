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
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-[#00357A]">
            Why Choose <br />
            <span className="font-semibold">DevNexus Solutions?</span>
          </h2>
          <hr className="w-20 border-[#00357A] border mb-6" />
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            As a leading AI software development services provider, DevNexus
            Solutions goes beyond technology; we are delivering tailored,
            future-ready solutions that drive real business value. Our team of
            experts in AI automation, data-driven innovation ensures that every
            solution is designed with your unique challenges and vision in mind.
          </p>
          <button className="bg-[#00357A] text-white px-6 py-2 rounded transition-all duration-300 hover:bg-[#002a5f] hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
            Consult Our Experts
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:w-1/2"
        >
          {features.map((feature, index) => (
            <div key={index} className="relative w-full h-38 perspective">
              <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center text-center border rounded-xl p-4 shadow-sm bg-white">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  {/* <span className="text-lg font-medium text-[#000000]">{feature.title}</span> */}
                </div>
                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center text-center border rounded-xl p-4 shadow-sm bg-[#00357A] text-white">
                  <p className="text-lg font-medium">{feature.title}</p>
                </div>
              </div>
            </div>
          ))}
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
        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
