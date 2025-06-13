'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: 'Discovery & Requirement Gathering',
    description:
      "First we begin with the understanding of your brand's goals, potential audience and technical requirement needs to define the project scope clearly.",
  },
  {
    title: 'Planning Strategy',
    description:
      'Our Web Design and Web Development team, create a detailed project road map, which include site architecture, technology stack, timeline and allocation of resources.',
  },
  {
    title: 'UI UX Design',
    description:
      'Our design team crafts intuitive, visually attractive layouts and user interface which align your brand identity.',
  },
  {
    title: 'Frontend & Backend Development',
    description:
      'Next we bring designs to life with clean, responsive front end code using modern frameworks like HTML5, CSS3, JavaScript, React, Node.js, PHP, Python, etc.',
  },
  {
    title: 'Integration & Testing',
    description:
      "We make sure every component of your website or app works efficiently through seamless API's, third party services and backend systems. Our technology testing process includes functionality checks, performance testing, responsiveness and other security audits.",
  },
  {
    title: 'Deployment',
    description:
      'After comprehensive testing, we launch your website on the preferred hosting server and ensure smooth setup and operation.',
  },
  {
    title: 'Maintenance & Support',
    description:
      'Our team of experts provides ongoing updates, security, performance monitoring to keep your site secure, fast and keep it up to date.',
  },
];

const ProcessSteps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 2;

  const handleNext = () => {
    if (currentIndex + visibleCards < steps.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section>

    <div className="bg-[#345C9C] text-white px-6 py-16 md:px-16 rounded-xl shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-10">
        {/* Left Heading */}
        <div className="md:w-1/3 pt-14">
          <h2 className="text-2xl md:text-4xl font-medium leading-relaxed">
            Process We <br />
            Follow As The <br />
            <span className="font-bold">Web Design</span> <br />
            and <span className="font-bold">Web Development</span> <br />
            services
          </h2>
        </div>

        {/* Step Cards */}
        <div className="md:w-2/3 relative">
          <div className="flex gap-6 transition-all duration-300 ease-in-out">
            {steps.slice(currentIndex, currentIndex + visibleCards).map((step, index) => (
              <div
                key={index}
                className="bg-white text-[#345C9C] p-6 rounded-lg w-full shadow-lg h-[400px]"
              >
                <div className="text-2xl font-semibold">{String(currentIndex + index + 1).padStart(2, '0')}</div>
                <hr className="border-t border-gray-300 my-2" />
                <h3 className="text-2xl font-bold mb-6 pt-6">{step.title}</h3>
                <p
                  className="text-lg text-gray-600 overflow-hidden"
                     style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 7,
                   WebkitBoxOrient: 'vertical',
                    // lineHeight: '1.25rem',
                  }}
                
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="bg-white text-[#345C9C] p-2 rounded-full shadow hover:bg-gray-200 disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-[#345C9C] p-2 rounded-full shadow hover:bg-gray-200 disabled:opacity-50"
          disabled={currentIndex + visibleCards >= steps.length}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
