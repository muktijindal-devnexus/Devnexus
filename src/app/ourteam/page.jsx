import OurTeamComponent from '@/components/ourteamcomponent';
import React from 'react'

export const metadata = {
  title: "Meet The Experts Mind Behind DevNexus Solutions",
  description: "At DevNexus Solutions, our team of experts is committed to delivering excellence in every digital transformation. We have 50+ teammates. Visit us to know more.",
  alternates: {
    canonical: "https://devnexussolutions.com/ourteam",
  },
   openGraph: {
      title: "Meet The Experts Mind Behind DevNexus Solutions",
       description: "At DevNexus Solutions, our team of experts is committed to delivering excellence in every digital transformation. We have 50+ teammates. Visit us to know more.",
      url: "https://devnexussolutions.com/ourteam",
      siteName: "DevNexus Solutions",
      type: "article",
      locale: "en_IN",
    },
};

 const OurTeampage = () => {
  return (
    <div>
        <OurTeamComponent />
    </div>
  )
}

export default OurTeampage;
