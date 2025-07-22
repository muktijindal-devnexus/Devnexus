"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

export const Ourteam = () => {
  const [teamImages, setTeamImages] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("https://backend.devnexussolutions.com/api/all-brands");
        const data = await res.json();
        setTeamImages(data?.data || []);
        console.log(data, "ourteam");
      } catch (err) {
        console.error("Failed to fetch team data:", err);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="mt-10">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        speed={2000} // Adjust slide transition speed (ms)
        autoplay={{
          delay: 0, // 0 delay creates continuous smooth movement
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        grabCursor={true}
        freeMode={true}
        centeredSlides={false}
        watchSlidesProgress={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="!px-4"
      >
        {teamImages.concat(teamImages).map(({ id, image, alt }, index) => (
          <SwiperSlide key={`${id}-${index}`}>
            <div className="rounded-lg overflow-hidden h-80 w-full relative">
              <Image
                src={image}
                alt={alt || "Team Member"}
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
