'use client';

import { experiences } from '@/data/experiences';
import { useFavorites } from '@/hooks/useFavorites';
import ExperienceCard from '@/components/ExperienceCard';
import Link from 'next/link';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const favoriteExperiences = experiences.filter(exp => 
    favorites.includes(exp.id)
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
            Tus Favoritos ❤️
          </h1>
          <p className="text-lg text-slate-600">
            {favoriteExperiences.length === 0
              ? 'Aún no tienes favoritos guardados.'
              : `Tienes ${favoriteExperiences.length} experiencia${favoriteExperiences.length !== 1 ? 's' : ''} guardada${favoriteExperiences.length !== 1 ? 's' : ''}.`}
          </p>
        </div>

        {favoriteExperiences.length === 0 ? (
          <div className="bg-white card text-center py-16">
            <div className="text-6xl mb-4">🤍</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Sin favoritos aún
            </h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Explora nuestro catálogo de experiencias y guarda tus favoritas para acceder a ellas rápidamente.
            </p>
            <Link 
              href="/experiences"
              className="btn-primary inline-block"
            >
              Explorar Experiencias
            </Link>
          </div>
        ) : (
          <>
            {/* Blue Alert Box */}
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💙</span>
                <div>
                  <p className="font-semibold text-blue-900">Tus experiencias favoritas</p>
                  <p className="text-sm text-blue-700">Haz clic en cualquier tarjeta para ver más detalles o quitar de favoritos.</p>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteExperiences.map(experience => (
                <ExperienceCard 
                  key={experience.id}
                  experience={experience}
                />
              ))}
            </div>

            {/* Stats Footer */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white card text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {favoriteExperiences.length}
                </div>
                <p className="text-slate-600">
                  Experiencia{favoriteExperiences.length !== 1 ? 's' : ''} Guardada{favoriteExperiences.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="bg-white card text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  ${favoriteExperiences.reduce((sum, exp) => sum + exp.price, 0)}
                </div>
                <p className="text-slate-600">Inversión Total</p>
              </div>

              <div className="bg-white card text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {new Set(favoriteExperiences.map(exp => exp.category)).size}
                </div>
                <p className="text-slate-600">Categoría{new Set(favoriteExperiences.map(exp => exp.category)).size !== 1 ? 's' : ''}</p>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 text-center">
              <Link 
                href="/experiences"
                className="text-slate-600 hover:text-slate-900 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Continuar explorando
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
