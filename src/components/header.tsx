'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [cartCount] = useState(0);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Navy Blue */}
      <div className="bg-[hsl(var(--primary))] text-white">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex items-center justify-between text-sm">
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

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[hsl(var(--primary))] leading-none">
                RE-USE & FIND
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2.5 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[hsl(var(--primary))] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-[hsl(var(--primary))] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[hsl(var(--accent))] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Account */}
            <Link href="/dashboard" className="p-2 text-gray-700 hover:text-[hsl(var(--primary))] transition-colors">
              <User className="w-6 h-6" />
            </Link>

            {/* Mobile Menu */}
            <button className="md:hidden p-2 text-gray-700 hover:text-[hsl(var(--primary))] transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
