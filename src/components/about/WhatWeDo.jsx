'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const WhatWeDo = () => {
  const [showVision, setShowVision] = useState(true);
  const [showMission, setShowMission] = useState(false);

  return (
    <section className="py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-[#00357A] mb-2">What We Do</h2>
      <p className="text-black mb-8 text-base md:text-lg">
   We solve the world's problems, live by the code, and deliver it back to society.
      </p>

      <div className="text-left max-w-3xl mx-auto">
        {/* Vision Accordion */}
        <button
          className={`w-full px-4 py-3 rounded-md flex justify-between items-center font-semibold text-lg transition-colors duration-200 ${
            showVision
              ? 'bg-[#00357A] text-white'
              : 'bg-white text-[#00357A] border border-gray-300'
          }`}
          onClick={() => {
            setShowVision(!showVision);
            if (!showVision) setShowMission(false); // Optionally close the other
          }}
        >
          Our Vision
          {showVision ? <Minus size={20} /> : <Plus size={20} />}
        </button>

        {showVision && (
          <div className="py-6 text-sm text-gray-700 space-y-3">
            <blockquote className="border-l-4 rounded-l-lg border-[#00357A] pl-4 text-base font-medium text-gray-900">
             "To be a global leader in technology services, recognized for our commitment to excellence, customer-centric approach, and our role in shaping a smarter, more connected, and sustainable digital future."
            </blockquote>
            <p>
             At DevNexus Solutions, our vision is to lead the way in shaping a future where the digital era becomes the foundation for progress and sustainable growth. Through our commitment to excellence, we continue learning, we are aiming to redefine what's possible in the world of IT services, turning today's challenges into tomorrow's breakthrough.
            </p>
          </div>
        )}

        {/* Mission Accordion */}
        <button
          className={`w-full mt-6 px-4 py-3 rounded-md flex justify-between items-center font-semibold text-lg transition-colors duration-200 ${
            showMission
              ? 'bg-[#00357A] text-white'
              : 'bg-white text-[#00357A] border border-gray-300'
          }`}
          onClick={() => {
            setShowMission(!showMission);
            if (!showMission) setShowVision(false); // Optionally close the other
          }}
        >
          Our Mission
          {showMission ? <Minus size={20} /> : <Plus size={20} />}
        </button>

        {showMission && (
          <div className="py-6 text-sm text-gray-700 space-y-3">
            <blockquote className="border-l-4 rounded-l-lg border-[#00357A] pl-4 text-base font-medium text-gray-900">
           "To empower businesses and individuals by delivering innovative, reliable, and scalable IT solutions that drive digital transformation, enhance productivity, and create lasting value for our clients and communities."
            </blockquote>
            <p>
            We believe tech should work as a bridge, not a barrier to opportunity. That's why we are designing every solution with reliability and leaving a long-term impact in mind. Does not matter that you are, start-up looking to scale the market reach or business who is undergoing digital revulation, we are here to make your process seamless.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhatWeDo;
