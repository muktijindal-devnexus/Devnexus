import React from "react";
import ServiceGrid from "./Innovation";
import { OfferedServices } from "../common/OfferedServices";
import Technologies from "./Technologies";
import { OurProcess } from "./OurProcess";
import { Contact } from "./ContactBanner";
import BrandSlider from "../global/BrandSlider";
import { Product } from "./Product";
import { Banner } from "./Banner";
import { KeyFacts } from "./KeyFacts";
import { Testimonial } from "../global/Testimonial";
import InstagramCarousel from "../global/Instagram";
import { IndustriesWorked } from "./IndustriesWorked";
import FaqSection from "../global/FaqSection";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "Devnexus Solutions is a digital marketing service provider, web development, mobile app development, and blockchain development company. We offer UI/UX design, graphic design services, and custom blockchain development as well.",
  },
  {
    question:
      "Do you develop custom mobile apps for businesses?",
    answer:
    "Yes, as a a mobile app development company, Devnexus Solutions designs and developes fully customized iOS and Android apps tailored to your business goals and user needs."
      // 'DevNexus Solutions offers a wide range of services. We develop web and mobile applications, providing cloud & DevOps assistance, UI/UX design, data analysis, and AI integration —all strategically crafted to accelerate your digital transformation.',
  },
  {
    question:
      " Do you offer CRM development solutions?",
    answer:
    "Yes, Devnexus Solutions specializes in custom blockchain development, helping businesses deploy secure and scalable blockchain solutions.",
      // "Digital transformation is essential for all businesses today as it enhances operational efficiency, improves the customer experience, and enables companies to make data-driven decisions. DevNexus Solutions helps your brand grow and develop through sophisticated IT services.",
  },
  {
    question:
      "Can you improve my website and online presence?",
    answer:
    "Yes, as a web development and digital marketing company, Devnexus Solutions optimizes websites, implements SEO strategies, and runs targeted campaigns to boost visiblity and generate quality leads."
      // "At DevNexus Solutions, our skilled team begins by learning about your brand's specific challenges and objectives. We craft custom digital solutions specifically designed for your business's targeted results, such as enhancing workflows, connecting with customers, or expanding your online presence.",
  },
  {
    question: "Do you provide UI/UX and graphic design services?",
    answer:
      "Yes, Devnexus Solutions offers UI/UX and graphic design services that deliver visually appealing and user-friendly designs to improve engagement and strengthen brand identity.",
  },
    {
    question: "How can I get started with my project?",
    answer:
    "You can submit your project idea or requirements through our contact form or call us directly. We will provide a detailed plan, timeline, and roadmap to begin the project."
      // "Absolutely Yes, DevNexus Solutions collaborates with various businesses. We offer tailored digital solutions and affordable pricing structured to help startups, SMEs, and larger companies.",
  },

      {
    question: "Are your services suitable for startups and small businesses?",
    answer:
    "Yes, Devnexus Solutions offers affordable and scalable solutions in web development, mobile app development, and digital marketing, making us a great fit for startups and small businesses."
      // "Absolutely Yes, DevNexus Solutions collaborates with various businesses. We offer tailored digital solutions and affordable pricing structured to help startups, SMEs, and larger companies.",
  },

        {
    question: "Do you provide post-project support?",
    answer:
    "Yes, Devnexus Solutions provides ongoing maintenance, updates, and support to ensure your web, mobile, or blockchain solution continous to operate smoothly after launched."
      // "Absolutely Yes, DevNexus Solutions collaborates with various businesses. We offer tailored digital solutions and affordable pricing structured to help startups, SMEs, and larger companies.",
  },

];

const LandingComponent = () => {
  return (
    <div>
      <Banner  />
      <ServiceGrid />
      <OfferedServices />
      <Technologies />
      <OurProcess />
      <KeyFacts />
      <Contact />
      <Testimonial />
      <BrandSlider />
      <IndustriesWorked />
      <Product />
      <InstagramCarousel />
      <div className="bg-white">
  <FaqSection
        faqs={faqData}
        title="  Frequently Asked Questions (FAQs)"
        subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
      />
      </div>
            
    </div>
  );
};

export default LandingComponent;
