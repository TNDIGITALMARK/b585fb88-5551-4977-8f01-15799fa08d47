/**
 * Mock Data for SecondLife Marketplace MVP
 * Sample listings, users, and categories
 */

export interface Listing {
  id: string;
  title: string;
  price: number;
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'well-loved';
  category: string;
  image: string;
  seller: Seller;
  rating: number;
  location: string;
  description: string;
  views: number;
  favorites: number;
  postedDate: string;
}

export interface Seller {
  id: string;
  name: string;
  verified: boolean;
  rating: number;
  totalSales: number;
  responseTime: string;
  joinedDate: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
}

export const mockSellers: Seller[] = [
  {
    id: '1',
    name: 'Sarah Miller',
    verified: true,
    rating: 4.8,
    totalSales: 47,
    responseTime: '< 2 hours',
    joinedDate: '2023-01',
  },
  {
    id: '2',
    name: 'Downtown Bakery',
    verified: true,
    rating: 4.9,
    totalSales: 23,
    responseTime: '< 1 hour',
    joinedDate: '2023-06',
  },
  {
    id: '3',
    name: 'Johnson Family',
    verified: false,
    rating: 4.5,
    totalSales: 12,
    responseTime: '< 4 hours',
    joinedDate: '2024-02',
  },
  {
    id: '4',
    name: 'Mike Tech Shop',
    verified: true,
    rating: 4.7,
    totalSales: 89,
    responseTime: '< 1 hour',
    joinedDate: '2022-11',
  },
];

export const mockCategories: Category[] = [
  { id: 'electronics', name: 'Electronics', count: 234, icon: '💻' },
  { id: 'furniture', name: 'Furniture', count: 189, icon: '🪑' },
  { id: 'clothing', name: 'Clothing', count: 456, icon: '👕' },
  { id: 'home-goods', name: 'Home Goods', count: 312, icon: '🏠' },
  { id: 'books', name: 'Books', count: 178, icon: '📚' },
  { id: 'sports', name: 'Sports & Outdoors', count: 145, icon: '⚽' },
  { id: 'music', name: 'Musical Instruments', count: 67, icon: '🎸' },
];

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Vintage Leather Camera',
    price: 299,
    condition: 'good',
    category: 'electronics',
    image: '/generated/product-camera.png',
    seller: mockSellers[0],
    rating: 4.8,
    location: '5 miles away',
    description: 'Beautiful vintage camera in excellent working condition. Perfect for photography enthusiasts and collectors. Comes with original leather case and manual.',
    views: 234,
    favorites: 12,
    postedDate: '2024-10-15',
  },
  {
    id: '2',
    title: 'Mid-Century Armchair',
    price: 450,
    condition: 'like-new',
    category: 'furniture',
    image: '/generated/product-chair.png',
    seller: mockSellers[1],
    rating: 4.9,
    location: '3 miles away',
    description: 'Stunning mid-century modern armchair with tan leather upholstery. Recently reupholstered, solid wood frame. A statement piece for any living room.',
    views: 567,
    favorites: 28,
    postedDate: '2024-10-18',
  },
  {
    id: '3',
    title: 'Designer Denim Jacket',
    price: 85,
    condition: 'good',
    category: 'clothing',
    image: '/generated/product-jacket.png',
    seller: mockSellers[2],
    rating: 4.5,
    location: '8 miles away',
    description: 'Classic denim jacket in great condition. Perfect layering piece for any season. Slight wear adds character. Size Medium.',
    views: 189,
    favorites: 15,
    postedDate: '2024-10-20',
  },
  {
    id: '4',
    title: 'Canvas Sneakers',
    price: 45,
    condition: 'like-new',
    category: 'clothing',
    image: '/generated/product-shoes.png',
    seller: mockSellers[0],
    rating: 4.8,
    location: '5 miles away',
    description: 'Navy blue canvas sneakers, worn only twice. Comfortable and stylish for casual wear. Size 10.',
    views: 312,
    favorites: 19,
    postedDate: '2024-10-19',
  },
  {
    id: '5',
    title: 'Vintage Espresso Machine',
    price: 275,
    condition: 'good',
    category: 'home-goods',
    image: '/generated/product-espresso.png',
    seller: mockSellers[3],
    rating: 4.7,
    location: '2 miles away',
    description: 'Beautiful vintage espresso machine with wood finish. Fully functional, makes excellent coffee. A conversation piece for any kitchen.',
    views: 445,
    favorites: 34,
    postedDate: '2024-10-17',
  },
  {
    id: '6',
    title: 'Acoustic Guitar',
    price: 320,
    condition: 'good',
    category: 'music',
    image: '/generated/product-guitar.png',
    seller: mockSellers[2],
    rating: 4.5,
    location: '8 miles away',
    description: 'Quality acoustic guitar in great playing condition. Perfect for beginners or experienced players. Includes soft case.',
    views: 278,
    favorites: 22,
    postedDate: '2024-10-16',
  },
  {
    id: '7',
    title: 'Vintage Record Player',
    price: 195,
    condition: 'good',
    category: 'electronics',
    image: '/generated/product-record-player.png',
    seller: mockSellers[1],
    rating: 4.9,
    location: '3 miles away',
    description: 'Classic wooden turntable in excellent working condition. Brings warmth to vinyl records. Perfect for music lovers.',
    views: 523,
    favorites: 41,
    postedDate: '2024-10-14',
  },
  {
    id: '8',
    title: 'Gaming Laptop',
    price: 899,
    condition: 'like-new',
    category: 'electronics',
    image: '/generated/product-laptop.png',
    seller: mockSellers[3],
    rating: 4.7,
    location: '2 miles away',
    description: 'High-performance gaming laptop, barely used. Powerful specs for gaming and productivity. Includes RGB keyboard and all accessories.',
    views: 678,
    favorites: 56,
    postedDate: '2024-10-21',
  },
];

export const conditionBadgeColors = {
  'new': 'bg-green-100 text-green-800',
  'like-new': 'bg-blue-100 text-blue-800',
  'good': 'bg-yellow-100 text-yellow-800',
  'fair': 'bg-orange-100 text-orange-800',
  'well-loved': 'bg-gray-100 text-gray-800',
};

export const conditionLabels = {
  'new': 'New',
  'like-new': 'Like New',
  'good': 'Good',
  'fair': 'Fair',
  'well-loved': 'Well Loved',
};
