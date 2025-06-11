// components/HiringSection.jsx
import React from 'react';
import Image from 'next/image';

const teamImages = [
  { id: 1, src: '/images/career/team1.png', alt: 'Team Member 1' },
  { id: 2, src: '/images/career/team2.png', alt: 'Team Member 2' },
  { id: 3, src: '/images/career/team3.png', alt: 'Team Member 3' },
];

const HiringSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 text-white bg-[#335D95] p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We are Hiring!</h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed">
              At DevNexus Solutions, we offer a dynamic and expansive learning environment. Our
              team is encouraged to continuously grow their skills through ongoing support and
              mentorship. We value fresh ideas and proactive initiatives, setting ourselves apart
              through a culture that empowers us to{' '}
              <span className="font-semibold">Excel</span>,{' '}
              <span className="font-semibold">Innovate</span>, and{' '}
              <span className="font-semibold">Lead</span>.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#00357A]">Meet Our Team</h3>
          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-3 gap-6 justify-center">
              {teamImages.map(({ id, src, alt }) => (
                <div key={id} className="rounded-lg overflow-hidden h-80 w-90 relative">
                  <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
