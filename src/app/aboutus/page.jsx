import { AboutComponent } from '@/components/about'
import React from 'react'

export const metadata = {
  title: "About Us",
  description: "DevNexus Solutions is a certified Digital Transformaiton Consultant. Our team of experts loves to create smart ideas. Contact us now. ",
  alternates: {
    canonical: "https://devnexussolutions.com/aboutus",
  },
};

const About = () => {
  return (
    <div>
  <AboutComponent />
    </div>
  )
}

export default About