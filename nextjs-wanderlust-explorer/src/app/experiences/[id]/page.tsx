'use client';

import { experiences } from '@/data/experiences';
import { useFavorites } from '@/hooks/useFavorites';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

function getCategoryEmoji(category: string): string {
  const emojis: Record<string, string> = {
    Adventure: '🪂',
    Culture: '🏛️',
    Food: '🍜',
    Wellness: '🧘',
    Nature: '🌲',
  };
  return emojis[category] || '✨';
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Adventure: 'text-red-600',
    Culture: 'text-blue-600',
    Food: 'text-yellow-600',
    Wellness: 'text-green-600',
    Nature: 'text-emerald-600',
  };
  return colors[category] || 'text-slate-600';
}

function getCategoryBadgeColor(category: string): string {
  const colors: Record<string, string> = {
    Adventure: 'bg-red-100 text-red-700',
    Culture: 'bg-blue-100 text-blue-700',
    Food: 'bg-yellow-100 text-yellow-700',
    Wellness: 'bg-green-100 text-green-700',
    Nature: 'bg-emerald-100 text-emerald-700',
  };
  return colors[category] || 'bg-slate-100 text-slate-700';
}

export default function ExperienceDetailPage() {
  const params = useParams();
  const experienceId = params?.id as string;
  const [imageError, setImageError] = useState(false);
  
  const experience = experiences.find(e => e.id === experienceId);
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = experience ? isFavorite(experience.id) : false;

  useEffect(() => {
    if (experience) {
      document.title = `${experience.title} | Wanderlust`;
    }
  }, [experience]);

  if (!experience) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">404</div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Experiencia no encontrada</h1>
          <p className="text-slate-600 mb-8">La experiencia que buscas no existe en nuestro catálogo.</p>
          <Link 
            href="/experiences"
            className="btn-primary inline-block"
          >
            Volver al Explorador
          </Link>
        </div>
      </div>
    );
  }

  const relatedExperiences = experiences
    .filter(e => e.category === experience.category && e.id !== experience.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-96 sm:h-[500px] overflow-hidden bg-slate-200">
        {!imageError ? (
          <img
            src={experience.imageUrl}
            alt={experience.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(experience.category).replace('text-', 'from-')} to-slate-400 flex items-center justify-center text-white text-8xl`}>
            {getCategoryEmoji(experience.category)}
          </div>
        )}
        
        {/* Back Button */}
        <Link 
          href="/experiences"
          className="absolute top-6 left-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
        >
          <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(experience.id)}
          className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
        >
          <span className="text-2xl">
            {isFav ? '❤️' : '🤍'}
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryBadgeColor(experience.category)}`}>
              {getCategoryEmoji(experience.category)} {experience.category}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              <span className="font-semibold text-slate-900">{experience.rating}</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {experience.title}
          </h1>

          <div className="flex items-center gap-2 text-slate-600 mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg">{experience.destination}</span>
          </div>

          <div className="text-3xl font-bold text-orange-600">
            ${experience.price}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white card mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Descripción</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            {experience.description}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white card">
            <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              Valoración
            </h3>
            <p className="text-slate-600">
              {experience.rating} / 5.0 - Altamente recomendado
            </p>
          </div>

          <div className="bg-white card">
            <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-2xl">💰</span>
              Precio
            </h3>
            <p className="text-slate-600">
              ${experience.price} por persona
            </p>
          </div>

          <div className="bg-white card">
            <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-2xl">📍</span>
              Ubicación
            </h3>
            <p className="text-slate-600">
              {experience.destination}
            </p>
          </div>

          <div className="bg-white card">
            <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-2xl">🏷️</span>
              Categoría
            </h3>
            <p className="text-slate-600">
              {experience.category}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="bg-white card mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Listo para esta experiencia?</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex-1">
              Reservar Ahora
            </button>
            <button 
              onClick={() => toggleFavorite(experience.id)}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                isFav
                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isFav ? '❤️ Agregado a Favoritos' : '🤍 Agregar a Favoritos'}
            </button>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-white card mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Compartir</h3>
          <button 
            onClick={() => {
              const url = window.location.href;
              navigator.clipboard.writeText(url);
              alert('Enlace copiado al portapapeles');
            }}
            className="w-full px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Copiar enlace
          </button>
        </div>

        {/* Related Experiences */}
        {relatedExperiences.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Experiencias Similares</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedExperiences.map(exp => (
                <Link 
                  key={exp.id} 
                  href={`/experiences/${exp.id}`}
                  className="card overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img 
                      src={exp.imageUrl} 
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-semibold ${getCategoryBadgeColor(exp.category)}`}>
                        {getCategoryEmoji(exp.category)} {exp.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm font-semibold">{exp.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1 line-clamp-2">{exp.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{exp.destination}</p>
                    <div className="text-xl font-bold text-fd-761a">${exp.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
