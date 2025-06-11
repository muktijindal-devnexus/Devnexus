import { Banner } from "@/components/global/Banner";
import React from "react";
import { DigitalMarketing } from "@/components/digitalmarketing";


const DigitalMarketingPage = () => {
  return (
    <div>
      <Banner
        image='/images/digital/digital.mp4'
        overlayImage
        heading=" Digital Marketing Services To Boost Your Business Growth "
        description="Let the Right Digital Marketing Company Uplift Your Web Traffic, Generate More Leads and Sales for Your Business. "
      />
      <DigitalMarketing />
    </div>
  );
};
export default DigitalMarketingPage;
