"use client";
import Image from "next/image";
import React from "react";
import ContactImage from "../../../public/images/contact/Contact.jpg";
import Arrow from "../../../public/images/Arrow.svg";
import Link from "next/link";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="relative h-[400px] flex items-center justify-center text-white">
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
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Let’s Connect & Build Something!
        </h1>
        <p className="mt-4 text-sm md:text-lg text-white font-semibold w-[90%] md:w-[45%] p-2">
          Ready to take your digital presence to the next level? Let’s work
          together to build innovative solutions that drive results.
        </p>

        <Link href="/contact" passHref>
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
        </Link>
      </div>
    </div>
  );
};
