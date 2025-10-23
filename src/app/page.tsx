// RE-USE & FIND - Sustainable Marketplace
// Pixel-perfect implementation matching design reference

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, User, Search, Recycle } from 'lucide-react';

/**
 * RE-USE & FIND DESIGN SYSTEM (Extracted from reference)
 *
 * Colors:
 * - Primary Navy: #2C5282 (hsl(210, 60%, 34%)) - Hero, Header, Footer
 * - Light Blue: #5B8BB5 (hsl(207, 42%, 54%)) - Buttons, CTAs
 * - Star Yellow: #FFB800 (hsl(45, 100%, 50%)) - Ratings
 * - White: #FFFFFF - Cards, backgrounds
 * - Gray: Various shades for text and borders
 *
 * Typography:
 * - Font: Inter (clean sans-serif)
 * - Hero Title: ~36px, bold
 * - Product Title: ~14px, medium
 * - Price: ~16px, bold
 *
 * Layout:
 * - Container: Max 1200px
 * - Grid: 5 columns (product cards)
 * - Spacing: 20px gaps, 16px padding
 * - Border Radius: 8px cards, 6px buttons
 *
 * Components:
 * - Product Cards: White, subtle shadow, rounded corners
 * - CTA Buttons: Light blue, white text, rounded
 * - Rating Stars: Gold with half-fill support
 */

// Mock product data matching design reference
const products = [
  { id: 1, name: 'Gaming Laptop', price: 750, rating: 4.5, image: '/generated/product-laptop.png' },
  { id: 2, name: 'Mid-Century Armchair', price: 350, rating: 5, image: '/generated/product-armchair.png' },
  { id: 3, name: 'Designer Denim Jacket', price: 85, rating: 4, image: '/generated/product-jacket1.png' },
  { id: 4, name: 'Designer Denim Jacket', price: 180, rating: 4.5, image: '/generated/product-jacket2.png' },
  { id: 5, name: 'Complete Analog Set', price: 240, rating: 5, image: '/generated/product-books.png' },
  { id: 6, name: 'Espresso Machine', price: 350, rating: 4.5, image: '/generated/product-espresso.png' },
  { id: 7, name: 'Acoustic Guitar', price: 450, rating: 5, image: '/generated/product-guitar.png' },
  { id: 8, name: 'Running Shoes', price: 75, rating: 4, image: '/generated/product-shoes1.png' },
  { id: 9, name: 'Vintage Casual Shoes', price: 110, rating: 4.5, image: '/generated/product-shoes2.png' },
  { id: 10, name: 'Vintage Tan Player', price: 150, rating: 5, image: '/generated/product-storage.png' },
];

// Category filters matching design reference
const categories = [
  { id: 'electronics', name: 'Electronics', icon: '💻' },
  { id: 'furniture', name: 'Furniture', icon: '🪑' },
  { id: 'clothing', name: 'Clothing', icon: '👔' },
  { id: 'books', name: 'Books', icon: '📚' },
  { id: 'home', name: 'Home Goods', icon: '🏠' },
  { id: 'sports', name: 'Sports & Life', icon: '⚽' },
  { id: 'music', name: 'Music & Outdoors', icon: '🎵' },
];

// Star rating component matching design reference
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.floor(rating);
        const half = star === Math.ceil(rating) && rating % 1 !== 0;

        return (
          <span key={star} className="text-[hsl(var(--color-star))] text-xs">
            {filled ? '★' : half ? '⯪' : '☆'}
          </span>
        );
      })}
    </div>
  );
}

// Product card matching design reference
function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="bg-white rounded-lg shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow overflow-hidden border border-[hsl(var(--border))]">
      <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-4">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={225}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-bold text-gray-900">${product.price}</span>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#E0F2FE]">
      {/* Header - Matching design reference */}
      <header className="bg-white border-b border-[hsl(var(--border))] sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Recycle className="w-6 h-6 text-[hsl(var(--secondary))]" />
              <span className="font-bold text-lg text-gray-900">RE-USE & FIND</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
              <Link href="/" className="text-sm font-medium text-gray-900 hover:text-[hsl(var(--secondary))] transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-sm font-medium text-gray-600 hover:text-[hsl(var(--secondary))] transition-colors">
                Sell
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-[hsl(var(--secondary))] transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-[hsl(var(--secondary))] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors relative">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Matching design reference EXACTLY */}
      <section className="bg-[hsl(var(--primary))] text-white">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Text content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Sustainable Finds,<br />New Beginnings
              </h1>
              <Link
                href="/shop"
                className="inline-block bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--color-blue-hover))] text-white px-6 py-3 rounded-[var(--radius-button)] font-semibold text-sm transition-all shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-hover)]"
              >
                Start Shopping
              </Link>
            </div>

            {/* Right: Hero image - Camera, books, chair */}
            <div className="hidden md:flex justify-end">
              <div className="relative h-80 w-full max-w-lg">
                <Image
                  src="/generated/hero-product.png"
                  alt="Quality secondhand items - vintage camera, books, and modern chair"
                  width={600}
                  height={400}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Category Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-5 sticky top-20">
              <h3 className="text-base font-bold text-gray-900 mb-4">Category Filters</h3>
              <div className="space-y-2.5">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[hsl(var(--secondary))] focus:ring-[hsl(var(--secondary))]"
                    />
                    <span className="flex-1 text-sm text-gray-700 group-hover:text-[hsl(var(--secondary))] transition-colors">
                      {category.icon} {category.name}
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Condition</h4>
                <div className="space-y-2">
                  {['Used - Good', 'Used - Fair', 'Newer - Good', 'Older'].map((condition) => (
                    <label key={condition} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[hsl(var(--secondary))] focus:ring-[hsl(var(--secondary))]"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-[hsl(var(--secondary))] transition-colors">
                        {condition}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right: Product Grid */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Feature Highlights</h2>

            {/* Product Grid - 5 columns to match design reference */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Feature Highlights Section - Matching design reference */}
      <section className="bg-[hsl(var(--primary))] py-12 mt-8">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Feature Highlights</h2>

          {/* Three feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--secondary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Verified Sellers</h3>
              <p className="text-sm text-gray-600">
                Shop with peace of mind from verified sellers
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--secondary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-sm text-gray-600">
                Protected transactions with buyer protection
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--secondary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Eco-Friendly Mission</h3>
              <p className="text-sm text-gray-600">
                Reduce waste and save money together
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/shop"
              className="inline-block bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--color-blue-hover))] text-white px-8 py-3 rounded-[var(--radius-button)] font-semibold text-sm transition-all shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-hover)]"
            >
              Buy & Sell with Confidence
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Matching design reference */}
      <footer className="bg-[hsl(var(--primary))] text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm">© 2024 RE-USE & FIND. All rights reserved.</p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
