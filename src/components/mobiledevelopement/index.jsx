import React from "react";
import FaqSection from "../global/FaqSection";

import WhyChooseUs from "../common/WhyChooseUs";
import Slider from "../common/Slider";
import ExecutionSection from "../common/ExecutionSection";
import StatusCard from "../common/Status";
import { ProcessWeFollow } from "../common/ProcessWeFollow";
import { Banner } from "../global/Banner";
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
    question: "What types of mobile apps do you develop?",
    answer:
      "At DevNexus Solutions, we are developing a wide range of mobile app, which are tailored to your business needs. Our expertise includes",
  },
  {
    question:
      "Do you provide post-launch support for mobile app development services?",
    answer:
      "Yes, we are providing post-launch app services, and we are offering comprehensive post-launch support as a part of our mobile app development services. Once your app goes live we will continue to work with you to ensure app functionality. This includes bug fixes, regular updates to keep apps active, monitor the performance, and user enhancements. ",
  },
  {
    question:
      "What type of technologies do you use for Android app development?",
    answer:
      "At DevNexus Solutio,n a Mobile app development company, we are using the latest and most reliable technologies for Android app development. Our major tech stack includes JAVA for native Android development. For cross-platform needs, we also leverage Flutter and React Native, which allow faster development across both devices.  ",
  },
  {
    question:
      "What programming languages do you use for iOS Mobile app development?",
    answer:
      "At DevNexus, solutions for iOS mobile app development, we are primarily focused on Swift, Apple's modern and powerful programming language, which is specifically designed for iOS, macOS, and watchOS. For legacy projects or working with existing codebases, we are also using objective-C.",
  },
  {
    question: "Can you update or fix an existing iOS app?",
    answer:
      "Yes, DevNexus Solutions, our team of experts update or fix an existing iOS app. Whether your app needs a performance upgrade, bug fixes, UI/UX changes, or either compatibility updates for the latest iOS version, we are here to help you out.",
  },
];

export const MobileDevelopment = () => {
  return (
    <div>
      <Banner
        image="/images/mobile/MobileHero.mp4"
        overlayImage
        heading="Upgrade Your Brand with Exceptional UI UX Design and Development Services"
        description="Elevate user engagement through intuitive design and seamless digital experiences."
      />
      <StatusCard />
      <WhyChooseUs />
      <ExecutionSection />
        <Slider
                          title="Driving Growth To The Brands."
                          subtitle="We deliver Global IT Services to brands of all sizes"
                          brands={brandLogos}
                        />
      <ProcessWeFollow />
      <FaqSection
        faqs={faqData}
        title="  Frequently Asked Questions (FAQs)"
        subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
      />
    </div>
  );
};
