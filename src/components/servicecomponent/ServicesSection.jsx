"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full Stack Development",
    description:
      "Creating seamless, high-performing websites that engage users and drive results",
    icon: "/images/services/image 155.svg",
    active: true,
    href: "/web-design-development-services",
  },
  {
    title: "UI/UX Design",
    description:
      "Elevate user engagement through intuitive design and seamless digital experiences.",
    icon: "/images/services/image 157.svg",
    href: "/uiux",
  },
  {
    title: "Mobile Development",
    description:
      "Transforming ideas into high-performing Android & iOS applications",
    icon: "/images/services/image 156.svg",
    href: "/mobile-development-services",
  },
  {
    title: "Digital Marketing",
    description:
      "Let the Right Digital Marketing Company Uplift Your Web Traffic, Generate More Leads and Sales for Your Business.",
    icon: "/images/services/digital.svg",
    href: "/digital-marketing-services",
  },
  {
    title: "Blockchain Development",
    description:
      "We build next-gen systems that redefine trust, resilience, and innovation for the world of tomorrow.",
    icon: "/images/services/blockchain.svg",
    href: "/blockchain-development-services",
  },
  {
    title: "AI Technologies",
    description:
      "Unleashing the power of AI to drive growth, streamline operations, and create scalable solutions for the digital age.",
    icon: "/images/services/ai.svg",
    href: "/ai-tech-services",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#00357A] mb-12"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: 0.5,
              transition: { type: "spring", stiffness: 200 },
            }}
            className={`flex flex-col items-center text-center border-2 rounded-2xl p-10 shadow-sm transition-all duration-300 cursor-pointer group ${
              service.active
                ? "border-gray-200 hover:border-blue-900"
                : "border-gray-200 hover:border-blue-900 hover:shadow-md"
            }`}
          >
            <motion.img
              src={service.icon}
              alt={service.title}
              className="h-20 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-lg font-semibold text-[#00357A] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-auto bg-[#c2cfe0] py-1 px-6 rounded-xl"
            >
              <a href={service.href} aria-label={`Learn more about ${service.title}`}>
                <MoveRight className="text-[#00357A] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
