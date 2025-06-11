// components/FoundersSection.tsx

import Image from 'next/image';

const FoundersSection = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-medium text-[#00357A] mb-10">
        Led by <span className="font-bold text-[#00357A]">Two Young Entrepreneurs</span>, the company is driven by <br />
        energy, enthusiasm, and a hunger for growth
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Founder 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-[350px]">
          <div className="w-full h-[400px] relative rounded-md overflow-hidden mb-4">
            <Image
              src="/images/About/ankit.png" // Replace with correct path
              alt="Ankit Sureka"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#00357A]">Ankit Sureka</h3>
          <p className="text-sm text-[#727272] mb-3">CEO & Co-Founder</p>
          <p className="text-sm text-[#4C4C4C] text-left">
            Ankit Sureka is a technologist and a marketing strategist with digital growth expertise in SEO, brand positioning, and performance marketing. He oversees marketing operations and business development. Ankit is driven by a mission to help startups and businesses thrive in competitive digital landscapes through smart marketing and data-backed strategies.
          </p>
        </div>

        {/* Founder 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-[350px]">
          <div className="w-full h-[400px] relative rounded-md overflow-hidden mb-4">
            <Image 
            src="/images/About/archit.png"
              alt="Archit Sureka"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#00357A]">Archit Sureka</h3>
          <p className="text-sm text-[#727272]  mb-3">COO & Co-Founder</p>
          <p className="text-sm text-[#4C4C4C] text-left">
            Archit Sureka is a visionary tech entrepreneur with a passion for building scalable digital products. With a background in software development and project strategy, Archit brings deep technical insight and a growth-driven mindset to DevNexus Solutions. He leads the company digital transformation, ensuring that innovation, quality, and client satisfaction are at the core of every solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
