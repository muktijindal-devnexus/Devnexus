"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const images = [
  { src: "/images/Industries/healthcare.jpeg", alt: "Health Care" },
  { src: "/images/Industries/industries.jpeg", alt: "Real Estate" },
  { src: "/images/Industries/manufacture.jpeg", alt: "Manufacture" },
  { src: "/images/Industries/logistics.jpeg", alt: "Logistics" },
  { src: "/images/Industries/ecomm.jpeg", alt: "Ecommerce" },
  { src: "/images/Industries/finance.jpeg", alt: "Finance" },
  { src: "/images/Industries/automotive.jpeg", alt: "Automotive" },
  { src: "/images/Industries/education.jpeg", alt: "Education" },
  { src: "/images/Industries/hospitality.jpeg", alt: "Hospitality" },
  { src: "/images/Industries/games.jpeg", alt: "Entertainment" },
];

export const IndustriesWorked = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    const slideCount = isMobile ? 1 : 2;
    setCurrentIndex((prev) => (prev + slideCount) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const currentImages = isMobile 
    ? [images[currentIndex]]
    : [
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
      ];

  return (
    <section className="py-6 px-4 md:px-0">
      <div className="bg-[#00357A] bg-gradient-to-b from-transparent to-black opacity-90 flex flex-col md:flex-row p-6 md:p-14">
        <div className="text-white w-full md:w-[45%] flex flex-col justify-center gap-4 md:gap-7 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight md:leading-16 pr-0 md:pr-2">
            Industries We've Worked In
          </h1>
          <span className="text-sm md:text-[16px] leading-5 md:leading-6">
            We deliver tailored solutions across industries like healthcare,
            education, finance, e-commerce, and tech, leveraging deep expertise
            to drive impactful results.
          </span>
        </div>

        <div className="relative flex items-center justify-center w-full md:w-[55%]">
          <div className={`flex ${isMobile ? 'justify-center' : 'gap-4'} w-full`}>
            {currentImages.map((image, index) => (
              <div
                key={index}
                className={`relative h-[300px] md:h-[400px] ${isMobile ? 'w-full max-w-[300px]' : 'w-[300px]'} flex-1 overflow-hidden rounded-md`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  unoptimized // Add this prop to disable optimization
                />

                <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-100" />
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-xl font-semibold z-10">
                  {image.alt}
                </div>
              </div>
            ))}
          </div>
          
          {!isMobile && (
            <div className="flex items-center absolute right-0 translate-x-full">
              <ChevronRight
                className="h-[60px] w-[60px] text-white cursor-pointer"
                onClick={nextSlide}
              />
            </div>
          )}
        </div>

        {isMobile && (
          <div className="flex justify-center mt-4">
            <ChevronRight
              className="h-10 w-10 text-white cursor-pointer"
              onClick={nextSlide}
            />
          </div>
        )}
      </div>
    </section>
  );
};