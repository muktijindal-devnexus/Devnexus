'use client'
import React from 'react'
import Image from 'next/image'
import BannerSheet from '../../../public/images/Bannersheet.png'

export const Banners = ({ image, heading, description }) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] select-none px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Background Image */}
       <Image
        src={image}
        alt="background"
        fill
        className="object-cover z-0 transition-all duration-500"
      />

      {/* Optional Overlay Sheet */}
      {BannerSheet && (
        <Image
          src= {BannerSheet}
          alt="overlay"
          fill
          className="object-cover z-10 transition-all duration-500"
        />
      )}

      {/* Centered Content */}
      <div className="absolute inset-0 z-20 flex items-center text-white px-10">
        <div className="max-w-2xl">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight font-[Montserrat]">
            {heading}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-6 md:leading-8">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
