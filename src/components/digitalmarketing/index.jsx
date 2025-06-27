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

const faqData  = [
  {
    question: 'Why do businesses need digital marketing services?',
    answer:
      'Every business wants to grow and capture the majority of the market value in its niche; this is where digital marketing services play a crucial role. With most consumers, products, and services available online, digital marketing services help increase visibility and generate high-quality leads. It offers measurable results, and it is cost-effective. On the other hand, with digital marketing techniques, it is easy to adopt market trends.',
  },
  {
    question: 'How much does it cost to hire a digital marketing agency near me?',
    answer:
    'The cost of hiring a "digital marketing service near me" can vary widely, depending on the services you are looking for. Business goals, etc.'
  },
  {
    question:'What makes DevNexus Solutions the best digital marketing company?',
    answer:
    'DevNexus Solutions stands out as the best digital marketing company for several reasons, including its result-driven approach and tailored solutions tailored to meet your business needs.. We combine deep industry expertise with top-class tools to deliver the results clients want. We offer solutions tailored to meet all your business needs. Our team focuses on measurable outcomes, such as lead generation, improved ROI, and brand growth, while maintaining transparency Through Regular reporting and clear communication.',
  },
  {
    question: 'Which digital marketing channels are most result-oriented for B2B?',
    answer:
      'For B2B companies, the most workable digital marketing techniques are those that can deliver longer sales cycles. Include-LinkedIn Marketing SEO Pay Per Click Meta Ads E-Mail Marketing Content Writing Video Marketing',
  },
  {
    question: 'I wish to market my business. How should I get started?',
    answer:
    'Lets connect. Based on your business domain, marketing preferences, target achievement, and available budget, we will develop a tailor-made plan. Depending on various cases, some businesses may prefer comprehensive social media strategies or web UX changes; others may call for a more formal link building or reputation management. E-commerce also prefers Paid Ads. Depending on how and how much you would like to enroll, we will ensure that your strategy for getting started with the services is tailored to your needs.',
  },
    {
    question: 'How much does it cost to hire a digital marketing agency?',
    answer:  'The cost of hiring a "digital marketing service" can vary widely, depending on the services you are looking for, business goals, etc. Our monthly services start at $400 and range up to $5,000 (plus ad fees). Packages can be cheaper upon a 3-6 month commitment.'
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
          title="Driving Growth To The Brands."
          subtitle="We deliver Global IT Services to brands of all sizes"
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
