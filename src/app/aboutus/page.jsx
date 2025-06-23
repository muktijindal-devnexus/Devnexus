import { AboutComponent } from '@/components/about'
import React from 'react'

export const metadata = {
  title: "About Us - DevNexus Solutions",
  description: "Contact DevNexus Solutions, a certified marketing agency in the USA. Our team of marketing experts loves to create smart ideas. Contact us now. ",
  alternates: {
    canonical: "https://devnexussolutions.com/about",
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