"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Slider({ title, subtitle, brands }) {
  return (
    <div className="relative bg-white py-12 md:py-16 lg:p-[70px]">
      {/* Header */}
      <div className="flex flex-col justify-center text-center items-center px-4 lg:px-0">
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-medium text-[#335D95] leading-[1.2] font-[Monstreat]">
          {title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-[26px] text-[#335D95] font-[Poppins] mt-2 sm:mt-3">
          {subtitle}
        </p>
      </div>

      {/* Swiper Row 1 - Left to Right */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2.5}
        spaceBetween={20}
        loop
        autoplay={{ 
          delay: 0, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={5000}
        grabCursor
        className="mt-8 sm:mt-10 lg:mt-12 px-4"
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30
          }
        }}
      >
        {[...brands, ...brands].map((logo, i) => (
          <SwiperSlide key={`top-${i}`}>
            <div className="flex items-center justify-center h-full px-2">
              <img
                src={logo}
                alt={`Brand ${i}`}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain mx-auto"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}