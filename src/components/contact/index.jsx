import React from "react";
import BannerImage1 from "../../../public/cdn/images/contact/Contactus.jpeg";
import ContactSection from "./ContactSection";
import IndustryExperience from "./GlobalSection";
import { Banners } from "../global/NavBanners";
import InstagramCarousel from "../global/Instagram";
import Map from "./Map";

export const ContactComponents = () => {
  return (
    <div>
      <Banners
        image={BannerImage1}
        overlayImage
        heading="Ready to Transform Your Business? Let's Talk Now!"
        description="Have a vision for your brand? Let's make it happen together. At DevNexus Solutions, we are here to understand your business and deliver custom digital solutions that drive actual results"
      />
      <div className="min-h-screen p-10 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#00357A]">
          Our Office Location
        </h1>
        <Map />
      </div>

      {/* <ContactSection /> */}
      <IndustryExperience />
      <InstagramCarousel />
    </div>
  );
};
