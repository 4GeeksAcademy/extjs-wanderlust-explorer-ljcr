'use client';

import { useExperiences } from '@/hooks/useExperiences';
import { experiences } from '@/data/experiences';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import ExperienceCard from '@/components/ExperienceCard';

export default function ExperiencesContent() {
  const {
    filteredExperiences,
    searchTerm,
    selectedCategory,
    selectedDestination,
    setSearchTerm,
    setCategory,
    setDestination,
    clearFilters,
    categories,
    destinations,
  } = useExperiences(experiences);

  const hasActiveFilters = !!searchTerm || !!selectedCategory || !!selectedDestination;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
          Explora Experiencias
        </h1>
        <p className="text-lg text-slate-600">
          Descubre {filteredExperiences.length} experiencias
          {hasActiveFilters && ' que coinciden con tus criterios'}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-6 mb-8 sm:mb-12">
        {/* Search Bar */}
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Buscar por nombre, descripción o destino..."
        />

        {/* Filter Bar */}
        <FilterBar
          categories={categories}
          destinations={destinations}
          selectedCategory={selectedCategory}
          selectedDestination={selectedDestination}
          onCategoryChange={setCategory}
          onDestinationChange={setDestination}
          onClearFilters={clearFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      {/* Results Summary */}
      {hasActiveFilters && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm sm:text-base text-blue-900">
            <span className="font-semibold">{filteredExperiences.length}</span> resultado
            {filteredExperiences.length !== 1 ? 's' : ''} encontrado
            {filteredExperiences.length === 0
              ? ' con tus filtros'
              : ' que coinciden con tu búsqueda'}
          </p>
        </div>
      )}

      {/* Experiences Grid or Empty State */}
      {filteredExperiences.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 sm:py-20 text-center">
          <div className="space-y-4">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              No se encontraron experiencias
            </h2>
            <p className="text-slate-600 max-w-md mx-auto mb-6">
              {hasActiveFilters
                ? 'Intenta ajustar tus filtros o términos de búsqueda para encontrar lo que buscas.'
                : 'Comienza a explorar experiencias increíbles.'}
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Limpiar filtros
              </button>
            )}
          </div>
        </div>
      )}

      {/* Additional Info */}
      <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {filteredExperiences.length}
            </div>
            <p className="text-slate-600">
              Experiencia{filteredExperiences.length !== 1 ? 's' : ''} disponible
              {filteredExperiences.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {categories.length}
            </div>
            <p className="text-slate-600">Categorías</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {destinations.length}
            </div>
            <p className="text-slate-600">Destinos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
