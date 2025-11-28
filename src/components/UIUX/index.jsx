import React from "react";
import { Banner } from "../global/Banner";
import StatusCard from "../common/Status";
import UIDesignTechnologies from "./Core";
import { MainDevnexus } from "./MainDevnexus";
import DesignProcess from "./DesignProcess";
import Slider from "../common/Slider";
import { WhyUIUX } from "./WhyUIUX";
import FaqSection from "../global/FaqSection";
import Brand3 from "../../../public/cdn/images/brandslogo/Jindal.svg";
import Brand4 from "../../../public/cdn/images/brandslogo/Studio.svg";
import Brand5 from "../../../public/cdn/images/brandslogo/Rotunneling.svg";
import Brand6 from "../../../public/cdn/images/brandslogo/travel.svg";
import Brand7 from "../../../public/cdn/images/brandslogo/DCI.svg";
import Brand10 from "../../../public/cdn/images/brandslogo/SRE.svg";
import Brand11 from "../../../public/cdn/images/brandslogo/KG.svg";
import Brand12 from "../../../public/cdn/images/brandslogo/nano.svg";
// import Brand13 from '../../../public/images/brandslogo/cafe.svg';
import Brand14 from "../../../public/cdn/images/brandslogo/vize.svg";

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
    question: "Why is UI/UX design important for product development?",
    answer:
      "Good UI/UX enhances usability, engagement, and customer satisfaction. DevNexus Solutions creates intuitive, user-friendly designs that delight users and improve product adoption.",
  },
  {
    question: "What benefits will I get from UI/UX design?",
    answer:
      "You get clear navigation, visually appealing interfaces, improved user flow, and higher conversions. DevNexus Solutions ensures every design improves both experience and performance.",
  },
  {
    question: "Can you design for both websites and apps?",
    answer:
      "Yes. DevNexus Solutions designs responsive, user-friendly interfaces for websites, mobile apps, dashboards, SaaS products, and enterprise systems.",
  },
  {
    question: "How long does UI/UX design take?",
    answer:
      "Most UI/UX design projects take 1–3 weeks depending on the number of screens and overall complexity. DevNexus Solutions ensures timely and smooth delivery.",
  },
  {
    question: "Do you redesign existing interfaces?",
    answer:
      "Yes. DevNexus Solutions redesigns outdated or low-performing interfaces to improve usability, visual appeal, conversions, and overall user engagement.",
  },
  {
    question: "Will I receive editable design files?",
    answer:
      "Yes. DevNexus Solutions provides fully editable Figma or Adobe XD files for easy implementation and future updates.",
  },
];


export const UIUXComponent = () => {
  return (
    <div>
      <Banner
        image="/cdn/images/UUIX/UIUXHero.mp4"
        overlayImage
        heading="Upgrade Your Brand with Exceptional UI/UX Design"
        description="Thoughtful design and user-based strategies enhances the user experience"
      />
      <StatusCard />
      <UIDesignTechnologies />
      <MainDevnexus />
      <DesignProcess />
      
      <WhyUIUX />
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
  );
};
