'use client'
import React from "react";
import BentoGrid from "./BentoGrid";



export const Testimonial = () => {
  return (
    <section className="bg-[#f1f4f9]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-center md:items-center mb-12  ">
        <span className="text-[#00357A] text-[40px] mb-4 md:mb-0 ">
          What Our Clients Say
        </span>

      </div>

   <div>
    <BentoGrid />
   </div>
    </section>
  );
};
