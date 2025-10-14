"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Workspace from "../../../public/cdn/images/workspace.png";

export default function AboutUs() {
  return (
    <section className="relative bg-white overflow-hidden py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pr-1">
        {/* Left: Floating Animated Image */}
          <motion.div
      className="overflow-hidden"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src={Workspace}
        alt="Workspace"
        priority // 🚀 ensures this image loads first (no lazy loading)
       
        width={1280} // ✅ define explicit width & height for layout stability
        height={520}
        placeholder="blur"
        className="w-full h-[430px] sm:h-[590px] md:h-[520px] lg:h-[470px] bg-transparent "
 
      />
    </motion.div>

        {/* Right: Text + Button */}
<div className="bg-gradient-to-br from-white to-[#f8f9fd] rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md p-8 sm:p-8 md:p-12 lg:p-15">
          <p className="text-lg text-[#00357A]">INNOVATE • BUILD • GROW</p>
          <h3 className="text-4xl md:text-3xl font-semibold leading-snug mb-4  font-[Montserrat] py-6">
            Beyond Code — Where{" "}
            <span className="text-[#00357A] font-bold">Developers </span>
            Shape <span className="text-[#00357A] font-bold">the Future. </span>
          </h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6 ">
            At DevNexus Solutions, we believe in the transformative power of
            technology and the people who are building it. Our mission is to
            empower businesses with next-gen solutions that bridge
            today's challenges with tomorrow's innovations.
          </p>

          {/* Know More Button */}
          <div className="flex justify-start mt-8">
            <Link href="/aboutus">
              <button className="px-6 py-2 border border-[#00357A] text-[#00357A] rounded-md font-medium transition-all hover:bg-[#00357A] hover:text-white hover:cursor-pointer">
                Know more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
