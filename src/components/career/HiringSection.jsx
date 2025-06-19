"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { Ourteam } from "./Ourteam";


const HiringSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 text-white bg-[#335D95] p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We are Hiring!</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed">
              At DevNexus Solutions, we offer a dynamic and expansive learning environment. Our team is
              encouraged to continuously grow their skills through ongoing support and mentorship. We value
              fresh ideas and proactive initiatives, setting ourselves apart through a culture that empowers
              us to <span className="font-semibold">Excel</span>,{" "}
              <span className="font-semibold">Innovate</span>, and{" "}
              <span className="font-semibold">Lead</span>.
            </p>
          </div>
        </div>

        {/* Reel-like Team Carousel */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#00357A]">Meet Our Team</h3>
          <Ourteam />
        
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
