'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Heart } from 'lucide-react';

interface VenueItem {
  id: string;
  name: string;
  imageUrl: string;
  date?: string;
  time?: string;
  location?: string;
  isEvent?: boolean;
}

interface VenueCarouselProps {
  title: string;
  subtitle: string;
  items: VenueItem[];
  type?: 'bars' | 'restaurants' | 'clubs' | 'events';
}

const VenueCarousel: React.FC<VenueCarouselProps> = ({ 
  title, 
  subtitle, 
  items, 
  type = 'bars'
}) => {
 
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [favorites, setFavorites] = useState<{[key: string]: boolean}>({});

  // Check if we can scroll left or right
  const checkScrollPosition = (): void => {
    if (!containerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
      
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, [items]);

  useEffect(() => {
    // Update scroll position check on window resize
    window.addEventListener('resize', checkScrollPosition);
    return () => {
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  const scrollLeft = (): void => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of container width
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = (): void => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of container width
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const toggleFavorite = (id: string): void => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        {/* Header with see all link */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <Link href={`/popular-${type}`} className="text-blue-400 hover:text-blue-500 flex items-center">
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
        {/* Subtitle */}
        <p className="text-gray-500 text-sm mb-6">{subtitle}</p>
        
        {/* Carousel container */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button 
              onClick={scrollLeft} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}
          
          {/* Carousel content */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide hide-scrollbar" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item, index) => (
              <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 relative">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image 
                      src={item.imageUrl} 
                      alt={item.name}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  {item.isEvent && item.date && (
                    <div className="px-4 pt-3 text-xs text-gray-500 uppercase font-medium">
                      {item.date}{item.time ? ` | ${item.time}` : ''}
                    </div>
                  )}
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-lg text-gray-800">{item.name}</h3>
                      {item.location && (
                        <div className="flex items-center mt-1 text-sm text-blue-400">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1.5"></div>
                          {item.location}
                        </div>
                      )}
                    </div>
                    <button 
                      onClick={() => toggleFavorite(item.id)}
                      className="flex items-center justify-center bg-white rounded-full p-1.5 hover:bg-gray-100 ml-2"
                      aria-label={favorites[item.id] ? "Remove from favorites" : "Add to favorites"}
                    >
                      <Heart 
                        className={`w-5 h-5 ${favorites[item.id] ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Arrow */}
          {showRightArrow && (
            <button 
              onClick={scrollRight} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
              aria-label="Next items"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VenueCarousel;