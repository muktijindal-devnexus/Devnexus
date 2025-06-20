'use client'
import React, { useEffect, useState } from "react";
import BannerImage1 from "../../../public/cdn/images/Portfolio/PortfolioHeroSection.jpeg";
import CaseStudyCard from "./CaseStudy";
import { Banners } from "../global/NavBanners";

export const Portfolio = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('http://13.203.216.121:3002/api/all-upload');
      const data = await res.json();
      console.log(data?.data , 'product');
      setProducts(data?.data);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <Banners
        image={BannerImage1}
        overlayImage
        heading="From Idea to Execution - Explore DevNexus Solutions's Work"
        description="Every project we deliver at DevNexus Solutions is a reflection of our commitment to innovation, performance. From dynamic websites to scalable platforms and intelligent digital strategies our work solves actual problems."
      />
      <div className="">
        {products.map((study, index) => (
          <CaseStudyCard key={index} index={index} {...study} />
        ))}
      </div>
    </div>
  );
};
