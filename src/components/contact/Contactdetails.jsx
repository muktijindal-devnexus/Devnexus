'use client';

import { Locate, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const Contactdetails = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {/* Location Card */}
      <motion.div
        className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <Locate className="w-8 h-8 text-[#00357A] mb-3" />
        <h2 className="text-xl font-semibold mb-2">Location</h2>
        <p className="text-gray-600 text-sm">
          26-B, Spaze Itech Park,<br />
          Sector-49, Gurgaon, 122018
        </p>
      </motion.div>

      {/* Email Card */}
      <motion.div
        className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Mail className="w-8 h-8 text-[#00357A] mb-3" />
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p className="text-gray-600 text-sm">contactus@devnexus.in</p>
      </motion.div>

      {/* Phone Card */}
      <motion.div
        className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Phone className="w-8 h-8 text-[#00357A] mb-3" />
        <h2 className="text-xl font-semibold mb-2">Phone</h2>
        <p className="text-gray-600 text-sm">+91 9211815556</p>
      </motion.div>
    </section>
  );
};
