"use client";

import AnimatedHeader from "./AnimateHeader";
export default function Header() {
  // Nightlife and event images from Unsplash
  const headerImages = [
    "https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80", // Dramatic landscape with lighting
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80", // Dramatic scene with light
  ];

  return (
    <div>
      {/* Use the placeholder images for development */}
      <AnimatedHeader
        images={headerImages}
        interval={7000} // Change image every 7 seconds
      />
    </div>
  );
}
