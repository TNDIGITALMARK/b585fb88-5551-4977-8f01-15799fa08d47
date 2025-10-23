/**
 * World Wonders Data Collection
 * Amazing places and experiences from around the globe
 */

export interface Wonder {
  id: string;
  title: string;
  category: 'Ancient Wonders' | 'Natural Wonders' | 'Modern Marvels' | 'Cultural Sites';
  location: string;
  country: string;
  image: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  rating: number;
  views: number;
  favorites: number;
}

export const wonderCategories = [
  { id: 'ancient', name: 'Ancient Wonders', count: 7, icon: '🏛️' },
  { id: 'natural', name: 'Natural Wonders', count: 12, icon: '🏔️' },
  { id: 'modern', name: 'Modern Marvels', count: 8, icon: '🏗️' },
  { id: 'cultural', name: 'Cultural Sites', count: 15, icon: '🎭' },
];

export const wonders: Wonder[] = [
  {
    id: '1',
    title: 'The Northern Lights Hotel, Finland',
    category: 'Modern Marvels',
    location: 'Lapland, Finland',
    country: 'Finland',
    image: '/generated/northern-lights-hotel.jpg',
    description: 'Experience the magic of sleeping under the aurora borealis in this extraordinary ice hotel. Built entirely from ice and snow, this architectural marvel offers a once-in-a-lifetime opportunity to witness the dancing Northern Lights from the comfort of your thermal sleeping bag while surrounded by stunning ice sculptures and illuminated frozen walls.',
    highlights: [
      'Sleep in rooms made entirely of ice and snow',
      'Watch the aurora borealis through ice windows',
      'Enjoy hot sauna and arctic activities',
      'Experience traditional Finnish hospitality',
      'Visit ice bar with sculptured ice glasses',
    ],
    bestTimeToVisit: 'December to March',
    rating: 4.9,
    views: 12543,
    favorites: 892,
  },
  {
    id: '2',
    title: 'The Great Pyramid of Giza',
    category: 'Ancient Wonders',
    location: 'Giza, Egypt',
    country: 'Egypt',
    image: '/generated/great-pyramid.jpg',
    description: 'The last remaining wonder of the ancient world, this magnificent pyramid has stood for over 4,500 years as a testament to human ingenuity and ambition.',
    highlights: [
      'Oldest of the Seven Wonders of the Ancient World',
      'Built around 2560 BC',
      'Originally 146.5 meters tall',
      'Contains over 2 million stone blocks',
      'Aligned with astronomical precision',
    ],
    bestTimeToVisit: 'October to April',
    rating: 4.8,
    views: 45231,
    favorites: 3421,
  },
  {
    id: '3',
    title: 'Grand Canyon',
    category: 'Natural Wonders',
    location: 'Arizona, USA',
    country: 'United States',
    image: '/generated/grand-canyon.jpg',
    description: 'A breathtaking natural wonder carved by the Colorado River over millions of years. The canyon stretches 277 miles long, up to 18 miles wide, and over a mile deep.',
    highlights: [
      '277 miles of stunning canyon views',
      'Nearly 2 billion years of geological history',
      'Home to diverse ecosystems',
      'World-class hiking and rafting',
      'Spectacular sunrise and sunset vistas',
    ],
    bestTimeToVisit: 'March to May, September to November',
    rating: 4.9,
    views: 67890,
    favorites: 5432,
  },
];
