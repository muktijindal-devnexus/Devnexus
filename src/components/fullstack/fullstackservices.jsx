'use client'
import React, { useState } from 'react';

const services = [
  {
    title: 'Responsive Web Design',
    description:
      'We are creating websites that look stunning and function seamlessly across all devices, which ensures that the audience enjoys a better experience whether on Desktop, tablet, or mobile.',
    points: [
      'Mobile-First & Cross-Browser Compatibility',
      'Modern, Clean & Interactive UI/UX',
      'High-Speed Performance Optimization',
      'Brand-Consistent Visual Design',
    ],
  },
  {
    title: 'E-commerce Development',
    description:
      'At DevNexus Solutions, we are building powerful, secure and user-friendly e-commerce websites customized according to your business requirements. From listings of products and shopping carts to integration of a payment gateway, our solutions are designed to deliver the best website that performs and converts. ',
    points: [
      'Shopify, WooCommerce, Magento & Custom Solutions',
      'Product Catalogue & Shopping Cart Integration',
      'Secure Payment Gateway Setup',
      'Mobile-Optimized & Fast-Loading Storefronts',
    ],
  },
  {
    title: 'CMS Development (WordPress, Webflow & More)',
    description:
      'We specialize in creating dynamic and easy-to-navigate websites using powerful Content management systems like wordpress, Joomla, etc. Our CMS solutions empower you to update the content, images without much hassle and technical skills. Whether you need a website, a blog, custom portal, DevNexus Solutions is ready to deliver the best scalable, SEO friendly website which are tailored to your business goals.',
    points: [
      'Custom WordPress Development',
      'Drag-and-Drop Page Builders (Webflow, Elementor, etc.)',
      'Content Structuring & Blog Setup',
      'Training & Ongoing Support',
    ],
  },
  {
    title: 'Custom Web Application Development',
    description:
      'We are offering tailor-made Website development Services built from the ground up to match your unique business requirements. Whether you need a complex application, a portal for business, or a multi-feature platform, our team of experts is developing scalable, secure and high-performing websites. At DevNexus Solution, we are focusing on functionality, user experience and long-term growth for your brand.',
    points: [
      'Custom-Coded Websites (HTML, CSS, JavaScript, PHP, Python, etc.)',
      'Web App Development',
      'Database & API Integrations',
      'Scalable & Secure Architecture',
    ],
  },
  {
    title: 'Front End Development',
    description:
      'Our front-end team will bring your vision to life with clean, responsive, and interactive design. Using the latest technology like HTML5, CSS3, JavaScript, React, etc. We are developing a user-centric design that delivers a seamless experience across all types of devices. At DevNexus Solutions, we focus on performance, accessibility to ensure your websites functionality.',
    points: [
      'Responsive & Adaptive UI Design',
      'React, Vue, Angular Development',
      'Cross-browser Compatibility',
      'Performance Optimization',
    ],
  },
  {
    title: 'Backend Development',
    description:
      'At DevNexus Solutions, we are providing a robust, secure and scalable backend system that gives power to your application. From database architecture and development of API our backend team ensures optimal performance and reliability.',
    points: [
      'API Development & Integrations',
      'Database Design (SQL & NoSQL)',
      'Authentication & Authorization',
      'Server-side Optimization',
    ],
  },
  {
    title: 'Conversion-Focused Development (CRO)',
    description:
      'We optimize your website design and functionality to increase conversion rates. From A/B testing to performance tracking, we help turn visitors into loyal customers.',
    points: [
      'Landing Page Development',
      'UX/UI Improvements',
      'A/B Testing & Analytics',
      'Goal Funnel Optimization',
    ],
  },
];

export const FullStackServices = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const selectedService = services[selectedIndex];

  const toggleService = (index) => {
    if (window.innerWidth < 768) {
      // Mobile behavior - toggle accordion
      setExpandedIndex(expandedIndex === index ? null : index);
    } else {
      // Desktop behavior - select service
      setSelectedIndex(index);
    }
  };

  return (
    <section className="p-4 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10">
      {/* Left side */}
      <div className="md:w-1/3 space-y-6">
        <h1 className="text-2xl md:text-[32px] font-light text-[#335D95] leading-tight">
          Explore the <span className="font-bold text-[#00357A]">Web<br />Development Services</span> We Offer
        </h1>
        <span className='flex justify-end text-[#335D95] opacity-[60%]'>
          Tap to expand
        </span>
        {/* Desktop view - buttons */}
        <div className="hidden md:block space-y-2">
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
        
        {/* Mobile view - accordion */}
        <div className="md:hidden space-y-2">
          {services.map((service, index) => (
            <div key={index} className="border border-[#ccc] rounded-md overflow-hidden">
              <button
                className={`w-full text-left px-4 py-3 ${
                  expandedIndex === index ? 'bg-[#00357A] text-white' : 'bg-white text-[#00357A]'
                }`}
                onClick={() => toggleService(index)}
              >
                {service.title}
              </button>
              {expandedIndex === index && (
                <div className="p-4 bg-white text-gray-700">
                  <p className="mb-3">{service.description}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Desktop only */}
      <div className="hidden md:block md:w-2/3">
        <p className="text-[18px] text-gray-700 font-medium mt-8 mb-12">
          As a Leading Web Design and Web Development Service provide, we are providing range of website development services-
        </p>

        <div className="p-6 border border-[#cce] rounded-lg shadow-md space-y-4 bg-white max-h-[630px] lg:h-[430px] lg:p-18">
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