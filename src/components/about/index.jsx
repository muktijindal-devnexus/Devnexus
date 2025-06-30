import React from 'react'
import BannerImage1 from "../../../public/cdn/images/About/about.png";
import FoundersSection from './FounderSection';
import Slider from '../common/Slider';
import WhatWeDo from './WhatWeDo';
import { AboutDevnexus } from './ContentSection';
import OurValues from './OurValues';
import { Banners } from '../global/NavBanners';

import Brand3 from '../../../public/cdn/images/brandslogo/Jindal.svg';
import Brand4 from '../../../public/cdn/images/brandslogo/Studio.svg';
import Brand5 from '../../../public/cdn/images/brandslogo/Rotunneling.svg';
import Brand6 from '../../../public/cdn/images/brandslogo/travel.svg';
import Brand7 from '../../../public/cdn/images/brandslogo/DCI.svg';
import Brand10 from '../../../public/cdn/images/brandslogo/SRE.svg';
import Brand11 from '../../../public/cdn/images/brandslogo/KG.svg';
import Brand12 from '../../../public/cdn/images/brandslogo/nano.svg';
// import Brand13 from '../../../public/images/brandslogo/cafe.svg';
import Brand14 from '../../../public/cdn/images/brandslogo/vize.svg';

const brandLogos = [
  Brand3.src,
  Brand4.src,
  Brand5.src,
  Brand6.src,
  Brand7.src,
  Brand10.src,
  Brand11.src,
  Brand12.src,
  // Brand13.src,
  Brand14.src,
];


export const AboutComponent = () => {
  return (
    <div>
            <Banners
                image={BannerImage1}
                overlayImage
                heading="Your Partner in Digital Growth, Not Just a Service Provider  "
                description="At DevNexus Solutions, we go beyond just delivering websites or campaigns to deliver the best possible results.  We understand your brand goals and craft tailor-made solutions that drive growth."
              />
              
              <AboutDevnexus />
              <OurValues />
              <FoundersSection />
               <WhatWeDo />
                <Slider
                    title="Driving Brand Excellence"
                    subtitle="We deliver Global IT Services to businesses ranging from startups to global enterprises"
                    brands={brandLogos}
                  />
             
    </div>
  )
}
