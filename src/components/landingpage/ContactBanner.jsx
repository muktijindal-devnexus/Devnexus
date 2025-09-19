"use client";
import Image from "next/image";
import React, { useState } from "react";
import ContactImage from "../../../public/cdn/images/contact/Contact.jpg";
import Arrow from "../../../public/cdn/images/Arrow.svg";
import Link from "next/link";
import { motion } from "framer-motion";

export const Contact = () => {
    const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div className="relative h-[400px] flex items-center justify-center text-white ">
      {/* Background Image */}
      <Image
        src={ContactImage}
        alt="Contact"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 flex justify-center items-center  flex-col">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Let’s Connect & Build Something!
        </h2>
        <p className="mt-4 text-sm md:text-lg text-white font-semibold w-[90%] md:w-[45%] p-2 pb-6">
          Ready to take your digital presence to the next level? Together, let's design creative solutions that drive outcomes.
        </p>

        {/* <Link href="/contact" passHref>
          <motion.button
            whileHover="hover"
            className="mt-10 text-white py-2 px-8 flex items-center gap-4 rounded-xl bg-[#00357A] transition duration-300"
          >
            Free Consultation
            <motion.div
              variants={{
                hover: { x: 10 },
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src={Arrow} alt="arrow" width={40} height={20} />
            </motion.div>
          </motion.button>
        </Link> */}
          <Link href="/contact" passHref>
          <div
            className="group relative flex items-center gap-3  cursor-pointer text-sm sm:text-base w-fit bg-[#00357A] py-1 px-8 rounded-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
           Free Consultation

            <span className="relative w-12 h-12 flex items-center justify-center overflow-visible">
              {/* Smooth Animated Circle */}
              <motion.span
                className="absolute w-12 h-12 rounded-full border-[#a6a5a5] border-2 mr-14"
                animate={{ x: isHovered ? 40 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />

              {/* Fixed Arrow Icon */}
              <Image
                src={Arrow}
                alt="arrow"
                width={80}
                height={30}
                className="w-[100px] z-10 "
              />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
