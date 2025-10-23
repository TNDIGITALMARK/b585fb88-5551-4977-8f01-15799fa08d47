import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WonderCard } from '@/components/wonder-card';
import { wonders, wonderCategories } from '@/lib/wonders-data';
import { Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function WondersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--color-navy))] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/world-map.svg')] opacity-10" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Discover the World's Wonders</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Explore Extraordinary Places
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
              From ancient monuments to modern marvels, discover the most amazing destinations and experiences our world has to offer. Start your journey today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="btn-accent px-8 py-3 text-lg font-semibold">
                Explore All Wonders
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-md text-lg font-semibold transition-all">
                Plan Your Trip
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        {/* Wonders Grid Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Category Filters */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-card p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-[hsl(var(--primary))]" />
                  <h3 className="text-lg font-bold text-gray-900">Categories</h3>
                </div>
                <div className="space-y-3">
                  {wonderCategories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-3 cursor-pointer group p-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))]"
                      />
                      <span className="flex-1 text-sm text-gray-700 group-hover:text-[hsl(var(--primary))] transition-colors font-medium">
                        {category.icon} {category.name}
                      </span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Sort By</h4>
                  <div className="space-y-2">
                    {['Most Popular', 'Highest Rated', 'Recently Added', 'A-Z'].map((sort) => (
                      <label
                        key={sort}
                        className="flex items-center gap-3 cursor-pointer group p-2 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="radio"
                          name="sort"
                          className="w-4 h-4 border-gray-300 text-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))]"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-[hsl(var(--primary))] transition-colors">
                          {sort}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Wonders Grid */}
            <div className="flex-1">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">World's Greatest Wonders</h2>
                <p className="text-gray-600 text-lg">
                  Discover {wonders.length} extraordinary destinations that will inspire your next adventure
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {wonders.map((wonder) => (
                  <WonderCard key={wonder.id} wonder={wonder} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Wonder Section - Highlighting Northern Lights Hotel */}
        <section className="bg-white py-16 mt-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] px-4 py-2 rounded-full mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Featured Modern Marvel</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Sleep Under the Aurora Borealis
                </h2>
                <p className="text-gray-600 text-lg">
                  The Northern Lights Hotel offers a once-in-a-lifetime experience
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      The Northern Lights Hotel, Finland
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Experience the magic of sleeping under the aurora borealis in this extraordinary ice hotel.
                      Built entirely from ice and snow, this architectural marvel offers breathtaking views of
                      the Northern Lights from your frozen suite.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[hsl(var(--accent))]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[hsl(var(--accent))] text-sm">✓</span>
                        </div>
                        <p className="text-sm text-gray-700">Sleep in rooms made entirely of ice and snow</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[hsl(var(--accent))]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[hsl(var(--accent))] text-sm">✓</span>
                        </div>
                        <p className="text-sm text-gray-700">Watch the aurora borealis through ice windows</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[hsl(var(--accent))]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[hsl(var(--accent))] text-sm">✓</span>
                        </div>
                        <p className="text-sm text-gray-700">Enjoy hot sauna and arctic activities</p>
                      </div>
                    </div>
                    <Link
                      href="/wonders/1"
                      className="inline-block btn-accent px-6 py-3 font-semibold"
                    >
                      Explore This Wonder
                    </Link>
                  </div>
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Sparkles className="w-16 h-16 mx-auto mb-3 opacity-80" />
                        <p className="text-sm font-medium">Northern Lights Hotel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-card">
              <p className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">42+</p>
              <p className="text-sm text-gray-600">Amazing Wonders</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-card">
              <p className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">120k+</p>
              <p className="text-sm text-gray-600">Travelers Inspired</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-card">
              <p className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">4.8★</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-card">
              <p className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">50+</p>
              <p className="text-sm text-gray-600">Countries</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
