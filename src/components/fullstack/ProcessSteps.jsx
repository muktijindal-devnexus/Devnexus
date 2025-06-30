'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: 'Discovery & Requirement Gathering',
    description:
      "First, we begin by understanding your brand's goal, potential audience, and technical requirements to clearly define the project scope.",
  },
  {
    title: 'Planning Strategy',
    description:
      'Our web design and web development team creates a detailed project roadmap that includes site architecture, technology stack, timeline, and resource allocation.',
  },
  {
    title: 'UI/UX Design',
    description:
      'Our design team crafts intuitive, visually attractive layouts and user interfaces that aligns with your brand identity. ',
  },
  {
    title: 'Frontend & Backend Development',
    description:
      'Next, we bring designs to life with clean and responsive frontend and backend using modern frameworks such as HTML5, CSS3, JavaScript, React, Next.js, PHP, and Python.',
  },
  {
    title: 'Integration & Testing',
    description:
      "We ensure that every component of your website or app works efficiently through seamless APIs, third-party services, and backend systems. Our technology testing process includes functionality checks, performance testing, responsiveness, and other security audits. ",
  },
  {
    title: 'Deployment',
    description:
      "We set up your site or app on the hosting platform of your choice—whether that’s AWS, Google Cloud, Azure, or a private server. Our DevOps team takes care of all the setup: getting the servers ready, sorting out CI/CD pipelines and installing SSL.",
  },
  {
    title: 'Maintenance & Support',
    description:
      'Our team of experts provides ongoing updates, security, and performance monitoring to keep your site secure, fast, and up-to-date.',
  },
];

const ProcessSteps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCards = isMobile ? 1 : 2;

  const handleNext = () => {
    if (currentIndex + visibleCards < steps.length) {
      setCurrentIndex(currentIndex + visibleCards);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - visibleCards);
    }
  };

  return (
    <section className="px-4 py-10 md:px-16 md:py-16">
      <div className="bg-[#345C9C] text-white rounded-xl shadow-md overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-10 px-4 py-10 md:px-10 md:py-14">
          {/* Left Heading */}
          <div className="md:w-1/3">
            <h2 className="text-2xl sm:text-2xl md:text-4xl font-medium leading-relaxed ">
              Process We <br />
              Follow for <br />
              <span className="font-bold">Web Design</span> <br />
              and <span className="font-bold">Web Development</span> <br />
              Services
            </h2>
          </div>

          {/* Step Cards */}
          <div className="md:w-2/3 relative">
            <div className="flex flex-col sm:flex-row gap-6 transition-all duration-300 ease-in-out">
              {steps.slice(currentIndex, currentIndex + visibleCards).map((step, index) => (
                <div
                  key={index}
                  className="bg-white text-[#345C9C] p-6 rounded-lg w-full shadow-lg h-[400px]"
                >
                  <div className="text-2xl font-semibold">{String(currentIndex + index + 1).padStart(2, '0')}</div>
                  <hr className="border-t border-gray-300 my-2" />
                  <h3 className="text-lg sm:text-xl font-bold mb-4 pt-4">{step.title}</h3>
                  <p
                    className="text-normal leading-7 sm:text-base text-gray-600 overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 8,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
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
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
