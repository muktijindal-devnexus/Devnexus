import { ContactComponents } from '@/components/contact'
import React from 'react'

export const metadata = {
  title: "Contact Us",
  description: "See Digital Transformation for your brand with DevNexus Solutions. Reach out to us today, talk with our expert, and get a perfect solution for your brand. ",
  alternates: {
    canonical: "https://devnexussolutions.com/contact",
  },
};

const ContactPage = () => {
  return (
    <div className='mt-8'>
        <ContactComponents />
    </div>
  )
}

export default ContactPage
