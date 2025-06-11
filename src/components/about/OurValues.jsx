'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Handshake, Lightbulb, ThumbsUp } from 'lucide-react';

const values = [
  { icon: Award, label: 'Excellence' },
  { icon: Handshake, label: 'Integrity' },
  { icon: Lightbulb, label: 'Innovation' },
  { icon: ThumbsUp, label: 'Customer-Centricity' },
];

// Entrance animation for each card
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const OurValues = () => {
  return (
    <div className="w-full flex justify-center py-12 bg-white">
      <div className="border border-[#cbd5e1] rounded-xl px-6 py-8 w-full max-w-4xl shadow-[0_6px_6px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {values.map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="flex flex-col items-center space-y-2"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                }}
              >
                <Icon size={40} className="text-gray-700" />
              </motion.div>
              <p className="text-sm font-medium text-gray-800">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
