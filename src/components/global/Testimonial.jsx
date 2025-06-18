'use client'
import React from "react";
import BentoGrid from "./BentoGrid";



export const Testimonial = () => {
  return (
    <section className="bg-[#f1f4f9]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 ">
        <span className="text-[#00357A] text-[20px] mb-4 md:mb-0">
          What Our Clients Say
        </span>
        <div className="md:w-[55%]">
          <h1 className="font-semibold text-[24px] md:text-[34px]">
            Trusted by Many for Digital and Web Solutions
          </h1>
        </div>
      </div>

   <div>
    <BentoGrid />
   </div>
    </section>
  );
};
