'use client';

import { Experience } from '@/types';
import { useFavorites } from '@/hooks/useFavorites';
import Link from 'next/link';
import { useState } from 'react';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [imageError, setImageError] = useState(false);

  const isFav = isFavorite(experience.id);

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      Adventure: 'from-red-500 to-red-600',
      Culture: 'from-blue-500 to-blue-600',
      Food: 'from-yellow-500 to-amber-600',
      Wellness: 'from-green-500 to-emerald-600',
      Nature: 'from-emerald-500 to-teal-600',
    };
    return colors[category] || 'from-slate-500 to-slate-600';
  };

  const getCategoryBadgeColor = (category: string): string => {
    const colors: Record<string, string> = {
      Adventure: 'bg-red-100 text-red-700',
      Culture: 'bg-blue-100 text-blue-700',
      Food: 'bg-yellow-100 text-yellow-700',
      Wellness: 'bg-green-100 text-green-700',
      Nature: 'bg-emerald-100 text-emerald-700',
    };
    return colors[category] || 'bg-slate-100 text-slate-700';
  };

  const getCategoryEmoji = (category: string): string => {
    const emojis: Record<string, string> = {
      Adventure: '🪂',
      Culture: '🏛️',
      Food: '🍜',
      Wellness: '🧘',
      Nature: '🌲',
    };
    return emojis[category] || '✨';
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Link href={`/experiences/${experience.id}`}>
      <div className="group h-full card overflow-hidden bg-white cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 h-56 sm:h-64">
          {!imageError ? (
            <img
              src={experience.imageUrl}
              alt={experience.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              onError={handleImageError}
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(experience.category)} flex items-center justify-center`}>
              <span className="text-6xl">{getCategoryEmoji(experience.category)}</span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold ${getCategoryBadgeColor(experience.category)}`}>
              <span>{getCategoryEmoji(experience.category)}</span>
              <span>{experience.category}</span>
            </div>
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(experience.id);
            }}
            className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            title={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            aria-label={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          >
            <span className={`text-xl transition-all duration-200 ${isFav ? 'scale-125' : 'scale-100'}`}>
              {isFav ? '❤️' : '🤍'}
            </span>
          </button>

          {/* Price Badge */}
          <div className="absolute bottom-3 right-3 bg-orange-600 text-white px-3 py-1.5 rounded-lg font-bold text-sm shadow-lg">
            ${experience.price}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-4 sm:p-5 space-y-3 flex flex-col flex-1">
          {/* Destination */}
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="line-clamp-1">{experience.destination}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200 flex-grow">
            {experience.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm line-clamp-2">
            {experience.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(experience.rating)
                      ? 'text-yellow-400'
                      : 'text-slate-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-900">
              {experience.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
