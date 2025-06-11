'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import Faq from '../../../public/images/FAQs.svg'
import Image from 'next/image';

const FaqSection = ({ faqs = [], title, subtitle }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="px-6 md:px-16 py-12 space-y-8 flex">
      <div className="text-center">
        
        <Image src={Faq} width={800} height={300} className='' alt='faq' />
        
        {/* <h2 className="text-2xl md:text-3xl font-bold text-[#00357A]">
          {title || 'Frequently Asked Questions (FAQs)'}
        </h2>
        {subtitle && (
          <p className="text-gray-600 mt-2">
            {subtitle.split(' – ')[0]}
            <br className="md:hidden" />
            <span className="font-medium">{subtitle.split(' – ')[1]}</span>
          </p>
        )} */}
      </div>

      <div className="space-y-3 w-[70%]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-md transition-all duration-300 ${
              openIndex === index ? 'bg-[#00357A] text-white' : 'bg-white'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-center"
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-sm text-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
