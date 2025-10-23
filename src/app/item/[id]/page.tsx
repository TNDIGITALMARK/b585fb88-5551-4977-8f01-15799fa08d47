import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { mockListings } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, MapPin, MessageCircle, Heart, Shield, Clock, Package } from 'lucide-react';
import { ItemCard } from '@/components/item-card';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface ItemDetailPageProps {
  params: {
    id: string;
  };
}

export default function ItemDetailPage({ params }: ItemDetailPageProps) {
  const listing = mockListings.find((l) => l.id === params.id);

  if (!listing) {
    notFound();
  }

  const relatedListings = mockListings
    .filter((l) => l.category === listing.category && l.id !== listing.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-[hsl(var(--primary))]">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/category/${listing.category}`} className="hover:text-[hsl(var(--primary))]">
              {listing.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{listing.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Image */}
            <div className="bg-white rounded-lg shadow-card p-8">
              <div className="relative aspect-square w-full mb-4">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Thumbnails placeholder */}
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-20 h-20 bg-gray-100 rounded border-2 border-transparent hover:border-[hsl(var(--primary))] cursor-pointer transition-colors"
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div>
              <div className="bg-white rounded-lg shadow-card p-8">
                {/* Title & Price */}
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  {listing.title}
                </h1>

                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                    {listing.condition}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                    {listing.category}
                  </span>
                </div>

                <div className="text-4xl font-bold text-gray-900 mb-6">
                  ${listing.price}
                </div>

                {/* Seller Info */}
                <div className="border-t border-b border-gray-200 py-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Seller Information</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {listing.seller.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">{listing.seller.name}</span>
                        {listing.seller.verified && (
                          <Shield className="w-5 h-5 text-blue-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(listing.seller.rating)
                                ? 'fill-[hsl(var(--color-star))] text-[hsl(var(--color-star))]'
                                : 'fill-gray-200 text-gray-200'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">
                          {listing.seller.rating} ({listing.seller.totalSales} sales)
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>Responds in {listing.seller.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-6">
                  <button className="w-full btn-accent py-3 flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Contact Seller
                  </button>
                  <button className="w-full btn-secondary py-3 flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Save to Favorites
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <MapPin className="w-5 h-5" />
                  <span>{listing.location}</span>
                </div>

                {/* Key Details */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Views</div>
                    <div className="font-semibold text-gray-900">{listing.views}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Favorites</div>
                    <div className="font-semibold text-gray-900">{listing.favorites}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Posted</div>
                    <div className="font-semibold text-gray-900">
                      {new Date(listing.postedDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Category</div>
                    <div className="font-semibold text-gray-900 capitalize">
                      {listing.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-white rounded-lg shadow-card p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {listing.description}
            </p>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start gap-3">
                <Package className="w-6 h-6 text-[hsl(var(--secondary))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Safe Transaction Tips</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Meet in a public, well-lit location</li>
                    <li>• Inspect the item before completing the purchase</li>
                    <li>• Use secure payment methods</li>
                    <li>• Trust your instincts and stay safe</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Related Items */}
          {relatedListings.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Items</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedListings.map((item) => (
                  <ItemCard key={item.id} listing={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
