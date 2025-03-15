'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Music, 
  Video
} from 'lucide-react';

const Footer = () => {
  const [language, setLanguage] = useState('English');

  const businessLinks = [
    { title: 'List my events', href: '/list-events' },
    { title: 'Sell tickets online', href: '/sell-tickets' },
    { title: 'Manage Guests Lists', href: '/manage-guests' },
    { title: 'Access control', href: '/access-control' },
    { title: 'Table Management', href: '/table-management' },
    { title: 'Xceed Pro', href: '/xceed-pro' },
  ];

  const cityLinks = [
    'Barcelona', 'Lisbon', 'Madrid', 'Turin', 
    'Valencia', 'Hamburg', 'Ibiza', 'Milan', 
    'Brussels', 'Rome'
  ];

  const popularVenues = [
    { name: 'Audiodrome Live Club', href: '/venues/audiodrome-live-club' },
    { name: 'Bloody Louis', href: '/venues/bloody-louis' },
    { name: 'Fabrik Madrid', href: '/venues/fabrik-madrid' },
    { name: 'Gare Porto', href: '/venues/gare-porto' },
    { name: 'Input Dance Club', href: '/venues/input-dance-club' },
    { name: 'La Riviera', href: '/venues/la-riviera' },
    { name: 'Pacha Barcelona', href: '/venues/pacha-barcelona' },
    { name: 'Razzmatazz', href: '/venues/razzmatazz' },
    { name: 'Sala Sonora', href: '/venues/sala-sonora' },
    { name: 'Spazio Novecento', href: '/venues/spazio-novecento' },
  ];

  const topHeadliners = [
    { name: 'Amelie Lens', href: '/artists/amelie-lens' },
    { name: 'Boris Brejcha', href: '/artists/boris-brejcha' },
    { name: 'Carl Cox', href: '/artists/carl-cox' },
    { name: 'Charlotte de Witte', href: '/artists/charlotte-de-witte' },
    { name: 'Jamie Jones', href: '/artists/jamie-jones' },
    { name: 'Marco Carola', href: '/artists/marco-carola' },
    { name: 'Michael Bibi', href: '/artists/michael-bibi' },
    { name: 'Nina Kraviz', href: '/artists/nina-kraviz' },
    { name: 'Peggy Gou', href: '/artists/peggy-gou' },
    { name: 'Wade', href: '/artists/wade' },
  ];

  const newsLinks = [
    { name: 'Clubbing', href: '/news/clubbing' },
    { name: 'Culture', href: '/news/culture' },
    { name: 'Music', href: '/news/music' },
    { name: 'Top10', href: '/news/top10' },
  ];

  const footerLinks = [
    { name: 'Brand', href: '/brand' },
    { name: 'Careers', href: '/careers' },
    { name: 'Data', href: '/data' },
    { name: 'Help', href: '/help' },
    { name: 'Night Mag', href: '/night-mag' },
    { name: 'Press', href: '/press' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com', Icon: Twitter },
    { name: 'YouTube', href: 'https://youtube.com', Icon: Youtube },
    { name: 'Vimeo', href: 'https://vimeo.com', Icon: Video },
    { name: 'LinkedIn', href: 'https://linkedin.com', Icon: Linkedin },
    { name: 'SoundCloud', href: 'https://soundcloud.com', Icon: Music },
    { name: 'Spotify', href: 'https://spotify.com', Icon: Music },
  ];

  return (
    <footer className="w-full bg-white pt-8 pb-4 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business & Organizers */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Business & Organizers</h3>
            <ul className="space-y-2">
              {businessLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-500 hover:text-gray-800 text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Go out */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Go out</h3>
            <ul className="space-y-2">
              {cityLinks.map((city, index) => (
                <li key={index}>
                  <Link href={`/go-out/${city.toLowerCase()}`} className="text-gray-500 hover:text-gray-800 text-sm">
                    Go out in {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Events</h3>
            <ul className="space-y-2">
              {cityLinks.map((city, index) => (
                <li key={index}>
                  <Link href={`/events/${city.toLowerCase()}`} className="text-gray-500 hover:text-gray-800 text-sm">
                    Events in {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clubs */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Clubs</h3>
            <ul className="space-y-2">
              {cityLinks.map((city, index) => (
                <li key={index}>
                  <Link href={`/clubs/${city.toLowerCase()}`} className="text-gray-500 hover:text-gray-800 text-sm">
                    Clubs in {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-8" />

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Popular venues */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Popular venues</h3>
            <ul className="space-y-2">
              {popularVenues.map((venue, index) => (
                <li key={index}>
                  <Link href={venue.href} className="text-gray-500 hover:text-gray-800 text-sm">
                    {venue.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Artists */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Artists</h3>
            <ul className="space-y-2">
              {cityLinks.map((city, index) => (
                <li key={index}>
                  <Link href={`/djs/${city.toLowerCase()}`} className="text-gray-500 hover:text-gray-800 text-sm">
                    DJs in {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top headliners */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Top headliners</h3>
            <ul className="space-y-2">
              {topHeadliners.map((artist, index) => (
                <li key={index}>
                  <Link href={artist.href} className="text-gray-500 hover:text-gray-800 text-sm">
                    {artist.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News and App Links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">News</h3>
            <ul className="space-y-2 mb-6">
              {newsLinks.map((news, index) => (
                <li key={index}>
                  <Link href={news.href} className="text-gray-500 hover:text-gray-800 text-sm">
                    {news.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* App Store Links */}
            <div className="flex space-x-2 mt-4">
              <Link href="https://apps.apple.com" className="block">
                <div className="flex items-center justify-center border border-gray-300 rounded-md py-2 px-3 h-10">
                  <div className="flex items-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1.5" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-xs leading-none">Download on the</span>
                      <span className="text-sm font-semibold leading-tight">App Store</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="https://play.google.com" className="block">
                <div className="flex items-center justify-center border border-gray-300 rounded-md bg-gray-900 text-white py-2 px-3 h-10">
                  <div className="flex items-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1.5" fill="currentColor">
                      <path d="M3.18 18.5c.83 1.17 1.33 1.5 2.24 1.5H5v-10L2 13.6v2.4c0 .44.19 1.3.27 1.5.4 1 .75 1 .91 1M17.5 5.5L12 3 6.5 5.5v5L12 13l5.5-2.5v-5M21.16 18.1l-5.07-3.1V6.5l-.01-.01L12 5l.01.01V13l5.08 2.5-.11.08 3.67 2.27c.44-.25.51-.35.51-1.69v-6.16l-3.33 2.03v1.38l3.33 2.05z" />
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-xs leading-none">GET IT ON</span>
                      <span className="text-sm font-semibold leading-tight">Google Play</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Small links row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 mb-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            {footerLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-gray-600 hover:text-gray-900 text-sm">
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center justify-center">
            <button 
              className="px-6 py-2 border border-gray-300 rounded text-gray-600 text-sm font-normal hover:bg-gray-50 transition-colors"
              onClick={() => setLanguage(language === 'English' ? 'Español' : 'English')}
            >
              {language}
            </button>
          </div>
        </div>

        {/* Logo and bottom section */}
        <Separator className="my-4" />
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-900">XCEED</h1>
            </Link>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => {
              const { Icon } = social;
              return (
                <Link 
                  key={index} 
                  href={social.href} 
                  className="text-gray-400 hover:text-gray-900"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Tagline and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-500">
          <p>Go out and live extraordinary experiences.</p>
          <div className="flex items-center mt-2 md:mt-0">
            <div className="mr-1 w-4 h-4 text-gray-500">X</div>
            <span>© {new Date().getFullYear()} Xceed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;