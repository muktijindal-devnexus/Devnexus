"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

// -------------------------
// Job Posting Form Component
// -------------------------
const JobPostingForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    city: "",
    jobApplied: job.position,
    resume: null,
  });

  const [loading, setLoading] = useState(false);

  // handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle resume file upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      alert("Please upload your resume before submitting.");
      return;
    }

    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phoneNo", formData.phoneNo);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("jobApplied", formData.jobApplied);
      formDataToSend.append("resume", formData.resume);

      const response = await fetch("https://backend.devnexussolutions.com/api/apply", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response:", result);

      alert("Application submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-bold text-[#00357A] mb-4">
        {job.position}
      </h3>

      {/* Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* City */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Job Applied */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Job Applied
        </label>
        <input
          type="text"
          name="jobApplied"
          value={formData.jobApplied}
          readOnly
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
        />
      </div>

      {/* Resume Upload */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Upload Resume (PDF, DOC, DOCX)
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 file:py-2 file:px-4 file:bg-[#335D95] file:text-white file:rounded file:border-0 file:font-semibold"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full ${
          loading ? "bg-gray-400" : "bg-[#335D95] hover:bg-[#274d7a]"
        } text-white py-2 rounded transition-colors`}
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

// -------------------------
// Job Openings Section
// -------------------------
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
        "Collaborate with development teams to improve system reliability.",
      ],
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
        "Ensure content meets brand tone and message.",
      ],
    },
    {
      department: "Developer",
      position: "Software Developer",
      location: "Gurgaon",
      experience: "2 to 5 years",
      description:
        "We are looking for skilled Software Developers who love writing scalable applications and providing high-quality software solutions.",
      requirement: [
        "Design, develop, and scale web and mobile applications.",
        "Write clean, efficient, and testable code.",
        "Work with cross-functional teams to set requirements and provide solutions.",
        "Troubleshoot and debug applications.",
      ],
    },
    {
      department: "Sales",
      position: "Sales Executive",
      location: "Gurgaon",
      experience: "Fresher to 1 year",
      description: "Engage clients, generate leads and close sales effectively.",
      requirement: [
        "Identify leads through networking, cold calls, and internet searches.",
        "Develop and sustain strong client relationships.",
        "Create and present product and service presentations.",
        "Collaborate with the team to meet monthly and quarterly sales goals.",
      ],
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [modalContent, setModalContent] = useState(null);
  const [modalType, setModalType] = useState("description");

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00357A] mb-6 text-center">
          Job Openings
        </h1>

        <div className="px-4 relative">
          <button
            ref={prevRef}
            className="absolute sm:-left-10 sm:top-1/2 sm:-translate-y-1/2 bottom-[-55px] sm:bottom-auto left-1/4 z-10 text-[#00357A] bg-white p-3 rounded-full shadow-[0_4px_15px_rgba(0,53,122,0.3)]"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            ref={nextRef}
            className="absolute sm:-right-10 sm:top-1/2 sm:-translate-y-1/2 bottom-[-55px] sm:bottom-auto right-1/4 z-10 text-[#00357A] bg-white p-3 rounded-full shadow-[0_4px_15px_rgba(0,53,122,0.3)]"
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
                    <div className="flex justify-center">
                      <p className="text-[#6F6F6F] text-xl">
                        <b>Position:</b> {job.position}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-[#6F6F6F] text-xl">
                        <b>Location:</b> {job.location}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-[#6F6F6F] text-xl">
                        <b>Experience:</b> {job.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <button
                      onClick={() => {
                        setModalContent(job);
                        setModalType("description");
                      }}
                      className="bg-[#335D95] text-white text-sm font-medium rounded w-full py-2"
                    >
                      Job Description
                    </button>
                    <button
                      onClick={() => {
                        setModalContent(job);
                        setModalType("apply");
                      }}
                      className="bg-[#274D7A] text-white text-sm font-medium rounded w-full py-2"
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
<div
  className="bg-white rounded-lg max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto"
  style={{
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE/Edge
  }}
>
  <style jsx>{`
    div::-webkit-scrollbar {
      display: none; /* Chrome, Safari */
    }
  `}</style>

  <button
    onClick={() => setModalContent(null)}
    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
  >
    <X />
  </button>


            {modalType === "description" ? (
              <div>
                <h3 className="text-2xl font-bold text-[#00357A] mb-2">
                  {modalContent.position}
                </h3>
                <p className="text-gray-600 mb-4">
                  {modalContent.description}
                </p>
                <h4 className="text-lg font-semibold text-[#00357A] mb-2">
                  Responsibilities:
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {modalContent.requirement.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <JobPostingForm
                job={modalContent}
                onClose={() => setModalContent(null)}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default JobOpenings;
