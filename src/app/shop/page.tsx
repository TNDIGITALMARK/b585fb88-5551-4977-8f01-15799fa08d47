import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ItemCard } from '@/components/item-card';
import { mockListings, mockCategories } from '@/lib/mock-data';
import { SlidersHorizontal } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse All Items</h1>
            <p className="text-gray-600">
              Discover amazing deals from trusted sellers in your community
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-card p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                  <button className="text-sm text-[hsl(var(--secondary))] hover:underline">
                    Clear all
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
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
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Condition */}
                <div className="mb-6">
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

                {/* Location */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Distance</h4>
                  <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent">
                    <option>Within 5 miles</option>
                    <option>Within 10 miles</option>
                    <option>Within 25 miles</option>
                    <option>Within 50 miles</option>
                    <option>Any distance</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Items Grid */}
            <div className="flex-1">
              {/* Sort Bar */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">{mockListings.length}</span> items found
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    Sort by:
                    <select className="px-3 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent">
                      <option>Most Recent</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Most Popular</option>
                    </select>
                  </label>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockListings.map((listing) => (
                  <ItemCard key={listing.id} listing={listing} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-[hsl(var(--primary))] text-white rounded hover:bg-[hsl(var(--color-navy))]">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
