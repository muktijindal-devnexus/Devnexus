"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import Image from "next/image";

// Skeleton Brand Loader
const BrandSkeleton = () => (
  <>
    <Swiper
      loop
      grabCursor
      slidesPerView={6}
      spaceBetween={30}
      className="mt-8 md:mt-12 z-10 relative"
    >
      {Array(12).fill(0).map((_, i) => (
        <SwiperSlide key={`skeleton-top-${i}`}>
          <div className="h-12 md:h-16 w-24 bg-gray-200 rounded animate-pulse mx-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
    <Swiper
      loop
      grabCursor
      slidesPerView={6}
      spaceBetween={30}
      dir="rtl"
      className="mt-4 md:mt-2 z-10 relative"
    >
      {Array(12).fill(0).map((_, i) => (
        <SwiperSlide key={`skeleton-bottom-${i}`}>
          <div className="h-12 md:h-16 w-24 bg-gray-200 rounded animate-pulse mx-auto mt-[30px] md:mt-[60px]" />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);

export default function BrandSlider() {
  const [sliderImages, setSliderImages] = useState([]);
  const [sliderImages2, setSliderImages2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrandImages = async () => {
      try {
        const res = await fetch(
          "https://backend.devnexussolutions.com/api/all-textSliderImage",
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjg0YmI2MzE4ZDE1MDUwNzQzYTJjMGM4IiwiZW1haWwiOiJhYmR1bEBnbWFpbC5jb20iLCJpYXQiOjE3NTAwNjk1MDQsImV4cCI6MTc1MDA3MzEwNH0.EjH78khEwpuRRzPViB1qoHOhNwKgc1BimLGIF0ukH7s",
            },
          }
        );
        const data = await res.json();
        if (Array.isArray(data?.data)) {
          setSliderImages(data.data.slice(0, 7));
          setSliderImages2(data.data.slice(0, 7));
        }
      } catch (error) {
        console.error("Failed to fetch brand images", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandImages();
  }, []);

  const commonSwiperProps = {
    modules: [Autoplay, FreeMode],
    loop: true,
    freeMode: true,
    grabCursor: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    speed: 5000,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      640: { slidesPerView: 4, spaceBetween: 25 },
      768: { slidesPerView: 5, spaceBetween: 30 },
      1024: { slidesPerView: 6, spaceBetween: 30 },
    },
  };

  return (
    <div className="relative bg-white py-[40px] md:py-[70px] mt-[50px] md:mt-[100px] px-4 sm:px-6">
      {/* Center Circle */}
      <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[150px] h-[150px] md:w-[225px] md:h-[225px] bg-white flex items-center justify-center rounded-full text-center shadow-md">
          <p className="text-[#00357A] font-semibold text-sm md:text-lg leading-tight">
            Brands We've <br /> Worked With
          </p>
        </div>
      </div>

      {/* Blur Background */}
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-full overflow-hidden">
          <div className="w-full h-full backdrop-blur-md" />
        </div>
      </div>

      {loading ? (
        <BrandSkeleton />
      ) : (
        <>
          {/* Swiper 1 */}
          <Swiper {...commonSwiperProps} className="mt-8 md:mt-12 z-10 relative">
            {[...sliderImages, ...sliderImages].map((brand, i) => (
              <SwiperSlide key={`top-${i}`}>
                <Image
                  src={brand?.textImage1}
                  alt={`Brand ${i}`}
                  width={100}
                  height={10}
                  className="h-12 md:h-16 w-auto object-contain mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper 2 */}
          <Swiper {...commonSwiperProps} dir="rtl" className="mt-4 md:mt-2 z-10 relative">
            {[...sliderImages2, ...sliderImages2].map((brand, i) => (
              <SwiperSlide key={`bottom-${i}`}>
                <Image
                width={200}
                height={20}
                  src={brand?.textImage2}
                  alt={`Brand ${i}`}
                  className="h-12 md:h-16 w-auto object-contain mx-auto mt-[30px] md:mt-[60px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
}
