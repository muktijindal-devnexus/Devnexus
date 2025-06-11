'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Faq from '../../../public/images/FAQs.svg';
import Image from 'next/image';

const FaqSection = ({ faqs = [], title, subtitle }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="px-4 sm:px-8 md:px-16 py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      {/* FAQ Image/Header Section */}
      <div className="w-full lg:w-[40%] text-center lg:text-left">
        <div className="max-w-[500px] mx-auto lg:mx-0">
          <Image 
            src={Faq} 
            width={800} 
            height={300} 
            alt='faq' 
            className="w-full h-auto"
            priority
          />
        </div>
        {/* Optional: Uncomment if you want to use text headers instead */}
        {/* 
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00357A]">
          {title || 'Frequently Asked Questions'}
        </h2>
        {subtitle && (
          <p className="text-gray-600 mt-2 md:mt-4 text-base md:text-lg">
            {subtitle.split(' – ')[0]}
            <br className="md:hidden" />
            <span className="font-medium">{subtitle.split(' – ')[1]}</span>
          </p>
        )}
        */}
      </div>

      {/* FAQ Items */}
      <div className="w-full lg:w-[60%] space-y-3 md:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg transition-all duration-300 ${
              openIndex === index 
                ? 'bg-[#00357A] text-white shadow-lg' 
                : 'bg-white hover:bg-gray-50 border-gray-200'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 md:px-5 md:py-4 flex justify-between items-center"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className={`font-medium text-sm md:text-base ${
                openIndex === index ? 'text-white' : 'text-gray-800'
              }`}>
                {faq.question}
              </span>
              {openIndex === index ? (
                <FaMinus className="text-white" />
              ) : (
                <FaPlus className="text-[#00357A]" />
              )}
            </button>
            {openIndex === index && (
              <div 
                id={`faq-answer-${index}`}
                className="px-4 pb-4 md:px-5 md:pb-5 text-sm md:text-base text-white"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;