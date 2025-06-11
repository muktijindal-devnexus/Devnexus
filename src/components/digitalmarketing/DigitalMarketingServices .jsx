'use client'
import React, { useState } from 'react';

const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    description:'We provide comprehensive Search Engine Optimization services, our tailor-made strategies are perfect for your brand. It contains a range of services like keyword research, on-page optimization, technical SEO,etc. Does not matter if you are a start-up or a business, we have the solutions for all your business needs.',
    points: [
      'Keyword Research & Strategy',
      'Link Building & Authority Growth',
      'On-Page & Technical SEO',
      'Local & Enterprise SEO',
    ],
  },
    {
    title: 'PPC',
    description: 'DevNexus Solutions is providing expert PPC services designed to maximize your online advertising ROI.  Our PPC experts focus on strategic keyword targeting, compelling ad creation, and advanced campaign management skills.  We are helping the business to reach its desired audience. Whether you want to boost website traffic, generate leads, or increase ROI, DevNexus Solutions is making sure that your PPC campaigns are cost-effective.',
    points: [
  
    ],
  },
  {
    title: 'Social Media Marketing (SMM)',
    description: 'DexNexus Solutions delivers expert Social Media Marketing services that help businesses build a strong online presence and engage effectively with their potential audience. From strategy development and campaign management, tracking insights for performance. We have a tailor-made system for all the brand types.',
    points: [
      'Content Creation & Scheduling',
      'Audience Engagement',
      'Performance Analytics',
    ],
  },
  {
    title: 'Meta Ads',
    description:
      'Maximize your ROI with Meta Ads. We design, manage, and optimize ad campaigns across Meta’s network for precise targeting and better conversion rates.',
    points: ['Ad Campaign Setup', 'Audience Targeting', 'A/B Testing'],
  },
  {
    title: 'Email Marketing',
    description:
      'We help you craft effective email campaigns that nurture leads and retain customers with engaging content and automated flows.',
    points: ['Newsletter Design', 'Automation Workflows', 'Performance Tracking'],
  },
  {
    title: 'Content Marketing',
    description:
      'We deliver high-quality, SEO-optimized content to boost your visibility and establish authority in your niche.',
    points: ['Blog Writing', 'SEO Copywriting', 'Content Strategy'],
  },
  {
    title: 'Conversion Rate Optimization (CRO)',
    description:
      'We analyze user behavior and optimize your website layout, CTAs, and funnel to convert more visitors into customers.',
    points: ['A/B Testing', 'Heatmaps & Analytics', 'Landing Page Optimization'],
  },
];

export const DigitalMarketingServices = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedService = services[selectedIndex];

  return (
    <section className="p-10 flex flex-col md:flex-row gap-10">
      {/* Left side */}
      <div className="md:w-1/3 space-y-6">
        <h1 className="text-[32px] font-light text-[#335D95] leading-tight">
          Explore the <span className="font-bold text-[#00357A]">Digital<br />Marketing Services</span> We Offer
        </h1>
        <div className="space-y-2">
          {services.map((service, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-3 rounded-md border ${
                selectedIndex === index
                  ? 'bg-[#00357A] text-white'
                  : 'bg-white text-[#00357A] border-[#ccc]'
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-2/3 space-y-4">
        <p className="text-[18px] text-gray-700 font-medium">
          As a leading Digital Marketing Company, we provide a wide range of Digital Marketing Services according to your business goals.
        </p>

        <div className="p-18 border border-[#cce] rounded-lg shadow-md space-y-4 bg-white">
          <h2 className="text-[24px] font-semibold text-[#335D95]">
            {selectedService.title}
          </h2>
          <p className="text-[16px] text-gray-700">{selectedService.description}</p>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {selectedService.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
