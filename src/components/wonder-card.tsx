'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Wonder } from '@/lib/wonders-data';
import { Star, MapPin, Heart, Eye } from 'lucide-react';

interface WonderCardProps {
  wonder: Wonder;
}

export function WonderCard({ wonder }: WonderCardProps) {
  return (
    <Link href={`/wonders/${wonder.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
        {/* Wonder Image */}
        <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
          <Image
            src={wonder.image}
            alt={wonder.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
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

          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold bg-white/95 backdrop-blur-sm text-[hsl(var(--primary))] shadow-sm">
              {wonder.category}
            </span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-[hsl(var(--primary))] transition-colors">
            {wonder.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-3">
            <MapPin className="w-4 h-4 text-[hsl(var(--secondary))]" />
            <span className="font-medium">{wonder.location}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {wonder.description}
          </p>

          {/* Rating & Stats */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-[hsl(var(--color-star))] text-[hsl(var(--color-star))]" />
              <span className="text-sm font-semibold text-gray-900">
                {wonder.rating}
              </span>
              <span className="text-xs text-gray-500 ml-1">
                ({wonder.favorites.toLocaleString()} saves)
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Eye className="w-3.5 h-3.5" />
              <span>{wonder.views.toLocaleString()} views</span>
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              <span className="font-semibold text-gray-700">Best time:</span> {wonder.bestTimeToVisit}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
