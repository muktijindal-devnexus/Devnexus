import React from 'react'
import { Banner } from '../global/Banner'
import StatusCard from '../common/Status'
import AIServiceSection from './AiServices'
import FaqSection from '../global/FaqSection'
import WhyChooseSection from './WhyChooseSection'
import BusinessGrowthSlider from './BusinessGrowthSlider'
import Slider from '../common/Slider'
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


const faqData = [
  {
    question: "Why should I use AI services like chatbots or API integration?",
    answer:
      "AI chatbots and API integrations automate routine tasks, improve customer support, and streamline business operations. DevNexus Solutions provides tailored AI solutions that enhance efficiency and deliver better customer experiences.",
  },
  {
    question: "What benefits will I get from AI API integration and AI solutions?",
    answer:
      "You get seamless data flow, smarter decision-making, personalized user experiences, and faster operational workflows. DevNexus Solutions helps businesses unlock the full potential of intelligent automation.",
  },
  {
    question: "How long will it take to see results from AI services?",
    answer:
      "Automation and workflow improvements can be immediate. For measurable performance insights and ROI, most businesses see results within a few weeks of implementing DevNexus Solutions’ AI systems.",
  },
  {
    question: "Why is AI important for modern businesses?",
    answer:
      "AI reduces manual effort, minimizes errors, accelerates operational speed, and improves customer interactions. DevNexus Solutions leverages advanced AI tools to help your business stay competitive in a fast-evolving digital landscape.",
  },
  {
    question: "Can AI services improve customer support for my business?",
    answer:
      "Yes. AI-powered chatbots provide instant 24/7 support, handle FAQs, resolve issues, and improve customer engagement. DevNexus Solutions builds intelligent support systems that elevate your customer experience.",
  },
  {
    question: "Can AI and API integrations scale with my growing business?",
    answer:
      "Absolutely. DevNexus Solutions builds scalable AI systems and integrations designed to grow with your data, customer base, and long-term business requirements.",
  },
];



export const AiTech = () => {
  return (
    <div>
            <Banner
                     image='/cdn/images/ai/ai.mp4'
                     overlayImage
                     heading=" Transform your Business with Artificial Intelligence Development Services"
                     description="At DevNexus Solutions, we accelerate your business through strategic AI software development services."
                   />
                   <StatusCard />
                   <AIServiceSection />
                   <WhyChooseSection />
                   <BusinessGrowthSlider /> 
                    <Slider
                           title="Driving Brand Excellence"
                           subtitle="We deliver Global IT Services to businesses ranging from startups to global enterprises"
                           brands={brandLogos}
                         />

                   <FaqSection
        faqs={faqData}
        title="  Frequently Asked Questions (FAQs)"
        subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
      />
    </div>
  )
}
