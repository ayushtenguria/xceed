'use client';

import VenueCarousel from './Carousel';
import { VenueItem } from '@/types/venue';
export default function BarRestaurant() {
  // Sample data for bars
  const popularBars: VenueItem[] = [
    {
      id: 'bar1',
      name: 'El Jardí de l\'Alma',
      imageUrl: 'https://images.unsplash.com/photo-1529604278261-8bfcdb00a7b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
    },
    {
      id: 'bar2',
      name: 'La Caseta del Migdia',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
    },
    {
      id: 'bar3',
      name: 'Antic Teatre',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
    },
    {
      id: 'bar4',
      name: 'Terraza Martinez',
      imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
    },
    {
      id: 'bar5',
      name: 'Casa Pueblo',
      imageUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
    },
  ];

  // Sample data for restaurants
  const popularRestaurants: VenueItem[] = [
    {
      id: 'rest1',
      name: 'Ponto Final',
      imageUrl: 'https://images.unsplash.com/photo-1515668236457-83c3b8764839?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
    },
    {
      id: 'rest2',
      name: 'Pink Mamma',
      imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
    },
    {
      id: 'rest3',
      name: 'Pez Vela',
      imageUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
    },
    {
      id: 'rest4',
      name: 'Mextizo',
      imageUrl: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
    },
    {
      id: 'rest5',
      name: 'Can Fisher',
      imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80',
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="py-6">
        <VenueCarousel 
          title="Popular bars" 
          subtitle="The most famous bars and lounges worldwide" 
          items={popularBars}
          type="bars"
        />
        
        <VenueCarousel 
          title="Popular restaurants" 
          subtitle="The most famous restaurants worldwide" 
          items={popularRestaurants}
          type="restaurants"
        />
      </main>
    </div>
  );
}