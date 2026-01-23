import React from 'react';

function CarouselNavigationButtons({ onPrev, onNext, isVisible, ariaLabelPrev = 'Previous item', ariaLabelNext = 'Next item' }) {
  if (!isVisible) {
    return null;
  }

  const buttonClass = "flex justify-center items-center px-4 py-2 rounded-full bg-brand-lavender text-black hover:bg-brand-lavender-dark";
  const iconClass = "w-5 h-4";

  return (
    <div className="flex space-x-4">
      <button
        onClick={onPrev}
        className={buttonClass}
        aria-label={ariaLabelPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className={iconClass}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        className={buttonClass}
        aria-label={ariaLabelNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className={iconClass}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5 15.75 12l-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default CarouselNavigationButtons;
