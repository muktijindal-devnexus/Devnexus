'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const services = [
{
  title: 'Responsive Web Design',
  description:
    'We create websites that look stunning and function seamlessly across all devices. Our responsive web design services ensure an optimal experience on every screen size.',
  points: [
    'Mobile-First & Cross-Browser Compatibility',
    <>
      Modern, Clean & Interactive{' '}
      <Link href="/ui-ux-design-services" className="text-[#00357A] font-bold hover:underline">
        UI/UX
      </Link>
    </>,
    'High-Speed Performance Optimization',
    'Brand-Consistent Visual Design',
  ],
},
  {
    title: 'E-commerce Development',
    description:
      'As part of our E-commerce Development expertise, DevNexus Solutions builds powerful, secure, and conversion-focused online stores. From product catalogs to payment gateway integration, we develop optimized storefronts that convert.',
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
      'As a modern CMS Development provider, we build dynamic, easy-to-manage websites on WordPress, Webflow, and other platforms. Our solutions are SEO-friendly, scalable, and tailored to your business goals.',
    points: [
      'Custom WordPress Development',
      'Drag & Drop Page Builders (Webflow, Elementor, etc.)',
      'Content Structuring & Blog Setup',
      'Training & Ongoing Support',
    ],
  },
  {
    title: 'Custom Web Application Development',
    description:
      ' We offer Custom Web Application Development tailored from scratch to match your unique business requirements. Whether you need complex systems, admin portals, or feature-rich platforms, we deliver scalable and secure custom solutions.',
    points: [
      'Custom-Coded Websites (HTML, CSS, JavaScript, PHP, Python, etc.)',
      'Web App Development',
      'Database & API Integrations',
      'Scalable & Secure Architecture',
    ],
  },


{
  title: 'Frontend Development',
  description:
    'Our frontend development team brings your vision to life using modern technologies like React, Next.js, Vue.js, TypeScript, Angular, and more. We deliver user-centric, responsive, and high-performance interfaces.',
  points: [
    'Responsive & Adaptive UI Design',
    'React, Vue.js, Next.js, TypeScript, and Angular Development',
    'Cross-browser Compatibility',
    <>
      Performance Optimization and{' '}
      <Link href="/digital-marketing-services" className="text-[#00357A] font-bold hover:underline">
        SEO friendly
      </Link>
    </>,
  ],
},
  {
    title: 'Backend Development',
    description:
      'As part of our backend development solutions, we provide robust, secure, and scalable server-side architectures that ensure peak performance.',
    points: [
      'APIs Development & Integration',
      'Database Design (SQL & NoSQL)',
      'Authentication & Authorization',
      'Server-side Optimization',
    ],
  },
  {
    title: 'Conversion Rate Optimization (CRO)',
    description:
      'Our Conversion Rate Optimization (CRO) services help boost conversions and improve user journeys. From A/B testing to UI improvements, we transform your site into a revenue-generating machine.',
    points: [
      'Landing Page Development',
      'UI/UX Improvements',
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
        <h2 className="text-2xl md:text-[32px] font-light text-[#335D95] leading-tight">
          Explore the <span className="font-bold text-[#00357A]">Web<br />Development Services</span> We Offer
        </h2>
        <span className='flex justify-end text-[#335D95] opacity-[60%] md:hidden'>
          Tap to expand
        </span>
        {/* Desktop view - buttons */}
        <div className="hidden md:block space-y-2 ">
          {services.map((service, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-3 rounded-md border hover:cursor-pointer ${
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
We provide a complete suite of web development offerings, establishing ourselves as a top web design and web development service provider delivering global-quality solutions.

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