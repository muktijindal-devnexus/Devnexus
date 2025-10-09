"use client";
import React from "react";

const cards = [
  {
    id: "01",
    title: "Trending Technologies",
    description:
    "DevNexus Solutions utilizes modern technologies such as Framer, Splin, Visily, MidJounrney and Magician(Figma Plugin).",
  },
  {
    id: "02",
    title: "Proven Record Of Excellence",
    description:
    "With a proven record of 600+ satisfied clients and over 1,100 successfully delivered projects, DevNexus Solutions is deeply committed to maintaining the highest standards of quality. Our impressive client retention rate of 85% reflects the trust and consistency we bring to every engagement."
  },
  {
    id: "03",
    title: "Global footprint across diverse sectors ",
    description:
      "DevNexus Solutions has successfully delivered projects in 12+ countries across a diverse range of industries including healthcare, real estate, e-commerce, education, etc.",
  },
];

export const WhyUIUX = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <h2 className="text-2xl md:text-[48px]  text-center text-[#00357A] mb-12 ">
        What Sets DevNexus Solutions Apart as a Leading{" "}
        <span className="text-[#00357A] font-bold">UI/UX Design Partner for </span> Businesses?
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
