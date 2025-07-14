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
    </div>
  );
};

export default LandingComponent;
