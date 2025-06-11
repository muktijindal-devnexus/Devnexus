"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Assets
import Design from "../../../public/images/design 1.svg";
import Image1 from "../../../public/images/innovation1.svg";
import Image2 from "../../../public/images/innovation2.svg";
import Image3 from "../../../public/images/innovation3.svg";
import Image4 from "../../../public/images/innovation4.svg";
import Workspace from "../../../public/images/workspace.png";

const services = [
  { title: "User-focused, result-driven approach", icon: Image1 },
  { title: "Innovative Tech, Creative Solutions", icon: Image2 },
  { title: "Dedicated team of experts", icon: Image3 },
  { title: "Scalable & future-ready development", icon: Image4 },
];

export default function AboutUs() {
  return (
    <section className="relative bg-white overflow-hidden py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pr-1">
        {/* Left: Image with floating animation */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <Image
            src={Workspace}
            alt="Workspace"
            className="w-full bg-transparent 
            h-[300px] sm:h-[400px] md:h-[380px] lg:h-[460px]"
            sizes="(max-width: 640px) 100vw, 
         (max-width: 768px) 100vw, 
         (max-width: 1024px) 100vw, 
         100vw"
          />
        </motion.div>

        {/* Right: Text + Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-[#f8f9fd] rounded-2xl shadow-md p-15"
        >
          <p className="text-lg text-[#00357A]">INNOVATE • BUILD • GROW</p>
          <h2 className="text-4xl md:text-3xl font-semibold leading-snug mb-4 w-[70%] font-[Montserrat] py-8">
            Beyond Code — Where{" "}
            <span className="text-[#00357A] font-bold">Developers </span>
            Shape <span className="text-[#00357A] font-bold">the Future. </span>
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 w-[70%]">
            At DevNexus Solutions, we believe in the transformative power of
            technology and the people who are building it. Our mission is to
            empower businesses with fast-forward thinking solutions that bridge
            today's challenges with tomorrow's innovations.
          </p>

          {/* Know More Button */}
          <div className="flex justify-start mt-8">
            <Link href="/about">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#00357A",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border border-[#00357A] text-[#00357A] rounded-md font-medium transition-all"
              >
                Know more
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
