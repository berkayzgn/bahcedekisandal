import { useState, useEffect } from 'react';

/**
 * Custom hook for carousel auto-play with pause/resume functionality
 * @param {Array} items - Array of items to carousel through
 * @param {number} autoPlayInterval - Interval in ms for auto-play (default: 3000)
 * @param {number} pauseResumeDelay - Delay before resuming auto-play (default: 10000)
 * @returns {Object} Carousel state and control functions
 */
export const useCarousel = (
  items,
  autoPlayInterval = 3000,
  pauseResumeDelay = 5000
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [resumeTimer, setResumeTimer] = useState(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const pauseAutoPlay = () => {
    setIsAutoPlay(false);
    
    // Clear existing timer if any
    if (resumeTimer) {
      clearTimeout(resumeTimer);
    }

    // Set new timer for resume
    const newTimer = setTimeout(() => {
      setIsAutoPlay(true);
    }, pauseResumeDelay);

    setResumeTimer(newTimer);
  };

  const setFadingValue = (value) => {
    setIsFading(value);
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        goToNext();
        setIsFading(false);
      }, 350);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, autoPlayInterval, items.length]);

  return {
    currentIndex,
    isFading,
    isAutoPlay,
    goToNext,
    goToPrevious,
    goToIndex,
    pauseAutoPlay,
    setFading: setFadingValue,
  };
};
