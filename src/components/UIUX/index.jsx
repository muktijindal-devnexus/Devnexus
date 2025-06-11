import React from "react";
import { Banner } from "../global/Banner";
import StatusCard from "../common/Status";
import UIDesignTechnologies from "./Core";
import { MainDevnexus } from "./MainDevnexus";
import DesignProcess from "./DesignProcess";
import Slider from "../common/Slider";
import { WhyUIUX } from "./WhyUIUX";
import FaqSection from "../global/FaqSection";
import Brand3 from '../../../public/images/brandslogo/Jindal.svg';
import Brand4 from '../../../public/images/brandslogo/Studio.svg';
import Brand5 from '../../../public/images/brandslogo/Rotunneling.svg';
import Brand6 from '../../../public/images/brandslogo/travel.svg';
import Brand7 from '../../../public/images/brandslogo/DCI.svg';
import Brand10 from '../../../public/images/brandslogo/SRE.svg';
import Brand11 from '../../../public/images/brandslogo/KG.svg';
import Brand12 from '../../../public/images/brandslogo/nano.svg';
import Brand13 from '../../../public/images/brandslogo/cafe.svg';
import Brand14 from '../../../public/images/brandslogo/vize.svg';

const brandLogos = [
  Brand3.src,
  Brand4.src,
  Brand5.src,
  Brand6.src,
  Brand7.src,
  Brand10.src,
  Brand11.src,
  Brand12.src,
  Brand13.src,
  Brand14.src,
];

const faqData = [
  {
    question: "Why UI UX designer important for my business?",
    answer:
    'A UI UX designer plays an important role in shaping how users feel and observe your website, app or other digital products. They make sure that ui ux platforms are not only visually appealing but also intuitive, user friendly. After focusing on user behavior, design flow, our experience team will give you a  solution for improving customer satisfaction, increasing conversion etc. ',
  },
  {
    question:
      "Will I be involved in the UI and UX design process?",
    answer:
    'At every step of the ui and ux design process, your insight and feedback will play a key role. From initial session and wireframe reviews to design approvals and final review we are working collaboratively with you to ensure that work quality of end products is not compromised and product alignment with your brand, goals, user needs. ',
  },
  {
    question:
      "How is your UI and UX design process structured?",
    answer:
    'At DevNexus Solutions our UI and UX design process is structured and user centric to give a seamless experience. Our process begins with discovery and research where we understand your brand vision and potential audience, then we define user persona and map their journey to indemnify problem points and opportunities. Then we come to the process of wireframe creation to lay out the structure and flow which is followed by different prototypes. Once the user flow is confirmed, then we move to the high quality visual appealing design according to your brand. Testing is also conducted at every step for the refinements.',
  },
  {
    question:
      "Do you redesign existing websites/apps?",
    answer:
    'Yes, we are offering UI UX redesign services to improve usability and on the basis of feedback and analytics. Whether your current design looks outdated, or does not convert well, our team of experts will start analysing its performance, user feedback and problem points.',
  },
  {
    question: "What tools are you using for UI UX design?",
    answer:
      'At DevNexus our team of ui us designer are working on industry standard tools like Figma, Zeplin, Sketch, Adobe XD, etc',
  },
];


export const UIUXComponent = () => {
  return (
    <div>
      <Banner
        image='/images/UUIX/UIUXHero.mp4'
        overlayImage
        heading="Upgrade Your Brand with Exceptional UI UX Design and Development Services"
        description="At DevNexus solutions we believe that thought full design and user based strategies increase the user experience. Our UI UX design services are crafted to convert your digital product into an engaging,
         visually appealing stuff, which will connect your audience very well. "
      />
      <StatusCard />
      <UIDesignTechnologies />
      <MainDevnexus />
      <DesignProcess />
            <Slider
                          title="Driving Growth To The Brands."
                          subtitle="We deliver Global IT Services to brands of all sizes"
                          brands={brandLogos}
                        />
      <WhyUIUX />
       <FaqSection
        faqs={faqData}
        title="  Frequently Asked Questions (FAQs)"
        subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
      />
    </div>
  );
};
