'use client'
import React, { useEffect, useState } from "react";
import BannerImage1 from "../../../public/cdn/images/Portfolio/PortfolioHeroSection.jpeg";
import CaseStudyCard from "./CaseStudy";
import { Banners } from "../global/NavBanners";

export const Portfolio = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://backend.devnexussolutions.com/api/all-upload');
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
        heading="From Ideas to Execution - Explore DevNexus Solutions Diverse Portfolio Work"
        description="Every project we deliver at DevNexus Solutions is a reflection of our commitment to innovation and performance. From dynamic websites to scalable platforms and intelligent digital strategies, our work solves actual problems."
      />
      <div className="">
        {products.map((study, index) => (
          <CaseStudyCard key={index} index={index} {...study} />
        ))}
      </div>
    </div>
  );
};
