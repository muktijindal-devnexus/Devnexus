'use client'
import React from "react";
import BentoGrid from "./BentoGrid";



export const Testimonial = () => {
  return (
    <section className="bg-[#f1f4f9]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:mb-12  ">
        <span className="text-[#00357A] text-[28px] sm:text-[32px] md:text-[40px] mb-0 md:mb-4 ">
          What Our Clients Say
        </span>
  {/* Mobile Title - Only shows on small screens */}
          <h2 className="sm:hidden font-semibold text-2xl pt-10 col-span-full">
            Trusted by Many for Digital and Web Solutions
          </h2>
      </div>

   <div>
    <BentoGrid />
   </div>
    </section>
  );
};
