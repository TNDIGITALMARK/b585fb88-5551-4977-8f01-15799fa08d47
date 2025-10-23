// WonderWorld - Explore Amazing Places Around the World
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ItemCard } from '@/components/item-card';
import { mockListings, mockCategories } from '@/lib/mock-data';
import { Shield, Lock, FileText } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Homepage() {
  const featuredListings = mockListings.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Matching design reference exactly */}
      <section className="bg-[hsl(var(--primary))] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                Sustainable Finds,<br />New Beginnings
              </h1>
              <Link
                href="/shop"
                className="inline-block bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-blue-hover))] text-white px-6 py-3 rounded-md font-semibold text-sm transition-all shadow-button hover:shadow-hover"
              >
                Start Shopping
              </Link>
            </div>
            <div className="hidden md:flex justify-end">
              {/* Hero image matching design reference - books, camera, chair */}
              <div className="relative h-64 w-full max-w-md">
                <img
                  src="/generated/hero-products.png"
                  alt="Quality secondhand items - camera, books, and chair"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Matching design reference layout */}
      <main className="flex-1 bg-gray-50">
        {/* Featured Listings Section */}
        <section className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar - Category Filters - Matching design reference */}
            <aside className="lg:w-56 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-5 sticky top-24">
                <h3 className="text-base font-bold text-gray-900 mb-4">Category Filters</h3>
                <div className="space-y-2.5">
                  {mockCategories.map((category) => (
                    <label key={category.id} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-3.5 h-3.5 rounded border-gray-300 text-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]"
                      />
                      <span className="flex-1 text-xs text-gray-700 group-hover:text-[hsl(var(--accent))] transition-colors">
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
                          className="w-3.5 h-3.5 rounded border-gray-300 text-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]"
                        />
                        <span className="text-xs text-gray-700 group-hover:text-[hsl(var(--accent))] transition-colors">
                          {condition}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Featured Items Grid - Matching design reference */}
            <div className="flex-1">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Feature Highlights</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {featuredListings.map((listing) => (
                  <ItemCard key={listing.id} listing={listing} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights - Matching design reference */}
        <section className="bg-[hsl(var(--secondary))] py-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-5 text-center shadow-sm">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-7 h-7 text-[hsl(var(--accent))]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Verified Sellers</h3>
                <p className="text-xs text-gray-600">
                  Shop with peace of mind from verified sellers
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 text-center shadow-sm">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-7 h-7 text-[hsl(var(--accent))]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Secure Payments</h3>
                <p className="text-xs text-gray-600">
                  Protected transactions with buyer protection
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 text-center shadow-sm">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-7 h-7 text-[hsl(var(--accent))]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Eco-Friendly Mission</h3>
                <p className="text-xs text-gray-600">
                  Reduce waste and save money together
                </p>
              </div>
            </div>

            {/* CTA Section - Matching design reference */}
            <div className="text-center">
              <Link
                href="/shop"
                className="inline-block bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-blue-hover))] text-white px-6 py-3 rounded-md font-semibold text-sm transition-all shadow-button hover:shadow-hover"
              >
                Buy & Sell with Community
              </Link>
            </div>

            <div className="text-center mt-6 text-white text-xs">
              Buy & Sell with Confidence
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}