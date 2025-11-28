import React from "react";
import { SeoMarketing } from "./SeoMarketing";
import Slider from "../common/Slider";
import { DevNexusMarketingBenefits } from "./DevNexusMarketingBenefits ";

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

import StatusCard from "../common/Status";
import FaqSection from "../global/FaqSection";
import { DigitalMarketingServices } from "./DigitalMarketingServices ";

const faqData = [
  {
    question: "Why should I use digital marketing for my business?",
    answer:
      "Digital marketing increases online visibility, attracts targeted customers, and grows revenue. DevNexus Solutions helps businesses reach their audience effectively.",
  },
  {
    question: "What benefits will I get from digital marketing services?",
    answer:
      "You get more traffic, higher engagement, lead generation, better brand recognition, and measurable growth with DevNexus Solutions.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Results vary by strategy, but most clients see measurable improvements in 3–6 months with consistent campaigns by DevNexus Solutions.",
  },
  {
    question: "Which digital marketing strategies are best for my business?",
    answer:
      "DevNexus Solutions customizes strategies using SEO, social media, PPC, content marketing, and email campaigns based on your business goals.",
  },
  {
    question: "Why is digital marketing important for growing my business?",
    answer:
      "It builds online presence, attracts potential customers, and drives sales. DevNexus Solutions ensures your business stays competitive digitally.",
  },
  {
    question: "Can digital marketing work for small businesses or startups?",
    answer:
      "Yes, DevNexus Solutions provides tailored, cost-effective strategies that deliver maximum ROI for small businesses and startups.",
  },
];



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

export const DigitalMarketing = () => {
  return (
    <div>
      <StatusCard />
       <DevNexusMarketingBenefits />
       <DigitalMarketingServices />
      <SeoMarketing />
       <Slider
          title="Driving Brand Excellence"
          subtitle="We deliver global IT and digital marketing services to startups, small businesses, and enterprises worldwide"
          brands={brandLogos}
        />  
     

         <FaqSection
      faqs={faqData}
      title="  Frequently Asked Questions (FAQs)"
      subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
    />
    </div>
  );
};
