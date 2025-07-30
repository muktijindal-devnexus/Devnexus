'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CaseStudyCard({
  title,
  description,
  logo,
  image,
  websiteUrl,
  companyName,
  index,
  carousalImage,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <section
      className={`flex flex-col lg:flex-row items-center gap-10 bg-white p-6 rounded-xl shadow-md max-w-6xl mx-auto ${
        !isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Project Image */}
      <div className="flex-1 relative w-full">
        <Image src={image} width={500} height={400} alt={`${companyName} Main`} />
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Image src={logo} alt={`${companyName} Logo`} width={140} height={140} />
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

      {/* Modal with Swiper Carousel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center pt-4">
          <div className="bg-white rounded-xl max-w-4xl w-full relative shadow-lg overflow-hidden p-8">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black z-10"
            >
              <X size={24} />
            </button>

            {carousalImage?.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
              >
                {carousalImage.map((imgUrl, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={imgUrl}
                      alt={`Case Study Slide ${idx + 1}`}
                      width={1000}
                      height={600}
                      className="mx-auto rounded-xl object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="text-center text-gray-500">No images available for this case study.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
