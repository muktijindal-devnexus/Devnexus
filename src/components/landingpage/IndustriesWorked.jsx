"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export const IndustriesWorked = () => {
  const [industries, setIndustries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await fetch("https://backend.devnexussolutions.com/api/all-Industry");
        const data = await res.json();
        if (data?.data) {
          setIndustries(data.data);
        }
      } catch (error) {
        console.error("Error fetching industries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    const slideCount = isMobile ? 1 : 2;
    setCurrentIndex((prev) => (prev + slideCount) % industries.length);
  };

  const prevSlide = () => {
    const slideCount = isMobile ? 1 : 2;
    setCurrentIndex((prev) => {
      const newIndex = prev - slideCount;
      return newIndex < 0 ? industries.length + newIndex : newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [industries, isMobile]);

  const currentImages = isMobile
    ? [industries[currentIndex]]
    : [
        industries[currentIndex],
        industries[(currentIndex + 1) % industries.length],
      ];

  const SkeletonCard = () => (
    <div
      className={`relative h-[300px] md:h-[400px] ${
        isMobile ? "w-full max-w-[300px]" : "w-[300px]"
      } flex-1 animate-pulse bg-gray-800 rounded-md overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-[pulse_1.5s_ease-in-out_infinite]" />
    </div>
  );

  return (
    <section className="py-6 px-4 md:px-0">
      <div className="bg-[#00357A] bg-gradient-to-b from-transparent to-black opacity-90 flex flex-col md:flex-row p-6 md:p-14">
        <div className="text-white w-full md:w-[45%] flex flex-col justify-center gap-4 md:gap-7 mb-6 md:mb-0">
          <h4 className="text-3xl md:text-5xl font-semibold leading-tight md:leading-16 pr-0 md:pr-2">
            Industries We've Worked For
          </h4>
          <span className="text-sm md:text-[16px] leading-5 md:leading-6 pr-10">
           We specialize in industry-focused customized solutions in healthcare, education, finance, e-commerce,  and <br/> technology, leveraging deep experience to <br/> build impactful outcomes.
          </span>
        </div>

        <div className="relative flex items-center justify-center w-full md:w-[55%]">
          <div className={`flex ${isMobile ? "justify-center" : "gap-4"} w-full`}>
            {loading
              ? Array(isMobile ? 1 : 2).fill(0).map((_, idx) => <SkeletonCard key={idx} />)
              : currentImages.map(
                  (item, index) =>
                    item && (
                      <div
                        key={index}
                        className={`relative h-[300px] md:h-[400px] ${
                          isMobile ? "w-full max-w-[300px]" : "w-[300px]"
                        } flex-1 overflow-hidden rounded-md`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title || "Industry"}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-100" />
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-xl font-semibold z-10">
                          {item.title}
                        </div>
                      </div>
                    )
                )}
          </div>

          {!isMobile && !loading && (
            <>
              <div className="flex items-center absolute left-0 -translate-x-full">
                <ChevronLeft
                  className="h-[60px] w-[60px] text-white cursor-pointer"
                  onClick={prevSlide}
                />
              </div>
              <div className="flex items-center absolute right-0 translate-x-full">
                <ChevronRight
                  className="h-[60px] w-[60px] text-white cursor-pointer"
                  onClick={nextSlide}
                />
              </div>
            </>
          )}
        </div>

        {isMobile && !loading && (
          <div className="flex justify-between mt-4 px-10 ">
            <ChevronLeft
              className="h-10 w-10 text-white cursor-pointer"
              onClick={prevSlide}
            />
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
