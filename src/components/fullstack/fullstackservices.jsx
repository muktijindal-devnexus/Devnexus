'use client'
import React, { useState } from 'react';

const services = [
  {
    title: 'Frontend Development',
    description:
      'We craft visually stunning and user-friendly interfaces using modern frameworks like React, Vue, and Angular. Our team ensures responsive design, accessibility, and seamless performance across all devices.',
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
      'Our backend developers build secure, scalable, and high-performing server-side applications using Node.js, Django, Laravel, and more. We ensure clean architecture and efficient database design to support your business logic.',
    points: [
      'API Development & Integration',
      'Database Design (SQL & NoSQL)',
      'Authentication & Authorization',
      'Server-side Optimization',
    ],
  },
  {
    title: 'Content Management System (CMS)',
    description:
      'We provide custom CMS solutions using WordPress, Strapi, Sanity, and Headless CMS for businesses that require flexibility and easy content updates without technical overhead.',
    points: [
      'Custom WordPress Development',
      'Headless CMS Integration',
      'Content Modeling & Management',
      'Admin Panel Customization',
    ],
  },
  {
    title: 'Full Stack Development',
    description:
      'Our full stack developers manage both frontend and backend seamlessly to deliver complete web solutions. From designing elegant UIs to building robust APIs and managing databases — we handle it all.',
    points: [
      'End-to-End Web App Development',
      'MERN / MEVN / LAMP Stacks',
      'Cloud & DevOps Integration',
      'Scalability & Maintenance',
    ],
  },
  {
    title: 'Email Integration & Automation',
    description:
      'We help you integrate email services for user authentication, notifications, and marketing automation. Enhance user engagement through personalized and automated communication workflows.',
    points: [
      'Transactional Email Integration',
      'Newsletter Subscription Setup',
      'Email Automation Workflows',
      'Third-party Tools (SendGrid, Mailchimp)',
    ],
  },
  {
    title: 'Technical SEO & Performance',
    description:
      'Improve your site’s visibility and performance with our technical SEO services. We ensure your website is crawlable, fast, and optimized for search engines and users alike.',
    points: [
      'Schema Markup & Meta Tags',
      'Page Speed Optimization',
      'Mobile-Friendly Enhancements',
      'SEO Audit & Reporting',
    ],
  },
  {
    title: 'Conversion-Focused Development (CRO)',
    description:
      'We optimize your website’s design and functionality to increase conversion rates. From A/B testing to performance tracking, we help turn visitors into loyal customers.',
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

  const selectedService = services[selectedIndex];

  return (
    <section className="p-10 flex flex-col md:flex-row gap-10">
      {/* Left side */}
      <div className="md:w-1/3 space-y-6">
        <h1 className="text-[32px] font-light text-[#335D95] leading-tight">
          Explore the <span className="font-bold text-[#00357A]">Web<br />Development Services</span> We Offer
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
