import React from "react";
import { Banners } from "../global/NavBanners";
import OurProcess from "./Process";
import ServicesSection from "./ServicesSection";
import BannerImage from '../../../public/images/services/servicesHeroSection.jpg'

export const ServiceComponent = () => {
  return (
    <div>
      <Banners
        image={BannerImage}
        overlayImage
        heading="Our Services"
        description="At DevNexus Solutions, we are offering a full
                                       range of IT services that are designed to upgrade your brand and drive business growth."
      />
      <ServicesSection />
      <OurProcess />
    </div>
  );
};
