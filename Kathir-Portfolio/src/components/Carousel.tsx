import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  itemsPerView?: number;
  gap?: number;
  showDots?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export function Carousel({
  children,
  itemsPerView = 3,
  gap = 16,
  showDots = true,
  showArrows = true,
  autoPlay = false,
  interval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex]);

  if (totalItems === 0) return null;

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="flex transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          gap: `${gap}px`,
        }}
      >
        {children.map((child, index) => (
          <div 
            key={index} 
            className="flex-shrink-0"
            style={{
              width: `calc(${100 / itemsPerView}% - ${(gap * (itemsPerView - 1)) / itemsPerView}px)`,
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {showArrows && totalItems > itemsPerView && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm hover:bg-black/75"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm hover:bg-black/75"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {showDots && totalItems > itemsPerView && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/30'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
