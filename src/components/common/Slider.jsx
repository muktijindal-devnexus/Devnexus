"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";



export default function Slider({ title, subtitle, brands }) {
  return (
    <div className="relative bg-white p-[70px]">
      {/* Header */}
      <div className="flex flex-col justify-center text-center items-center pt-10">
        <h1 className="text-[48px] font-medium text-[#335D95] leading-[1.2] font-[Monstreat]">
          {title}
        </h1>
        <p className="text-[26px] text-[#335D95] font-[Poppins]">
          {subtitle}
        </p>
      </div>

      {/* Swiper Row 1 - Left to Right */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        loop
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={5000}
        grabCursor
        className="mt-12 px-4"
      >
        {[...brands, ...brands].map((logo, i) => (
          <SwiperSlide key={`top-${i}`}>
            <img
              src={logo}
              alt={`Brand ${i}`}
              className="h-16 w-auto object-contain mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
  );
}
