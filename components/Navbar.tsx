'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (triggerRef.current) {
        const triggerPosition = triggerRef.current.getBoundingClientRect().top;
        setIsScrolled(triggerPosition <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Invisible trigger div - position this where you want the navbar to change */}
      <div ref={triggerRef} className="absolute top-[300px] left-0 w-full h-1 invisible" />

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white text-black shadow-md py-3'
            : 'bg-transparent text-white py-4'
        }`}
      >
        <div className="container flex items-center justify-between mx-auto px-4">
          {/* Logo */}
          <div className="container flex items-center gap-4 mx-auto px-4">

          <Link href="/" className="font-bold text-2xl">
            XCEED
          </Link>

          {/* Search bar */}
          <div className="relative max-w-md w-full hidden md:block">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className={`h-4 w-4 ${isScrolled ? 'text-gray-500' : 'text-gray-100'}`} />
            </div>
            <Input
              type="text"
              placeholder="Search a city, club, event..."
              className={`pl-9 pr-4 py-2 w-full rounded-full border-0 ${
                isScrolled
                  ? 'bg-gray-100 border-gray-200 text-black placeholder:text-gray-500'
                  : 'bg-gray-600/30 backdrop-blur-sm text-white placeholder:text-gray-300'
              }`}
            />
          </div>
          </div>

          {/* Navigation links */}
          <div className="flex items-center gap-4">
            <Button
              variant="link"
              className={`font-medium ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              List an event
            </Button>
            <Button
              variant="link"
              className={`font-medium ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              City guides
            </Button>
            <Button
              variant="link"
              className={`font-medium ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Login
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;