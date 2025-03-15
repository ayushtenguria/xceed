
export interface VenueItem {
    id: string;
    name: string;
    imageUrl: string;
    location?: string;
  date?: string;
  time?: string;
  isEvent?: boolean;
  rating?: number;
  tags?: string[];
  }
  
  export type VenueType = 'bars' | 'restaurants' | 'clubs' | 'events';
  
  export interface VenueCarouselProps {
    title: string;
    subtitle: string;
    items: VenueItem[];
    type?: VenueType;
  }
  
  export interface FavoritesState {
    [key: string]: boolean;
  }