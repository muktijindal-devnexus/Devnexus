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
    question: ". How Can AI Chatbot Development Services Benefit Your Business?",
    answer:
      "AI chatbots offer transformative value by enhancing customer engagement, delivering round-the-clock support, and significantly reducing operational costs. They automate repetitive tasks, streamline communication, and provide personalized interactions, leading to improved customer satisfaction, stronger brand loyalty, and increased efficiency. Whether it's handling FAQs, qualifying leads, or supporting transactions, AI chatbots empower businesses to scale smarter and serve faster.",
  },
  {
    question:
      "Where Can AI Chatbots Be Deployed?",
    answer:
      'AI chatbots can be seamlessly deployed across multiple platforms—including websites, mobile apps, social media, messaging apps, e-commerce sites, and CRM systems—to deliver consistent, real-time support and personalized user experiences wherever your audience engages.',
  },
  {
    question:
      "How Do You Ensure AI Development Services Align with My Business Needs?",
    answer:
      "At DevNexus Solutions, we begin with an in-depth consultation to understand your business objectives, challenges, and operational landscape. Based on this discovery phase, our AI specialists design and implement customized models and intelligent workflows that align precisely with your goals, ensuring seamless integration, measurable impact, and long-term scalability.",
  },
  {
    question:
      "What Is the Typical Timeline for AI Development Projects?",
    answer:
      "The timeline for AI development projects varies based on complexity, scope, and integration requirements. Smaller projects—such as chatbot development or basic automation—can take 2 to 6 weeks, while larger, enterprise-grade solutions involving custom models, data pipelines, and system integration may span 3 to 6 months or more. A thorough discovery phase helps define realistic milestones and ensures timely delivery.",
  },
  {
    question: "How Do You Handle Data Privacy and Security in AI Projects?",
    answer:
      "At DevNexus Solutions, we prioritize data privacy and security at every stage of AI development. Our team follows industry best practices and regulatory standards to safeguard sensitive information—implementing robust encryption, access controls, and anonymization techniques. From data collection to model deployment, we ensure data integrity, confidentiality, and compliance, empowering clients with secure, trustworthy AI solutions.",
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
