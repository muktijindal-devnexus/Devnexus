"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const instagramImages = [
  "/images/insta/1.png",
  "/images/insta/2.png",
  "/images/insta/3.png",
  "/images/insta/4.png",
  "/images/insta/5.png",
  "/images/insta/1.png",
  "/images/insta/2.png",
  "/images/insta/3.png",
];

export default function InstagramCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full py-10 px-5 md:px-20 bg-white relative">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#00357A] mb-6">
        Follow us on Instagram
      </h2>

      {/* Custom arrows */}
      <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
        <button ref={prevRef} className="p-2 bg-white shadow rounded-full hover:bg-gray-100 text-[#00357A]">
       <ChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
        <button ref={nextRef} className="p-2 bg-white shadow rounded-full hover:bg-gray-100 text-[#00357A]">
         <ChevronRight />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        spaceBetween={40}
        slidesPerView={1.3}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="pb-6"
      >
        {instagramImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={img}
                alt={`Instagram post ${index + 1}`}
                fill
            
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
