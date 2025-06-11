"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const JobOpenings = () => {
  const jobPositions = [
    {
      department: "Deveops",
      position: "AWS developer",
      location: "Gurgaon",
      experience: "3+ years",
      description: "Job Description",
    },
    {
      department: "Designing",
      position: "Video Writer",
      location: "Gurgaon",
      experience: "Fresher",
      description: "Job Description",
    },
    {
      department: "Developer",
      position: "Software Developer",
      location: "Gurgaon",
      experience: "2 to 5 year",
      description: "Job Description",
    },

    {
      department: "Sales",
      position: "Sales Executive",
      location: "Gurgaon",
      experience: "Fresher to 1 year",
      description: "Job Description",
    },

  ];

  // refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00357A] mb-12 text-center">
          Number of Openings
        </h1>

        <div className="px-4 relative">
          {/* Custom navigation buttons with Lucide icons */}
          <button
            ref={prevRef}
            className="absolute -left-10 top-1/2 z-10 -translate-y-1/2 text-[#00357A] bg-white p-3 rounded-full transition-colors shadow-[0_4px_15px_rgba(0,53,122,0.3)]"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            ref={nextRef}
            className="absolute -right-10 top-1/2 z-10 -translate-y-1/2 text-[#00357A] bg-white p-3 rounded-full transition-colors shadow-[0_4px_15px_rgba(0,53,122,0.3)]"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
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
            pagination={{ clickable: true }}
            loop={true}
            className="pb-12"
          >
            {jobPositions.map((job, index) => (
              <SwiperSlide key={index}>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow h-full flex flex-col text-center">
                  <h2 className="text-2xl font-semibold text-[#00357A] mb-2">
                    {job.department}
                  </h2>

                  <div className="grid grid-cols-1 gap-6 my-4">
                    <div className="flex">
                      <p className="text-[#6F6F6F] text-xl">Position:</p>
                      <p className="font-medium text-[#6F6F6F] text-xl">{job.position}</p>
                    </div>
                    <div className="flex">
                      <p className="text-[#6F6F6F] text-xl">Location:</p>
                      <p className="font-medium text-[#6F6F6F] text-xl ">{job.location}</p>
                    </div>
                    <div className="flex">
                      <p className="text-[#6F6F6F] text-xl">Experience:</p>
                      <p className="font-medium text-[#6F6F6F] text-xl">{job.experience}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
  <button className=" bg-[#335D95]  text-white text-sm  rounded-sm w-full">
                    Job Description
                  </button>
                  <button className="mt-auto bg-[#335D95]  text-white text-sm font-medium py-2  rounded w-full">
                    Apply Now
                  </button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
