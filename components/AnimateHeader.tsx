"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  images: string[];
  interval?: number; // in milliseconds
  searchPlaceholder?: string;
}

const AnimatedHeader: React.FC<HeaderProps> = ({
  images,
  interval = 5000, // Default to 5 seconds
  searchPlaceholder = "Click anywhere to search for your next memorable experience",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true when component mounts on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Don't set up the timer if there's only one image or not mounted
    if (images.length <= 1 || !isMounted) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);

      // Wait for fade out animation to complete before changing image
      const timeout = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // This should match the CSS transition duration

      return () => clearTimeout(timeout);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval, isMounted]);

  // Preload images for smoother transitions - only on client side
  useEffect(() => {
    if (!isMounted) return;

    images.forEach((src) => {
      // Create an HTMLImageElement properly with the global constructor
      const img = new (window as any).Image();
      img.src = src;
    });
  }, [images, isMounted]);

  // Only render the client-specific parts after mounting
  if (!isMounted) {
    return (
      <header className="relative w-full h-screen overflow-hidden">
        {/* Static initial render for SSR */}
        <div className="absolute inset-0 w-full h-full">
          {images.length > 0 && (
            <>
              <div className="relative w-full h-full">
                {/* Use a div with background image for SSR */}
                <div
                  style={{
                    backgroundImage: `url(${images[0]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold italic text-white mb-8">
            WE GO OUT<span className="text-red-500">.</span>
          </h1>

          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-300" />
            </div>
            <input
              type="text"
              className="bg-transparent backdrop-blur-sm text-white pl-10 pr-4 py-3 w-full rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              placeholder={searchPlaceholder}
            />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex
              ? isTransitioning
                ? "opacity-0"
                : "opacity-100"
              : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            {/* Use next/image for better performance and loading */}
            <Image
              src={image}
              alt={`Background ${index + 1}`}
              fill={true}
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Overlay
            // <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold italic text-white mb-8">
          WE GO OUT<span className="text-red-500">.</span>
        </h1>

        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-300" />
          </div>
          <input
            type="text"
            className="bg-transparent backdrop-blur-sm text-white pl-10 pr-4 py-3 w-full rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            placeholder={searchPlaceholder}
          />
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="absolute bottom-8 left-10 transform -translate-x-1/2 animate-bounce mb-32">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default AnimatedHeader;
