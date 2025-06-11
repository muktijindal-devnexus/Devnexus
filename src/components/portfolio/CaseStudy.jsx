'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function CaseStudyCard({
  title,
  description,
  logoSrc,
  imageIcons = [],
  mainImage,
  websiteUrl,
  pdfPath,
  companyName,
  index,  // <-- receive index prop here
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Check if index is odd or even for layout toggle
  const isEven = index % 2 === 0;

  return (
    <section
      className={`flex flex-col lg:flex-row items-center gap-10 bg-white p-6 rounded-xl shadow-md max-w-6xl mx-auto ${
        !isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Left or Right Section - Main Image */}
      <div className="flex-1 relative w-full">
        <Image src={mainImage} width={500} height={400} alt={`${companyName} Main`} />
      </div>

      {/* Right or Left Section - Content */}
      <div className="flex-1">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Image src={logoSrc} alt={`${companyName} Logo`} width={140} height={140} />
        </div>
        <p className="text-gray-600 mb-8">{description}</p>

        <div className="flex gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#00357A] text-white px-4 py-1 rounded-md transition"
          >
            View Case Study &gt;&gt;
          </button>
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#00357A] font-medium hover:underline"
          >
            Visit Website <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Modal for PDF */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full relative shadow-lg overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black"
            >
              <X size={24} />
            </button>
            <iframe
              src={pdfPath}
              className="w-full h-[80vh]"
              frameBorder="0"
              title={`${companyName} Case Study`}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
