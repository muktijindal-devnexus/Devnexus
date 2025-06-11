'use client';
import { useState, useEffect } from 'react';
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
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const matchSkills = (skills, filter) => {
    if (!filter) return false;
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

  // Responsive cards display
  const getCardsToShow = () => {
    if (windowWidth < 640) return 1; // Mobile
    if (windowWidth < 1024) return 2; // Tablet
    return cardsToShow; // Desktop (default)
  };

  const filtered = developers.filter((dev) => matchSkills(dev.skills, activeFilter));
  const currentCardsToShow = getCardsToShow();
  const maxIndex = Math.max(0, filtered.length - currentCardsToShow);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const visibleDevelopers = filtered.slice(currentIndex, currentIndex + currentCardsToShow);

  return (
    <div className="text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#00357A] mb-4">
        {getHeading(activeFilter)}
      </h2>

      <FilterButtons
        filters={multiSkillFilter}
        active={activeFilter}
        setActive={(filter) => {
          setActiveFilter(filter);
          setCurrentIndex(0);
        }}
      />

      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-6">
        {/* Left Arrow - Hidden on mobile when at start */}
        <button
          className={`text-2xl text-[#00357A] hover:text-[#002147] transition-colors ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed invisible sm:visible' : ''
          }`}
          onClick={prev}
          disabled={currentIndex === 0}
          aria-label="Previous developer"
        >
          {'<'}
        </button>

        {/* Developer Cards */}
        <div className="flex gap-3 sm:gap-4 md:gap-6  snap-x snap-mandatory w-full sm:w-auto px-2 sm:px-0">
          {visibleDevelopers.length > 0 ? (
            visibleDevelopers.map((dev, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 snap-center w-[calc(100%-1rem)] sm:w-auto"
              >
                <DeveloperCard {...dev} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 py-8 w-full">No developers match this filter.</p>
          )}
        </div>

        {/* Right Arrow - Hidden on mobile when at end */}
        <button
          className={`text-2xl text-[#00357A] hover:text-[#002147] transition-colors ${
            currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed invisible sm:visible' : ''
          }`}
          onClick={next}
          disabled={currentIndex >= maxIndex}
          aria-label="Next developer"
        >
          {'>'}
        </button>
      </div>

      {/* Mobile indicators - only show when filtered.length > 1 */}
      {windowWidth < 640 && filtered.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: filtered.length }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full ${
                idx === currentIndex ? 'bg-[#00357A]' : 'bg-gray-300'
              }`}
              aria-label={`Go to developer ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DeveloperCarousel;