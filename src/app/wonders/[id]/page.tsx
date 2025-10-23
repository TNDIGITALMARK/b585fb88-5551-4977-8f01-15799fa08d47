import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { wonders } from '@/lib/wonders-data';
import { Star, MapPin, Eye, Heart, Calendar, Info, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface WonderDetailPageProps {
  params: {
    id: string;
  };
}

export default function WonderDetailPage({ params }: WonderDetailPageProps) {
  const wonder = wonders.find((w) => w.id === params.id);

  if (!wonder) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        {/* Hero Image Section */}
        <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-br from-blue-100 to-purple-100">
          <div className="absolute inset-0">
            <Image
              src={wonder.image}
              alt={wonder.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
                  <span className="text-sm font-semibold text-[hsl(var(--primary))]">
                    {wonder.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {wonder.title}
                </h1>
                <div className="flex items-center gap-6 text-white/90 flex-wrap">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">{wonder.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-[hsl(var(--color-star))] text-[hsl(var(--color-star))]" />
                    <span className="font-semibold">{wonder.rating}</span>
                    <span className="text-white/70">({wonder.favorites.toLocaleString()} saves)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    <span>{wonder.views.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-lg shadow-card p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-[hsl(var(--primary))]" />
                  <h2 className="text-2xl font-bold text-gray-900">About This Wonder</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {wonder.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-lg shadow-card p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Highlights & Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {wonder.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--secondary))]/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Visit</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <Calendar className="w-6 h-6 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Best Time to Visit</h3>
                      <p className="text-gray-600 text-sm">{wonder.bestTimeToVisit}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <MapPin className="w-6 h-6 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600 text-sm">{wonder.country}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Action Card */}
              <div className="bg-white rounded-lg shadow-card p-6 sticky top-24">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-6 h-6 fill-[hsl(var(--color-star))] text-[hsl(var(--color-star))]" />
                    <div>
                      <span className="text-3xl font-bold text-gray-900">{wonder.rating}</span>
                      <span className="text-gray-500 text-sm ml-2">out of 5</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on {wonder.favorites.toLocaleString()} traveler saves
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <button className="w-full btn-accent py-3 font-semibold flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Save to My List
                  </button>
                  <button className="w-full btn-primary py-3 font-semibold">
                    Plan Your Trip
                  </button>
                  <button className="w-full btn-secondary py-3 font-semibold">
                    Share Wonder
                  </button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Quick Facts</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium text-gray-900">{wonder.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Country:</span>
                      <span className="font-medium text-gray-900">{wonder.country}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Views:</span>
                      <span className="font-medium text-gray-900">{wonder.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Wonders */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="font-bold text-gray-900 mb-4">More Wonders</h3>
                <div className="space-y-3">
                  {wonders
                    .filter((w) => w.id !== wonder.id)
                    .slice(0, 3)
                    .map((relatedWonder) => (
                      <Link
                        key={relatedWonder.id}
                        href={`/wonders/${relatedWonder.id}`}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <p className="font-medium text-gray-900 text-sm group-hover:text-[hsl(var(--primary))] line-clamp-2">
                          {relatedWonder.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{relatedWonder.country}</span>
                        </div>
                      </Link>
                    ))}
                </div>
                <Link
                  href="/wonders"
                  className="block text-center mt-4 text-sm font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  View All Wonders →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
