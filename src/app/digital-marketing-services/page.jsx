import { Banner } from "@/components/global/Banner";
import React from "react";
import { DigitalMarketing } from "@/components/digitalmarketing";

export const metadata = {
  title: "#1 Best Digital Marketig Services  - DevNexus Solutions",
  description: "Get the best digital marketing services with DevNexus Solutions to grow your online presence, drive organic traffic, increase ROI. Get a free quote now.",
  alternates: {
    canonical: "https://devnexussolutions.com/digital-marketing-services",
  },
};



const DigitalMarketingPage = () => {
  return (
    <div>
      <Banner
        image='/cdn/images/digital/digital.mp4'
        overlayImage
        heading=" Digital Marketing Services To Boost Your Business Growth "
        description="Let the Right Digital Marketing Company Uplift Your Web Traffic and Generate More Leads and Sales for Your Business."
      />
      <DigitalMarketing />
    </div>
  );
};
export default DigitalMarketingPage;
