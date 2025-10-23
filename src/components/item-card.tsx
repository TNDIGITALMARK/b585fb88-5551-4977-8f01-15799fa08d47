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
      <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 border border-gray-100">
        {/* Product Image - Matching design reference styling */}
        <div className="relative w-full aspect-[4/3] bg-white overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Card Content - Matching design reference layout */}
        <div className="p-3 border-t border-gray-100">
          {/* Title - Matching design reference */}
          <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1 group-hover:text-[hsl(var(--accent))] transition-colors">
            {listing.title}
          </h3>

          {/* Price - Matching design reference */}
          <p className="text-lg font-bold text-gray-900 mb-1.5">
            ${listing.price}
          </p>

          {/* Rating - Matching design reference with stars */}
          <div className="flex items-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(listing.rating)
                    ? 'fill-[hsl(var(--color-star))] text-[hsl(var(--color-star))]'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
