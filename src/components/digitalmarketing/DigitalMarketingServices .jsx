"use client";
import React, { useState } from "react";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Our customized SEO solutions include keyword research, on-page SEO, off-page optimization, technical SEO, and voice search optimization. Whether you’re a startup or an established brand, our search engine optimization approach enhances online visibility.",
    points: [
      "Keyword Research & Strategy",
      "Link Building & Authority Growth",
      "On-Page & Technical SEO",
      "Local & Enterprise SEO",
    ],
  },
  {
    title: "Pay-per-click (PPC)",
    description:
      "DevNexus Solutions offers result-oriented PPC services to maximize your advertising ROI. With smart keyword targeting, compelling ads, and data-driven optimization, we help your brand reach the right audience through Google Ads services and paid advertising strategies.",
    points: [],
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      "As a top social media marketing company, we help brands build strong visibility and create meaningful audience engagement. Our strategic approach, combined with analytics-driven insights, supports long-term growth.",
    points: [
      "Content Creation & Scheduling",
      "Audience Engagement",
      "Performance Analytics",
    ],
  },
  {
    title: "Meta Ads Services",
    description:
      "We provide high-impact Meta Ads services to help brands reach broader audiences, generate leads, and boost conversions using advanced targeting and visually appealing creatives.",
    points: ["Ad Campaign Setup", "Audience Targeting", "A/B Testing"],
  },
  {
    title: "Email Marketing",
    description:
      "We craft email campaigns that nurture leads, retain customers, and boost conversions.",
    points: [
      "Newsletter Design",
      "Automation Workflows",
      "Performance Tracking",
    ],
  },
  {
    title: "Content Marketing",
    description:
      "As a trusted content marketing agency, we deliver SEO-optimized, high-quality content that boosts brand authority and visibility.",
    points: ["Blog Writing", "SEO Copywriting", "Content Strategy"],
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "We turn more visitors into customers by improving your website’s UX, layouts, CTAs, and funnels.",
    points: [
      "A/B Testing",
      "Heatmaps & Analytics",
      "Landing Page Optimization",
    ],
  },
];

export const DigitalMarketingServices = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedItems, setExpandedItems] = useState([]);

  const selectedService = services[selectedIndex];

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <section className="p-4 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10">
      {/* Desktop - Left Column */}
      <div className="hidden md:block md:w-1/3 space-y-6">
        <h2 className="text-[32px] font-light text-[#335D95] leading-tight">
          Explore the{" "}
          <span className="font-bold text-[#00357A]">
            Digital
            <br />
            Marketing Services
          </span>{" "}
          We Offer
        </h2>
        <div className="space-y-2">
          {services.map((service, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-3 rounded-md border hover:cursor-pointer ${
                selectedIndex === index
                  ? "bg-[#00357A] text-white"
                  : "bg-white text-[#00357A] border-[#ccc]"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile - FAQ Accordion */}
      <div className="md:hidden w-full">
        <h2 className="text-2xl font-light text-[#335D95] mb-6">
          Explore the{" "}
          <span className="font-bold text-[#00357A]">
            Digital Marketing Services
          </span>{" "}
          We Offer
        </h2>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-[#ccc] rounded-md overflow-hidden"
            >
              <button
                className={`w-full text-left px-4 py-3 flex justify-between items-center ${
                  expandedItems.includes(index)
                    ? "bg-[#00357A] text-white"
                    : "bg-white text-[#00357A]"
                }`}
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium">{service.title}</span>
                <span className="text-lg">
                  {expandedItems.includes(index) ? "−" : "+"}
                </span>
              </button>

              {expandedItems.includes(index) && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700 mb-3">{service.description}</p>
                  {service.points.length > 0 && (
                    <ul className="list-disc list-inside text-gray-800 space-y-1 pl-2">
                      {service.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop - Right Column */}
      <div className="hidden md:block md:w-2/3 space-y-4">
        <p className="text-[18px] text-gray-700 font-medium my-8">
As a leading digital marketing company, we deliver a full range of digital marketing services tailored to your business goals.
        </p>

        <div className="p-8 border border-[#cce] rounded-lg shadow-md space-y-4 bg-white min-h-[420px]">
          <h2 className="text-[24px] font-semibold text-[#335D95]">
            {selectedService.title}
          </h2>
          <p className="text-[16px] text-gray-700">
            {selectedService.description}
          </p>
          {selectedService.points.length > 0 && (
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {selectedService.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
