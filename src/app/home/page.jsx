
import React from "react";
import LandingComponent from "@/components/landingpage";

export const metadata = {
  title: "DevNexus Solutions | Digital Transformation Consultant",
  description: "DevNexus provides digital solutions to startups, enterprises and other types of businesses. Partner with us to unlock digital possibilities. Visit us.",
  alternates: {
    canonical: "https://devnexussolutions.com/",
  },
};

const LandingPage = () => {
  return (
    <div className="">
    <LandingComponent />
    </div>
  );
};

export default LandingPage;
