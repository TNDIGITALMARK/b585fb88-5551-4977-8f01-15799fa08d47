'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, Recycle } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [cartCount] = useState(1);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Navy Blue - Matching design reference */}
      <div className="bg-[hsl(var(--primary))] text-white">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-gray-200 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="hover:text-gray-200 transition-colors">
                Shop
              </Link>
              <Link href="/sell" className="hover:text-gray-200 transition-colors">
                Sell
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-gray-200 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-gray-200 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Header - Matching design reference layout */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo with Recycle Icon - Matching design reference */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center">
              <Recycle className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[hsl(var(--primary))] leading-tight tracking-tight">
                RE-USE & FIND
              </span>
            </div>
          </Link>

          {/* Search Bar - Matching design reference */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all text-sm"
              />
            </div>
          </div>

          {/* Right Actions - Matching design reference */}
          <div className="flex items-center gap-3">
            {/* Cart with Badge - Matching design reference */}
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-[hsl(var(--primary))] transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Account - Matching design reference */}
            <Link href="/dashboard" className="p-2 text-gray-600 hover:text-[hsl(var(--primary))] transition-colors">
              <User className="w-5 h-5" />
            </Link>

            {/* Mobile Menu */}
            <button className="md:hidden p-2 text-gray-600 hover:text-[hsl(var(--primary))] transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
