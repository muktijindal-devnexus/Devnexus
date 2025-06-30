"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function UIDesignTechnologies() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function fetchTools() {
      try {
        const response = await fetch("https://backend.devnexussolutions.com/api/all-uiux");
        const data = await response.json();
        setTools(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch tools:", error);
      }
    }

    fetchTools();
  }, []);

  return (
    <div className="py-10 px-4 md:px-20 bg-white text-center relative z-0 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Core <span className="text-blue-800 font-bold">UI/UX Design</span> Technologies
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {tools.map((tool, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden">
              <div
                className={`h-[577px] p-6 flex flex-col items-center justify-start transition-all duration-300 transform hover:scale-105 z-10 bg-[#E5EBF2] hover:bg-[#335D95] text-black hover:text-white group`}
              >
                <img src={tool.UIUXImage} alt={tool.UIUXTitle} className="w-[125px] h-[225px] mb-4" />
                <h3 className="text-2xl font-semibold mb-6 group-hover:text-white text-[#00357A]">{tool.UIUXTitle}</h3>
                <p className="text-xl text-center group-hover:text-white text-[#6F6F6F] leading-8"
                   style={{
          display: "-webkit-box",
          WebkitLineClamp: 7,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }} >
                  {tool.UIUXDescription}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
