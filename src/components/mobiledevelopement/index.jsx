import React from "react";
import FaqSection from "../global/FaqSection";
import Slider from "../common/Slider";
import ExecutionSection from "../common/ExecutionSection";
import StatusCard from "../common/Status";
import { ProcessWeFollow } from "../common/ProcessWeFollow";
import { Banner } from "../global/Banner";
import Brand3 from "../../../public/cdn/images/brandslogo/Jindal.svg";
import Brand4 from "../../../public/cdn/images/brandslogo/Studio.svg";
import Brand5 from "../../../public/cdn/images/brandslogo/Rotunneling.svg";
import Brand6 from "../../../public/cdn/images/brandslogo/travel.svg";
import Brand7 from "../../../public/cdn/images/brandslogo/DCI.svg";
import Brand10 from "../../../public/cdn/images/brandslogo/SRE.svg";
import Brand11 from "../../../public/cdn/images/brandslogo/KG.svg";
import Brand12 from "../../../public/cdn/images/brandslogo/nano.svg";
import Brand14 from "../../../public/cdn/images/brandslogo/vize.svg";
import WhyChooseUsMobile from "./WhyChooseMobile";

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
    question: "What types of mobile apps do we develop?",
    answer:
      "At DevNexus Solutions, we are developing a wide range of mobile app, which are tailored to your business needs. Our expertise includes Native, app development , cross function app developement, progresive web app development, ecommerce web app development.",
  },
  {
    question:
      "Do we provide post-launch support for mobile app development services?",
    answer:
      "Yes, we are providing post-launch app services, and we are offering comprehensive post-launch support as a part of our mobile app development services. Once your app goes live we will continue to work with you to ensure app functionality. This includes bug fixes, regular updates to keep apps active, monitor the performance, and user enhancements. ",
  },
  {
    question:
      "What type of technologies do we use for Android app development?",
    answer:
      "At DevNexus Solutions, a Mobile app development company, we are using the latest and most reliable technologies for Android app development. Our major tech stack includes JAVA for native Android development. For cross-platform needs, we also leverage Flutter and React Native, which allow faster development across both devices.  ",
  },
  {
    question:
      "What programming languages do we use for iOS Mobile app development?",
    answer:
      "At DevNexus Solutions, for iOS mobile app development, we are primarily focused on Swift, Apple's modern and powerful programming language, which is specifically designed for iOS, macOS, and watchOS. For legacy projects or working with existing codebases, we are also using objective-C.",
  },
  {
    question: "Can you update or fix an existing iOS app?",
    answer:
      "Yes, At DevNexus Solutions, our team of experts can update or fix an existing iOS app. Whether your app needs a performance upgrade, bug fixes, UI/UX changes, or compatibility updates for the latest iOS version, we are here to help you.",
  },
];


export const MobileDevelopment = () => {
  return (
    <div>
      <Banner
        image="/cdn/images/mobile/MobileHero.mp4"
        overlayImage
        heading="Mobile App Development Services To Boost Your Business"
        description="DevNexus Solution delivers innovative, user-centeric and mobile-friendly applications to boost growth and engagement"
      />
      <StatusCard />
      <WhyChooseUsMobile />
      <ExecutionSection />
      <ProcessWeFollow />
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
