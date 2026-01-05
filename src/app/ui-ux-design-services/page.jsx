import React from "react";
import { UIUXComponent } from "@/components/UIUX";

export const metadata = {
  title: "UI/UX Design and Development Services",
  description:
    "Transform your online presence with expert web, mobile, and UI/UX design services. Unlock new digital growth for your business with DevNexus solutions.",
  alternates: {
    canonical: "https://devnexussolutions.com/ui-ux-design-services",
  },
      openGraph: {
      title: "UI/UX Design and Development Services - DevNexus Solutions",
       description: "Transform your online presence with expert web, mobile, and UI/UX design services. Unlock new digital growth for your business with DevNexus solutions.",
      url: "https://devnexussolutions.com/ui-ux-design-services",
      siteName: "DevNexus Solutions",
      type: "article",
      locale: "en_IN",
    },
  keywords: [
    " ui ux designing",
    " user interface design",
    " ux design and ui design",
    " digital marketing ux design",
    " mobile app interface design",
    " web user interface design",
    " user interface",
    " UI UX design services",
    " UI UX web development company",
    " UI UX development service provider",
    " UI UX design & development company",
    " UI UX design development company",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is UI/UX design important for product Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Good UI/UX improves usability, engagement, and satisfaction. DevNexus Solutions creates intuitive designs that delight users.",
      },
    },
    {
      "@type": "Question",
      name: "What benefits will I get from UI/UX design?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You get clear navigation, attractive interfaces, better user flow, and higher conversions with DevNexus Solutions.",
      },
    },
  ],
};

export default function UIUX() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <UIUXComponent />
    </>
  );
}
