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

      {/* Hero Section */}
      <section className="bg-[hsl(var(--primary))] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Sustainable Finds,<br />New Beginnings
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Discover quality pre-loved items and give them a second life. Buy and sell with confidence in our trusted community marketplace.
              </p>
              <Link
                href="/shop"
                className="inline-block btn-accent px-8 py-3 text-lg font-semibold"
              >
                Start Shopping
              </Link>
            </div>
            <div className="hidden md:block">
              {/* Placeholder for hero image or illustration */}
              <div className="relative h-80 bg-white/10 rounded-lg backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Featured Listings Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Category Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-card p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Category Filters</h3>
                <div className="space-y-3">
                  {mockCategories.map((category) => (
                    <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))]"
                      />
                      <span className="flex-1 text-sm text-gray-700 group-hover:text-[hsl(var(--primary))] transition-colors">
                        {category.icon} {category.name}
                      </span>
                      <span className="text-xs text-gray-500">({category.count})</span>
                    </label>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Condition</h4>
                  <div className="space-y-2">
                    {['New', 'Like New', 'Good', 'Fair'].map((condition) => (
                      <label key={condition} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 text-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))]"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-[hsl(var(--primary))] transition-colors">
                          {condition}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Featured Items Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Feature Highlights</h2>
                <p className="text-gray-600">Discover amazing deals from trusted sellers in your area</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {featuredListings.map((listing) => (
                  <ItemCard key={listing.id} listing={listing} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="bg-[hsl(var(--secondary))] py-12 mt-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Buy & Sell with Confidence
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-card">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[hsl(var(--secondary))]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Verified Sellers</h3>
                <p className="text-sm text-gray-600">
                  Shop with peace of mind from our community of verified sellers
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-card">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-[hsl(var(--secondary))]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
                <p className="text-sm text-gray-600">
                  Protected transactions with secure payment processing
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-card">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[hsl(var(--secondary))]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Eco-Friendly Mission</h3>
                <p className="text-sm text-gray-600">
                  Reduce waste and save money by giving items a second life
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Buy & Sell with Community
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who are buying and selling quality items in their local community. Start your sustainable shopping journey today!
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/shop" className="btn-primary">
              Browse Items
            </Link>
            <Link href="/sell" className="btn-secondary">
              Start Selling
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}