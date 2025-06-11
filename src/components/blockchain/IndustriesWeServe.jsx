'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const industries = [
  { label: 'Healthcare', icon: '/images/Blockchain/healthcare.svg' },
  { label: 'Automotive', icon: '/images/Blockchain/maintenance.svg' },
  { label: 'Logistics', icon: '/images/Blockchain/trolley.svg' },
  { label: 'Real Estate', icon: '/images/Blockchain/construction.svg' },
  { label: 'Manufacturing', icon: '/images/Blockchain/Manufacturing.svg' },
  { label: 'Telecom', icon: '/images/Blockchain/telecom.svg' },
  { label: 'Entertainment', icon: '/images/Blockchain/cinema.svg' },
  { label: 'Marketing', icon: '/images/Blockchain/marketing.svg' },
  { label: 'Education', icon: '/images/Blockchain/global.svg' },
  { label: 'Travel & Tourism', icon: '/images/Blockchain/travel.svg' },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const IndustriesWeServe = () => {
  return (
    <section className="px-6 md:px-16 py-12 bg-white text-center">
      <h2 className="text-xl md:text-2xl font-bold text-[#00357A] mb-10">
        The Ever-Growing List of Industries We Serve
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-3 cursor-pointer transition-all duration-300"
          >
            <Image
              src={industry.icon}
              alt={industry.label}
              width={60}
              height={60}
              className="object-contain"
            />``
            <p className="text-sm font-medium text-gray-800">{industry.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default IndustriesWeServe;
