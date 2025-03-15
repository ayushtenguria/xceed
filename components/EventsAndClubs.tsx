'use client';

import VenueCarousel from './Carousel';
import { VenueItem } from '@/types/venue';

export default function EventsAndClubs() {
  // Sample data for festivals as shown in the image
  const festivals: VenueItem[] = [
    {
      id: 'festival1',
      name: 'INSANE FESTIVAL 2025',
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
      date: 'THU, 29 MAY 2025',
      time: '09:00 - 04:00',
      location: 'INSANE FESTIVAL - PLAN D\'EAU',
      isEvent: true
    },
    {
      id: 'festival2',
      name: 'DAY 1 - SUPERAURORA FESTIVAL 2025',
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
      date: 'FRI, 20 JUN 2025',
      time: '15:30 - 03:30',
      location: 'SUPERAURORA FESTIVAL - PARCO DI CASTELL...',
      isEvent: true
    },
    {
      id: 'festival3',
      name: 'CARL COX LIVE',
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
      date: 'FRI, 18 JUL 2025',
      time: '14:00 - 23:55',
      location: 'PONEY CLUB',
      isEvent: true
    },
    {
      id: 'festival4',
      name: 'DRUMCODE FESTIVAL 2025',
      imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
      date: 'SAT, 30 AUG 2025',
      time: '12:00 - 23:00',
      location: 'TAETS ART AND EVENT PARK',
      isEvent: true
    },
    {
      id: 'festival5',
      name: 'WAREHOUSE PROJECT OPENING',
      imageUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
      date: 'FRI, 19 SEP 2025',
      time: '22:00 - 05:00',
      location: 'DEPOT MAYFIELD',
      isEvent: true
    },
  ];

  // Sample data for world's top clubs as shown in the image
  const topClubs: VenueItem[] = [
    {
      id: 'club1',
      name: 'Bataplán',
      imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
      location: 'San Sebastián'
    },
    {
      id: 'club2',
      name: 'INPUT High Fidelity Dance Club',
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
      location: 'Barcelona'
    },
    {
      id: 'club3',
      name: 'Audiodrome Live Club',
      imageUrl: 'https://images.unsplash.com/photo-1563784462386-044fd95e9852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
      location: 'Turin'
    },
    {
      id: 'club4',
      name: 'Fabric',
      imageUrl: 'https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
      location: 'London'
    },
    {
      id: 'club5',
      name: 'Berghain',
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
      location: 'Berlin'
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="py-6">
        <VenueCarousel 
          title="Festivals" 
          subtitle="All upcoming festivals" 
          items={festivals}
          type="events"
        />
        
        <VenueCarousel 
          title="World's Top Clubs" 
          subtitle="The best clubs in the world" 
          items={topClubs}
          type="clubs"
        />
      </main>
    </div>
  );
}