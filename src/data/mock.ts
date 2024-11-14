import type { Ad, User } from '../types';

export const mockUsers: Record<string, User> = {
  user1: {
    id: 'user1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    rating: 4.8,
    reviewCount: 56,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  user2: {
    id: 'user2',
    name: 'Local Bakery',
    email: 'bakery@example.com',
    rating: 4.9,
    reviewCount: 128,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  user3: {
    id: 'user3',
    name: 'David Chen',
    email: 'david@example.com',
    rating: 4.7,
    reviewCount: 89,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  user4: {
    id: 'user4',
    name: 'Emma Wilson',
    email: 'emma@example.com',
    rating: 4.9,
    reviewCount: 156,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
};

export const mockAds: Ad[] = [
  // Sale Category
  {
    id: 'sale1',
    title: 'Handcrafted Ceramic Vases',
    description: 'Beautiful handmade ceramic vases, perfect for home decor.',
    category: 'sale',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 45 * 60 * 1000),
    duration: 45,
    location: { lat: 40.7128, lng: -74.0060, address: 'Manhattan, NY' },
    userId: 'user1',
    status: 'active',
    price: 45,
    images: ['https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 'sale2',
    title: 'Vintage Record Collection',
    description: '50+ vinyl records from the 60s and 70s in excellent condition.',
    category: 'sale',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 30 * 60 * 1000),
    duration: 30,
    location: { lat: 40.7282, lng: -73.7949, address: 'Queens, NY' },
    userId: 'user2',
    status: 'active',
    price: 200
  },

  // Services Category
  {
    id: 'services1',
    title: 'Professional Photography Session',
    description: 'Experienced photographer offering portrait and event photography.',
    category: 'services',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 60 * 60 * 1000),
    duration: 60,
    location: { lat: 40.7128, lng: -74.0060, address: 'Brooklyn, NY' },
    userId: 'user3',
    status: 'active',
    price: 150,
    images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 'services2',
    title: 'Home Cleaning Service',
    description: 'Thorough home cleaning service with eco-friendly products.',
    category: 'services',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 45 * 60 * 1000),
    duration: 45,
    location: { lat: 40.7282, lng: -73.7949, address: 'Staten Island, NY' },
    userId: 'user4',
    status: 'active',
    price: 80
  },

  // Help Category
  {
    id: 'help1',
    title: 'Moving Assistance Needed',
    description: 'Need help moving furniture to my new apartment.',
    category: 'help',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 30 * 60 * 1000),
    duration: 30,
    location: { lat: 40.7128, lng: -74.0060, address: 'Bronx, NY' },
    userId: 'user1',
    status: 'active'
  },
  {
    id: 'help2',
    title: 'Garden Maintenance Help',
    description: 'Looking for someone to help with basic garden maintenance.',
    category: 'help',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 45 * 60 * 1000),
    duration: 45,
    location: { lat: 40.7282, lng: -73.7949, address: 'Manhattan, NY' },
    userId: 'user2',
    status: 'active',
    price: 40
  },

  // Care Category
  {
    id: 'care1',
    title: 'Senior Companion Needed',
    description: 'Seeking companion for elderly parent, light assistance required.',
    category: 'care',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 60 * 60 * 1000),
    duration: 60,
    location: { lat: 40.7128, lng: -74.0060, address: 'Queens, NY' },
    userId: 'user3',
    status: 'active',
    price: 25
  },
  {
    id: 'care2',
    title: 'Pet Sitting - Weekend',
    description: 'Need pet sitter for two cats over the weekend.',
    category: 'care',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 45 * 60 * 1000),
    duration: 45,
    location: { lat: 40.7282, lng: -73.7949, address: 'Brooklyn, NY' },
    userId: 'user4',
    status: 'active',
    price: 50,
    images: ['https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
  },

  // Transport Category
  {
    id: 'transport1',
    title: 'Airport Pickup Service',
    description: 'Reliable airport pickup and drop-off service.',
    category: 'transport',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 30 * 60 * 1000),
    duration: 30,
    location: { lat: 40.7128, lng: -74.0060, address: 'JFK Airport, NY' },
    userId: 'user1',
    status: 'active',
    price: 60
  },
  {
    id: 'transport2',
    title: 'Furniture Delivery',
    description: 'Van available for furniture delivery within city limits.',
    category: 'transport',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 45 * 60 * 1000),
    duration: 45,
    location: { lat: 40.7282, lng: -73.7949, address: 'Staten Island, NY' },
    userId: 'user2',
    status: 'active',
    price: 80,
    images: ['https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
  },

  // Food Category
  {
    id: 'food1',
    title: 'Homemade Italian Dinner',
    description: 'Authentic Italian dinner prepared fresh for pickup.',
    category: 'food',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 60 * 60 * 1000),
    duration: 60,
    location: { lat: 40.7128, lng: -74.0060, address: 'Little Italy, NY' },
    userId: 'user3',
    status: 'active',
    price: 35,
    images: ['https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 'food2',
    title: 'Fresh Baked Goods',
    description: 'Assortment of fresh pastries and bread available daily.',
    category: 'food',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 30 * 60 * 1000),
    duration: 30,
    location: { lat: 40.7282, lng: -73.7949, address: 'Upper East Side, NY' },
    userId: 'user4',
    status: 'active',
    price: 25,
    images: ['https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
  }
];