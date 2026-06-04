'use client';

import { useState, useEffect } from 'react';

interface FilterBarProps {
  categories: string[];
  destinations: string[];
  selectedCategory: string | null;
  selectedDestination: string | null;
  onCategoryChange: (category: string | null) => void;
  onDestinationChange: (destination: string | null) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export default function FilterBar({
  categories,
  destinations,
  selectedCategory,
  selectedDestination,
  onCategoryChange,
  onDestinationChange,
  onClearFilters,
  hasActiveFilters,
}: FilterBarProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Cerrar menú móvil al hacer clic en un filtro
  const handleMobileSelect = (callback: () => void) => {
    callback();
    // Pequeño delay para que se vea la selección antes de cerrar
    setTimeout(() => setShowMobileFilters(false), 100);
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

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      Adventure: 'bg-red-100 text-red-700 hover:bg-red-200',
      Culture: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      Food: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
      Wellness: 'bg-green-100 text-green-700 hover:bg-green-200',
      Nature: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
    };
    return colors[category] || 'bg-slate-100 text-slate-700 hover:bg-slate-200';
  };

  return (
    <div className="space-y-4">
      {/* Desktop Filters */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Categoría
          </label>
          <select
            value={selectedCategory ?? ''}
            onChange={(e) =>
              onCategoryChange(e.target.value ? e.target.value : null)
            }
            className="input w-full appearance-none bg-right pr-8"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2345464d' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem',
            }}
            aria-label="Filtrar por categoría"
          >
            <option value="">Todas las categorías</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {getCategoryEmoji(cat)} {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Destination Filter */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Destino
          </label>
          <select
            value={selectedDestination ?? ''}
            onChange={(e) =>
              onDestinationChange(e.target.value ? e.target.value : null)
            }
            className="input w-full appearance-none bg-right pr-8"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2345464d' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem',
            }}
            aria-label="Filtrar por destino"
          >
            <option value="">Todos los destinos</option>
            {destinations.map((dest) => (
              <option key={dest} value={dest}>
                {dest}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        <div className="flex items-end">
          {hasActiveFilters ? (
            <button
              onClick={onClearFilters}
              className="btn-secondary w-full"
              aria-label="Limpiar todos los filtros"
            >
              Limpiar filtros
            </button>
          ) : (
            <div className="text-sm text-slate-500 italic">
              Usa los filtros arriba para refinar la búsqueda
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Button */}
      <div className="md:hidden">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-full btn-secondary flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filtros
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${
              showMobileFilters ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>

        {showMobileFilters && (
          <div className="mt-4 space-y-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Categoría
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleMobileSelect(() => onCategoryChange(null))}
                  className={`chip ${!selectedCategory ? 'active' : ''}`}
                >
                  Todas
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleMobileSelect(() => onCategoryChange(cat))}
                    className={`chip ${selectedCategory === cat ? 'active' : ''} ${getCategoryColor(cat)}`}
                  >
                    {getCategoryEmoji(cat)} {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Destino
              </label>
              <select
                value={selectedDestination ?? ''}
                onChange={(e) =>
                  handleMobileSelect(() =>
                    onDestinationChange(e.target.value ? e.target.value : null)
                  )
                }
                className="input w-full appearance-none bg-right pr-8"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2345464d' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem',
                }}
                aria-label="Filtrar por destino"
              >
                <option value="">Todos los destinos</option>
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <button
                onClick={() =>
                  handleMobileSelect(() => onClearFilters())
                }
                className="btn-secondary w-full text-sm"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-slate-600 font-medium">Filtros activos:</span>
          {selectedCategory && (
            <span className={`chip active ${getCategoryColor(selectedCategory)}`}>
              {getCategoryEmoji(selectedCategory)} {selectedCategory}
              <button
                onClick={() => onCategoryChange(null)}
                className="ml-1 hover:opacity-70"
                aria-label={`Quitar filtro de categoría ${selectedCategory}`}
              >
                ✕
              </button>
            </span>
          )}
          {selectedDestination && (
            <span className="chip active bg-blue-100 text-blue-700 hover:bg-blue-200">
              📍 {selectedDestination}
              <button
                onClick={() => onDestinationChange(null)}
                className="ml-1 hover:opacity-70"
                aria-label={`Quitar filtro de destino ${selectedDestination}`}
              >
                ✕
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
