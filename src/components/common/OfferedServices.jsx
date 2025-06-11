'use client';
import Image from "next/image";
import React from "react";
import DigitalMarketing from "../../../public/images/Services/DigitalMarketing.jpeg";
import FullStackDev from "../../../public/images/Services/Web.jpeg";
import UIUX from "../../../public/images/Services/WebDesign.jpeg";
import MobileDev from "../../../public/images/Services/Mobile.jpeg";
import Blockchain from "../../../public/images/Services/Blockchain.jpeg";
import AITech from "../../../public/images/Services/ai.jpeg";
import BannerSheet from "../../../public/images/ServiceBannerSheet.png";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";


const services = [
  { title: "Digital Marketing", href: "/digital-marketing-services", image: DigitalMarketing },
  { title: "Full-Stack Development", href: "/web-design-development-services", image: FullStackDev },
  { title: "UI/UX Designing", href: "/uiux", image: UIUX },
  { title: "Mobile Development", href: "/mobile-development-services", image: MobileDev },
  { title: "Blockchain Development", href: "/blockchain-development-services", image: Blockchain },
  { title: "AI Technologies", href: "/ai-tech-services", image: AITech },
];

export const OfferedServices = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-10">
      <div className="flex flex-col lg:flex-row items-start justify-center text-center lg:items-center gap-4 lg:gap-10">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-[34px] text-[#335D95] leading-snug">
          Services Offered by <br />
          <span className="text-[#00357A] text-[30px] md:text-[36px] lg:text-[40px] font-bold">
            DevNexus Solutions
          </span>
        </h1>
      </div>

      {/* Cards with custom scroll */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "1rem",
          paddingTop: "2.5rem",
          paddingBottom: "1rem",
        }}
        className="custom-scroll"
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              width: "280px",
              height: "350px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover z-0 "
            />

            {/* Overlay Sheet */}
            <Image
              src={BannerSheet}
              alt="Overlay"
              fill
              className="absolute object-cover z-10 opacity-60"
            />

            {/* Text Content */}
            <div className="absolute inset-0 z-20 flex w-[100px] text-white text-xl font-semibold p-8 leading-8">
              <h2 className="text-white text-lg md:text-xl font-semibold leading-8">
                {service.title}
              </h2>
            </div>

            {/* Button */}
          <Link href={service.href} passHref>
  <motion.div
    whileHover={{ x: 8 }} // animate arrow move right on hover
    whileTap={{ scale: 0.95 }} // optional: tap effect
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-white text-blue-950 h-8 py-2 px-6 rounded-xl text-center items-center flex absolute z-50 bottom-10 right-10 cursor-pointer"
  >
    <MoveRight />
  </motion.div>
</Link>

          </div>
        ))}
      </div>

      {/* Scrollbar styles */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #00357a;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background-color: #e5e7eb;
        }
      `}</style>
    </section>
  );
};
