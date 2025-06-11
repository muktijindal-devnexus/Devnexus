'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import BannerImage1 from '../../../public/images/BannerImage.jpg'
import BannerSheet from '../../../public/images/Bannersheet.png'

const bannerData = [
  {
    image: BannerImage1,
    heading: 'Mobile App Development Services That Transform Ideas Into Realty ',
    description: 'Transforming ideas into high-performing Android & iOS applications',
  },
]

export const MobileBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeBanner = bannerData[activeIndex]

  return (
    <div className="relative w-full h-[500px] md:h-[600px] select-none px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Background and overlay images */}
      <Image
        src={activeBanner.image}
        alt="banner"
        fill
        className="object-cover z-0 transition-all duration-500"
      />
      <Image
        src={BannerSheet}
        alt="banner sheet"
        fill
        className="object-cover z-10 transition-all duration-500"
      />

      {/* Centered Text content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight font-[Montserrat]">
            {activeBanner.heading}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-6 md:leading-8">
            {activeBanner.description}
          </p>
        </div>
      </div>
    </div>
  )
}
