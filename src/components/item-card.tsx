'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Listing, conditionLabels } from '@/lib/mock-data';
import { Star, MapPin, Heart } from 'lucide-react';

interface ItemCardProps {
  listing: Listing;
}

export function ItemCard({ listing }: ItemCardProps) {
  return (
    <Link href={`/item/${listing.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
        {/* Product Image */}
        <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Add to favorites"
          >
            <Heart className="w-5 h-5 text-gray-600" />
          </button>

          {/* Condition Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 shadow-sm">
              {conditionLabels[listing.condition]}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-2 group-hover:text-[hsl(var(--primary))] transition-colors">
            {listing.title}
          </h3>

          {/* Price */}
          <p className="text-xl font-bold text-gray-900 mb-2">
            ${listing.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(listing.rating)
                    ? 'fill-[hsl(var(--color-star))] text-[hsl(var(--color-star))]'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">
              {listing.rating}
            </span>
          </div>

          {/* Seller & Location */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span className="font-medium">{listing.seller.name}</span>
              {listing.seller.verified && (
                <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{listing.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
