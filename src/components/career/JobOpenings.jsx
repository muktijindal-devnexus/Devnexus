"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";


const JobOpenings = () => {
  const jobPositions = [
    {
      department: "DevOps",
      position: "AWS Developer",
      location: "Gurgaon",
      experience: "3+ years",
      description:
        "We need an experienced AWS Developer (DevOps) to design, implement, and maintain secure and scalable cloud infrastructure for our customers.",
          requirement: [
 "Deploy, manage, and operate scalable cloud infrastructure on AWS.",

"Build CI/CD pipelines and automate deployment processes.",

"Monitor system performance and troubleshoot cloud-based applications.",

"Collaborate with development teams to improve system reliability."

  ]
    },
    {
      department: "Designing",
      position: "Video Writer",
      location: "Gurgaon",
      experience: "Fresher",
      description:
        "We seek a Creative Video Writer to support our design and content team. You will be writing engaging scripts and storytelling ideas for marketing videos, animations, and promo campaigns.",
          requirement: [
    "Develop creative scripts for explainer videos, social media, and promo content.",
    "Work with designers, editors, and marketers to create effective content.",
    "Develop innovative video concepts based on industry trends.",
    "Ensure content meets brand tone and message."
  ]
    },
{
  department: "Developer",
  position: "Software Developer",
  location: "Gurgaon",
  experience: "2 to 5 years",
  description: "We are looking for skilled Software Developers who love writing scalable applications and providing high-quality software solutions.",
  requirement: [
    "Design, develop, and scale web and mobile applications.",
    "Write clean, efficient, and testable code.",
    "Work with cross-functional teams to set requirements and provide solutions.",
    "Troubleshoot and debug applications."
  ]
},
    {
      department: "Sales",
      position: "Sales Executive",
      location: "Gurgaon",
      experience: "Fresher to 1 year",
      description:
        "Engage clients, generate leads and close sales effectively.",
          requirement: [
    "Identify leads through networking, cold calls, and internet searches.",
    "Develop and sustain strong client relationships.",
    "Create and present product and service presentations.",
    "Collaborate with the team to meet monthly and quarterly sales goals."
  ]
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [modalContent, setModalContent] = useState(null); // null | {type: "description" | "apply", job: object}

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00357A] mb-6 text-center">
          Job Openings
        </h1>

        {/* Navigation Arrows */}
        <div className="px-4 relative">
          <button
            ref={prevRef}
            className="absolute sm:-left-10 sm:top-1/2 sm:-translate-y-1/2 bottom-[-55px] sm:bottom-auto left-1/4 z-10 text-[#00357A] bg-white p-3 rounded-full transition-colors shadow-[0_4px_15px_rgba(0,53,122,0.3)]"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            ref={nextRef}
            className="absolute sm:-right-10 sm:top-1/2 sm:-translate-y-1/2 bottom-[-55px] sm:bottom-auto right-1/4 z-10 text-[#00357A] bg-white p-3 rounded-full transition-colors shadow-[0_4px_15px_rgba(0,53,122,0.3)]"
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
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
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
                      <p className="font-medium text-[#6F6F6F] text-xl ml-1">
                        {job.position}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="text-[#6F6F6F] text-xl">Location:</p>
                      <p className="font-medium text-[#6F6F6F] text-xl ml-1">
                        {job.location}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="text-[#6F6F6F] text-xl">Experience:</p>
                      <p className="font-medium text-[#6F6F6F] text-xl ml-1">
                        {job.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    {/* <button
                      onClick={() => setModalContent({ type: "description", job })}
                      className="bg-[#335D95] text-white text-sm rounded-sm w-full py-2"
                    >
                      Job Description
                    </button> */}
                    <button
                      onClick={() => setModalContent({ type: "apply", job })}
                      className="bg-[#335D95] text-white text-sm font-medium rounded w-full py-2"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">

          <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative  h-[450px] overflow-y-scroll ">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold text-[#00357A] mb-4">
              {modalContent.job.position}
            </h3>

                  <div className="mb-6 text-gray-600 space-y-1">
        <p>
          <span className="font-semibold">Location:</span>  {modalContent.job.location}
        </p>
        <p>
          <span className="font-semibold">Experience:</span> {modalContent.job.experience}
        </p>
      </div>

  
          <h3 className="text-lg font-semibold text-[#00357A] mb-2">
            Job Description
          </h3>
          <p>
        {modalContent.job.description}
          </p>

 <div className="pt-4">
  <h3 className="text-lg font-semibold text-[#00357A] mb-2">
    Responsibilities
  </h3>
  <ul className="list-disc pl-5 space-y-2">
    {modalContent.job.requirement?.map((req, idx) => (
      <li key={idx}>{req}</li>
    ))}
  </ul>
</div>


            {modalContent.type === "description" ? (
              <p className="text-gray-700">{modalContent.job.description}</p>
            ) : (
              // <form className="space-y-4">
              //   <input
              //     type="text"
              //     placeholder="Your Name"
              //     className="w-full border border-gray-300 rounded px-3 py-2"
              //     required
              //   />
              //   <input
              //     type="email"
              //     placeholder="Your Email"
              //     className="w-full border border-gray-300 rounded px-3 py-2"
              //     required
              //   />
              //   <textarea
              //     placeholder="Why are you a good fit?"
              //     className="w-full border border-gray-300 rounded px-3 py-2"
              //     rows="4"
              //     required
              //   ></textarea>

              //   {/* Resume Upload */}
              //   <div>
              //     <label className="block mb-1 text-sm font-medium text-gray-700">
              //       Upload Resume (PDF, DOC, DOCX)
              //     </label>
              //     <input
              //       type="file"
              //       accept=".pdf,.doc,.docx"
              //       className="w-full border border-gray-300 rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#335D95] file:text-white"
              //       required
              //     />
              //   </div>

              //   <button
              //     type="submit"
              //     className="w-full bg-[#335D95] text-white py-2 rounded"
              //   >
              //     Submit Application
              //   </button>
              // </form>
              <div className="pt-10">
           <h3 className="text-lg font-semibold text-[#00357A] mb-2">
  Contact Us<br/>
           </h3>
              
                <span>Email: contactus@devnexus.in</span>  <br/><br/>
                <span>Phone: +91 9211815556 <br/><br/>
                  </span>
                Location: 26-B, Spaze Itech Park, Sector-49, Gurgaon, 122018
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default JobOpenings;
