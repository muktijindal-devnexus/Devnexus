"use client";
import React from "react";

const cards = [
  {
    id: "01",
    title: "Cutting-Edge Technologies",
    description:
    " DevNexus solutions works on modern technologies such as React, NEXT.js, Figma etc to craft a responsive and visually appealing design for your brand. ",
  },
  {
    id: "02",
    title: "Proven Record",
    description:
      "With over 300+ projects covered and committed to deliver the quality assurance. DevNexus Solutions ensure that every work we deliver meets the highest work quality standard.",
  },
  {
    id: "03",
    title: "Global Reach with Local Expertise",
    description:
      "DevNexus Solutions has successfully delivered projects across various segments, including healthcare, real estate, e-commerce, education etc.",
  },
];

export const WhyUIUX = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <h2 className="text-2xl md:text-[48px]  text-center text-[#00357A] mb-12 ">
        Why DevNexus Solutions for{" "}
        <span className="text-[#00357A] font-bold">UI UX <br/> Design & Development</span> services?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-md border border-gray-100 transition hover:shadow-lg"
          >
            <div className="border-t-8 border-[#002f6c] rounded-t-md"></div>
            <div className="py-14 px-10">
              <h3 className="text-[#00357A] font-bold text-[22px] mb-2">
                {card.id}{" "}
                <span className="text-[#00357A] font-medium text-[22px] ml-2 leading-4">
                  {card.title}
                </span>
              </h3>
              <p className="text-sm text-[#727272]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
