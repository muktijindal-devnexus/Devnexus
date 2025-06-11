'use client';
import { useState } from 'react';
import DeveloperCard from './DeveloperCard';
import FilterButtons from './FilterButtons';

const DeveloperCarousel = ({
  developers = [],
  title = "Our Developers",
  cardsToShow = 2,
  multiSkillFilter = []
}) => {
  const [activeFilter, setActiveFilter] = useState(multiSkillFilter[0] || '');
  const [currentIndex, setCurrentIndex] = useState(0);

  const matchSkills = (skills, filter) => {
    if (!filter) return false;

    // For combined filters like "HTML5 / CSS3"
    if (filter.includes('/')) {
      return filter.split('/').some((f) => skills.includes(f.trim()));
    }

    return skills.includes(filter);
  };

  const getHeading = (filter) => {
    if (!filter || filter === multiSkillFilter[0]) {
      return title;
    }
    return `${title} - ${filter}`;
  };

  const filtered = developers.filter((dev) => matchSkills(dev.skills, activeFilter));
  const maxIndex = Math.max(0, filtered.length - cardsToShow);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const visibleDevelopers = filtered.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="text-center px-4">
      <h2 className="text-2xl font-semibold text-[#00357A] mb-4">
        {getHeading(activeFilter)}
      </h2>

      <FilterButtons
        filters={multiSkillFilter}
        active={activeFilter}
        setActive={(filter) => {
          setActiveFilter(filter);
          setCurrentIndex(0); // Reset carousel index
        }}
      />

      <div className="flex items-center justify-center gap-6 mt-6">
        {/* Left Arrow */}
        <button
          className={`text-2xl text-[#00357A] ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={prev}
          disabled={currentIndex === 0}
        >
          {'<'}
        </button>

        {/* Developer Cards */}
        <div className="flex gap-6">
          {visibleDevelopers.length > 0 ? (
            visibleDevelopers.map((dev, idx) => (
              <DeveloperCard key={idx} {...dev} />
            ))
          ) : (
            <p className="text-gray-500">No developers match this filter.</p>
          )}
        </div>

        {/* Right Arrow */}
        <button
          className={`text-2xl text-[#00357A] ${
            currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={next}
          disabled={currentIndex >= maxIndex}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default DeveloperCarousel;
