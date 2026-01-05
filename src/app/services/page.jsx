import { ServiceComponent } from '@/components/servicecomponent';
import React from 'react'

export const metadata = {
  title: "Explore Our Services - DevNexus Solutions",
  description: "Unlock the full potential of your business with DevNexus Solutions. We provide a comprehensive solution to your business with a wide range of services. Visit us.",
  alternates: {
    canonical: "https://devnexussolutions.com/services",
  },
   openGraph: {
      title: "Explore Our Services - DevNexus Solutions",
  description: "Unlock the full potential of your business with DevNexus Solutions. We provide a comprehensive solution to your business with a wide range of services. Visit us.",
      url: "https://devnexussolutions.com/services",
      siteName: "DevNexus Solutions",
      type: "article",
      locale: "en_IN"
    },
};

const Servicepage = () => {
  return (
    <div>
        <ServiceComponent />
    </div>
  )
}


export default Servicepage;
