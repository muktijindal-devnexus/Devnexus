"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const instagramImages = [
  "/cdn/images/insta/1.png",
  "/cdn/images/insta/2.png",
  "/cdn/images/insta/3.png",
  "/cdn/images/insta/4.png",
  "/cdn/images/insta/5.png",
  "/cdn/images/insta/1.png",
  "/cdn/images/insta/2.png",
  "/cdn/images/insta/3.png",
];

export default function InstagramCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full py-10 px-5 md:px-20 bg-white relative">
      <div className="flex flex-col justify-center items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#00357A] ">
         Connect with Us !
        </h2>
        <Link href="https://www.instagram.com/devnexussolutions?igsh=NXUycjU4MHBpNDk3">
          <FaInstagram className="text-4xl mt-3 text-[#E1306C]" />
        </Link>
      </div>

      {/* Custom arrows */}
      <div className="absolute top-[270px] left-2 z-10 -translate-y-1/2">
        <button
          ref={prevRef}
          className="p-2 bg-white shadow rounded-full hover:bg-gray-100 text-[#00357A]"
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute top-[270px] right-2 z-10 -translate-y-1/2">
        <button
          ref={nextRef}
          className="p-2 bg-white shadow rounded-full hover:bg-gray-100 text-[#00357A]"
        >
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


// "use client";

// import { useEffect } from "react";

// export default function LinkedInFeed() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://static.elfsight.com/platform/platform.js";
//     script.async = true;
//     script.setAttribute("data-elfsight-app-lazy", "");
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="w-full px-4 md:px-20 py-20 bg-white">
//       <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[#00357A]">
//         Follow Us on LinkedIn
//       </h2>

//       <div className="elfsight-app-e33aa6e2-a263-4121-b815-7f84d76f7026" />
//     </div>
//   );
// }

