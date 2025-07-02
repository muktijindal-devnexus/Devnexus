import { Career } from '@/components/career'
import React from 'react'

export const metadata = {
  title: "Careers -  DevNexus Solutions | Join Our Dynamic Team",
  description: "Explore career opportunities with DevNexus Solutions. We are always looking for passionate professionals in web development, marketing, design, etc. Visit us now.",
  alternates: {
    canonical: "https://devnexussolutions.com/career",
  },
};

const CareerPage = () => {
  return (
    <div>
        <Career />
    </div>
  )
}

export default CareerPage
