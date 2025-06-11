"use client";

import React from "react";

const IndustryExperience = () => {
  return (
    <section className="bg-white py-12 px-4 text-center ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#7B7B7B]">
          <span className="text-[#00357A] font-bold">Our</span> industry
          experience <span className="text-[#00357A] font-bold">and</span>{" "}
          market research{" "}
          <span className="text-[#00357A] font-bold">make the difference</span>
        </h2>

        <p className="text-[#4C4C4C] text-lg md:text-base my-10 ">
          At DevNexus Solutions, our team believes that success comes only from
          hard work. Our unique actionable insights and deep understanding of
          decades of experience in the industry help them market. We are always
          on top of anticipating shifts in the market as well as emerging
          technologies. With our approach, we ensure that every service offered
          is relevant and customized to serve the needs of the brand.
        </p>

        <div className="mt-10  p-4 rounded-lg max-w-[700px] mx-auto ">
          <video
            src="/images/contact/globalContact.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default IndustryExperience;
