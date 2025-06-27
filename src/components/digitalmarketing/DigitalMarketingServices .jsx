'use client'
import React, { useState } from 'react';

const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    description:'We provide comprehensive Search Engine Optimization services, and our tailor-made strategies are perfect for your brand. It offers a range of services, including keyword research, on-page optimization, and technical SEO. Whether youre a start-up or an established business, we have solutions to meet all your business needs. ',
    points: [
      'Keyword Research & Strategy',
      'Link Building & Authority Growth',
      'On-Page & Technical SEO',
      'Local & Enterprise SEO',
    ],
  },
    {
    title: 'PPC',
    description: 'DevNexus Solutions provides expert PPC services designed to maximize your online advertising ROI.  Our PPC experts focus on strategic keyword targeting, creating compelling ads, and utilizing advanced campaign management skills.  We are helping the business to reach its desired audience. Whether you want to boost website traffic, generate leads, or increase ROI, DevNexus Solutions ensures that your PPC campaigns are cost-effective and effective.',
    points: [
  
    ],
  },
  {
    title: 'Social Media Marketing (SMM)',
    description: 'DexNexus Solutions delivers expert Social Media Marketing services that help businesses build a strong online presence and engage effectively with their potential audience, from strategy development and campaign management to tracking insights for performance. We have a tailor-made system for all the brand types.',
    points: [
      'Content Creation & Scheduling',
      'Audience Engagement',
      'Performance Analytics',
    ],
  },
  {
    title: 'Meta Ads',
    description:
      'DevNexus Solutions offers expert Meta Ads Services to help businesses reach a broader audience and generate high-quality leads. We have a team of experts ready to create effective, highly visual ad campaigns tailored to your business needs.',
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
  const [expandedItems, setExpandedItems] = useState([]);

  const selectedService = services[selectedIndex];

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(item => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <section className="p-4 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10">
      {/* Desktop - Left Column */}
      <div className="hidden md:block md:w-1/3 space-y-6">
        <h2 className="text-[32px] font-light text-[#335D95] leading-tight">
          Explore the <span className="font-bold text-[#00357A]">Digital<br />Marketing Services</span> We Offer
        </h2>
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

      {/* Mobile - FAQ Accordion */}
      <div className="md:hidden w-full">
        <h2 className="text-2xl font-light text-[#335D95] mb-6">
          Explore the <span className="font-bold text-[#00357A]">Digital Marketing Services</span> We Offer
        </h2>
        
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="border border-[#ccc] rounded-md overflow-hidden">
              <button
                className={`w-full text-left px-4 py-3 flex justify-between items-center ${
                  expandedItems.includes(index) ? 'bg-[#00357A] text-white' : 'bg-white text-[#00357A]'
                }`}
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium">{service.title}</span>
                <span className="text-lg">{expandedItems.includes(index) ? '−' : '+'}</span>
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
          As a leading Digital Marketing Company, we provide a wide range of Digital Marketing Services according to your business goals.
        </p>

        <div className="p-8 border border-[#cce] rounded-lg shadow-md space-y-4 bg-white min-h-[420px]">
          <h2 className="text-[24px] font-semibold text-[#335D95]">
            {selectedService.title}
          </h2>
          <p className="text-[16px] text-gray-700">{selectedService.description}</p>
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