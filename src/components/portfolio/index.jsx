'use client';

import React, { useEffect, useState } from "react";
import BannerImage1 from "../../../public/cdn/images/Portfolio/PortfolioHeroSection.jpeg";
import CaseStudyCard from "./CaseStudy";
import { Banners } from "../global/NavBanners";

// Skeleton Loader
const MirrorSkeleton = () => (
  <div className="animate-pulse flex flex-col lg:flex-row items-center gap-10 w-full mb-10">
    <div className="flex-1 w-full h-[300px] bg-gray-200 rounded-lg" />
    <div className="flex-1 space-y-4">
      <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto lg:mx-0" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
      <div className="h-4 bg-gray-200 rounded w-full mx-auto" />
      <div className="flex gap-4 mt-4">
        <div className="h-8 w-32 bg-gray-300 rounded-md" />
        <div className="h-8 w-32 bg-gray-300 rounded-md" />
      </div>
    </div>
  </div>
);

export const Portfolio = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://backend.devnexussolutions.com/api/all-upload', {
          cache: 'no-store',
          next: { revalidate: 0 },
        });
        const data = await res.json();
        setProducts(data?.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <Banners
        image={BannerImage1}
        overlayImage
        heading="From Ideas to Execution - Explore DevNexus Solutions Diverse Portfolio"
        description="Every project we deliver at DevNexus Solutions is a reflection of our commitment to innovation and performance. From dynamic websites to scalable platforms and intelligent digital strategies, our work solves actual problems."
      />

      <div className="px-4 md:px-20 py-10 space-y-10">
        {loading
          ? Array.from({ length: 3 }).map((_, idx) => <MirrorSkeleton key={idx} />)
          : products.map((study, index) => (
              <CaseStudyCard key={index} index={index} {...study} />
            ))}
      </div>
    </div>
  );
};
