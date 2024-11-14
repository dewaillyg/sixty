export type Category = 'sale' | 'services' | 'help' | 'care' | 'transport' | 'food';

export type AdStatus = 'active' | 'accepted' | 'completed';

export type Duration = 15 | 30 | 45 | 60;

export interface Ad {
  id: string;
  title: string;
  description: string;
  category: Category;
  createdAt: Date;
  expiresAt: Date;
  duration: Duration;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  userId: string;
  status: AdStatus;
  price?: number;
  images?: string[];
}

export interface User {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  avatar?: string;
  email: string;
}