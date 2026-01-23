import { useRef, useState } from 'react';

export default function MobileCardCarousel({
  items = [],
  dotColorClass = 'bg-brand-lavender',
  ariaLabelPrefix = 'Show item',
  renderItem,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  if (!items.length) {
    return null;
  }

  const clampIndex = (index) => Math.min(Math.max(index, 0), items.length - 1);

  const goToIndex = (index) => {
    setIsDragging(false);
    setDragOffset(0);
    setActiveIndex(clampIndex(index));
  };

  const handleSwipe = (direction) => {
    setActiveIndex((prev) => {
      if (direction === 'left') {
        return clampIndex(prev + 1);
      }
      return clampIndex(prev - 1);
    });
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleTouchMove = (event) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    if (!isDragging) {
      if (Math.abs(deltaX) < 10) return;
      if (Math.abs(deltaX) < Math.abs(deltaY)) {
        touchStartX.current = null;
        touchStartY.current = null;
        return;
      }
      setIsDragging(true);
    }

    event.preventDefault();
    setDragOffset(deltaX);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;
    setIsDragging(false);
    setDragOffset(0);
    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    handleSwipe(deltaX < 0 ? 'left' : 'right');
  };

  return (
    <div className="md:hidden">
      <div className="rounded-2xl border border-white/10 bg-white/5">
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex"
            style={{
              transform: `translateX(calc(${dragOffset}px + ${-activeIndex * 100}%))`,
              transition: isDragging ? 'none' : 'transform 300ms ease',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {items.map((item, index) => (
              <div key={`carousel-card-${index}`} className="min-w-full">
                <div className="p-5">
                  {renderItem ? (
                    renderItem(item, index)
                  ) : (
                    <>
                      <p className="font-semibold text-white mb-2">{item?.title}</p>
                      <p className="text-sm text-gray-300">{item?.detail}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {items.map((_, index) => (
          <button
            key={`carousel-dot-${index}`}
            type="button"
            aria-label={`${ariaLabelPrefix} ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? `w-7 ${dotColorClass}` : 'w-2 bg-white/30'
            }`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
