"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const teamImages = [
  { id: 1, src: "/images/career/team1.png", alt: "Team Member 1" },
  { id: 2, src: "/images/career/team2.png", alt: "Team Member 2" },
  { id: 3, src: "/images/career/team3.png", alt: "Prakash Singh Bisen" },
  { id: 4, src: "/images/career/team4.png", alt: "Team Member 4" },
  { id: 5, src: "/images/career/team5.png", alt: "Team Member 5" },
  { id: 6, src: "/images/career/team6.png", alt: "Team Member 6" },
  { id: 7, src: "/images/career/team7.png", alt: "Team Member 7" },
  { id: 8, src: "/images/career/team18.png", alt: "Team Member 8" },
  { id: 9, src: "/images/career/team22.png", alt: "Team Member 9" },

];

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

          <div className="mt-10">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              speed={4000} // Increase speed for smoother continuous effect
              autoplay={{
                delay: 0, 
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="!px-4"
            >
              {teamImages.concat(teamImages).map(({ id, src, alt }, index) => (
                <SwiperSlide key={`${id}-${index}`}>
                  <div className="rounded-lg overflow-hidden h-80 w-full relative">
                    <Image
                      src={src}
                      alt={alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
