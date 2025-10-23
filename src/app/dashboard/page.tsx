import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { mockListings, mockSellers } from '@/lib/mock-data';
import { Star, Eye, Heart, Plus, Edit, Trash2, MessageCircle, TrendingUp, DollarSign, Package } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function DashboardPage() {
  // Mock current user as first seller
  const currentUser = mockSellers[0];

  // Mock user's listings
  const userListings = mockListings.filter(l => l.seller.id === currentUser.id);

  // Mock stats
  const stats = {
    totalListings: userListings.length,
    activeListings: userListings.length,
    totalViews: userListings.reduce((acc, l) => acc + l.views, 0),
    totalFavorites: userListings.reduce((acc, l) => acc + l.favorites, 0),
    totalEarnings: userListings.reduce((acc, l) => acc + l.price, 0),
    averageRating: currentUser.rating,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
            <p className="text-gray-600">Manage your listings and track your sales performance</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-card p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-600">Active Listings</div>
                <Package className="w-5 h-5 text-[hsl(var(--secondary))]" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stats.activeListings}</div>
              <div className="text-xs text-green-600 mt-1">
                {stats.totalListings} total
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-card p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-600">Total Views</div>
                <Eye className="w-5 h-5 text-[hsl(var(--secondary))]" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stats.totalViews}</div>
              <div className="text-xs text-green-600 mt-1">
                +12% this week
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-card p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-600">Favorites</div>
                <Heart className="w-5 h-5 text-[hsl(var(--secondary))]" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stats.totalFavorites}</div>
              <div className="text-xs text-green-600 mt-1">
                +8% this week
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-card p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-600">Seller Rating</div>
                <Star className="w-5 h-5 text-[hsl(var(--color-star))]" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stats.averageRating}</div>
              <div className="text-xs text-gray-600 mt-1">
                from {currentUser.totalSales} sales
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-card p-6 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center text-white font-bold text-3xl">
                  {currentUser.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-bold text-gray-900">{currentUser.name}</h2>
                    {currentUser.verified && (
                      <svg className="w-6 h-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(currentUser.rating)
                            ? 'fill-[hsl(var(--color-star))] text-[hsl(var(--color-star))]'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">
                      {currentUser.rating} • {currentUser.totalSales} sales
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Member since {new Date(currentUser.joinedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>
              <button className="btn-secondary px-6 py-2">
                Edit Profile
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{currentUser.totalSales}</div>
                <div className="text-sm text-gray-600">Total Sales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{currentUser.responseTime}</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-sm text-gray-600">Positive Feedback</div>
              </div>
            </div>
          </div>

          {/* My Listings Section */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">My Listings</h2>
              <Link href="/create-listing" className="btn-accent px-6 py-2 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Create New Listing
              </Link>
            </div>

            <div className="space-y-4">
              {userListings.map((listing) => (
                <div
                  key={listing.id}
                  className="flex items-center gap-6 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  {/* Image */}
                  <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={listing.image}
                      alt={listing.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1 truncate">
                      {listing.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span className="font-medium text-gray-900">${listing.price}</span>
                      <span>•</span>
                      <span className="capitalize">{listing.condition}</span>
                      <span>•</span>
                      <span>Posted {new Date(listing.postedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Eye className="w-4 h-4" />
                        <span>{listing.views} views</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Heart className="w-4 h-4" />
                        <span>{listing.favorites} favorites</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MessageCircle className="w-4 h-4" />
                        <span>3 inquiries</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Link
                      href={`/item/${listing.id}`}
                      className="p-2 text-gray-600 hover:text-[hsl(var(--secondary))] hover:bg-blue-50 rounded transition-colors"
                      title="View"
                    >
                      <Eye className="w-5 h-5" />
                    </Link>
                    <button
                      className="p-2 text-gray-600 hover:text-[hsl(var(--secondary))] hover:bg-blue-50 rounded transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {userListings.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No listings yet</h3>
                <p className="text-gray-600 mb-6">Create your first listing to start selling</p>
                <Link href="/create-listing" className="btn-accent px-8 py-3">
                  Create Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
