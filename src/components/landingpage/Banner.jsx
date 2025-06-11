'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Arrow from '../../../public/images/Arrow.svg'
import Image from 'next/image'

// Replace these with your actual video imports or URLs
const bannerData = [
  {
    video: '/images/Banner/Digital.mp4',
    heading: 'Transforming Ideas into Digital Excellence',
    description: 'We craft cutting-edge digital solutions that drive growth, enhance user experience, and elevate your brand. From software development to strategic marketing, we turn your vision into reality.',
  },
  {
    video: '/images/Banner/Industries.mp4',
    heading: 'Empowering Various Industries to Thrive in a Digital Era',
    description: 'We specialize in driving digital transformation across a wide range of industries, empowering businesses to innovate, streamline in todays fast-moving digital world.',
  },
  {
    video: '/images/Banner/Team.mp4',
    heading: 'Our Expert Minds Crafting Future-Ready Solutions.',
    description: 'At DevNexus Solutions, our strength is our expert team, passionate professionals dedicated to delivering tailored digital transformation solutions.',
  },
]

export const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeBanner = bannerData[activeIndex]

  return (
    <div className="relative w-full h-[500px] md:h-[600px] select-none px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Background Video */}
      <video
        src={activeBanner.video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500"
      />

      {/* Overlay (Optional gradient or image for styling) */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center text-white px-4 sm:px-6 md:px-10 w-full md:w-[55%]">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight font-[Montserrat]">
          {activeBanner.heading}
        </h1>
        <span className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-6 md:leading-8">
          {activeBanner.description}
        </span>
        <Link href="/contact" passHref>
          <span className="flex items-center gap-2 pt-4 cursor-pointer text-sm sm:text-base w-fit">
            Request Quote
            <Image src={Arrow} alt="arrow" width={30} height={15} />
          </span>
        </Link>

        {/* Dots */}
        <div className="flex gap-4 mt-6">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex items-center gap-1"
            >
              <div
                className={`w-6 sm:w-10 h-0.5 transition-all duration-300 ${
                  activeIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
              <span
                className={`text-white text-xs sm:text-sm ${
                  activeIndex === index ? 'font-bold' : 'opacity-50'
                }`}
              >
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
