import React from 'react'
import HiringSection from './HiringSection'
import JobOpenings from './JobOpenings'
import BannerImage1 from '../../../public/images/career/career.jpeg'
import OurValues from './OurValues'
import GoodCompanySection from './GoodCompany'
import { Banners } from '../global/NavBanners'


export const Career = () => {
  return (
    <div>
         <Banners
                image={BannerImage1}
                overlayImage
                heading="Start Your Next Career Opportunity Here"
                description="At DevNexus Solutions, we are not only offering jobs, we are building careers. Whether you are a creative thinker, tech lover, or result-driven marketer you will find freedom of work with us."
              />
      <HiringSection />
      <JobOpenings />
      <OurValues/>
      <GoodCompanySection />
    </div>
  )
}
