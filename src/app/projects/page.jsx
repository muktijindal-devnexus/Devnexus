import { Banner } from '@/components/global/Banner';
import React from 'react'
import BannerImage1 from '../../../public/images/BannerImage1.jpg'


const ProjectPage = () => {
  return (
    <div>
           <Banner
          image={BannerImage1}
          overlayImage
          heading="Mobile App Development Services That Transform Ideas Into Reality"
          description="Transforming ideas into high-performing Android & iOS applications"
        />
        
    </div>
  )
}
export default ProjectPage;

