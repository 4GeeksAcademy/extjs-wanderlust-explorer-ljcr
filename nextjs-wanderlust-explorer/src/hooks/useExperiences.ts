'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { Experience } from '@/types';

interface UseExperiencesResult {
  filteredExperiences: Experience[];
  searchTerm: string;
  selectedCategory: string | null;
  selectedDestination: string | null;
  setSearchTerm: (term: string) => void;
  setCategory: (category: string | null) => void;
  setDestination: (destination: string | null) => void;
  clearFilters: () => void;
  categories: string[];
  destinations: string[];
}

/**
 * Hook personalizado para gestionar la lógica de filtrado de experiencias.
 * Sincroniza automáticamente con los query parameters de la URL.
 *
 * Reglas de sincronización (según CONTEXT.md):
 * - Lectura: Lee parámetros iniciales de la URL al cargar
 * - Escritura: Actualiza la URL en cada cambio de filtro (sin recargar)
 * - Filtrado: Case-insensitive en búsqueda, exacto en categoría y destino
 */
export function useExperiences(experiences: Experience[]): UseExperiencesResult {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Leer parámetros de la URL (iniciales)
  const searchTerm = searchParams.get('search') ?? '';
  const selectedCategory = searchParams.get('category') ?? null;
  const selectedDestination = searchParams.get('destination') ?? null;

  // Extraer categorías y destinos únicos del dataset
  const categories = useMemo(() => {
    const cats = new Set(experiences.map((exp) => exp.category));
    return Array.from(cats).sort();
  }, [experiences]);

  const destinations = useMemo(() => {
    const dests = new Set(experiences.map((exp) => exp.destination));
    return Array.from(dests).sort();
  }, [experiences]);

  // Función auxiliar para actualizar URL sin recargar
  const updateURL = useCallback(
    (params: { search?: string; category?: string | null; destination?: string | null }) => {
      const newParams = new URLSearchParams(searchParams);

      // Actualizar search
      if ('search' in params) {
        if (params.search) {
          newParams.set('search', params.search);
        } else {
          newParams.delete('search');
        }
      }

      // Actualizar category
      if ('category' in params) {
        if (params.category) {
          newParams.set('category', params.category);
        } else {
          newParams.delete('category');
        }
      }

      // Actualizar destination
      if ('destination' in params) {
        if (params.destination) {
          newParams.set('destination', params.destination);
        } else {
          newParams.delete('destination');
        }
      }

      // Navegar sin recargar (usar replace para evitar historial innecesario)
      const newSearch = newParams.toString();
      router.push(`${pathname}?${newSearch}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  // Manejadores de cambios
  const setSearchTerm = useCallback(
    (term: string) => {
      updateURL({ search: term });
    },
    [updateURL]
  );

  const setCategory = useCallback(
    (category: string | null) => {
      updateURL({ category });
    },
    [updateURL]
  );

  const setDestination = useCallback(
    (destination: string | null) => {
      updateURL({ destination });
    },
    [updateURL]
  );

  const clearFilters = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [router, pathname]);

  // Lógica de filtrado
  const filteredExperiences = useMemo(() => {
    return experiences.filter((exp) => {
      // Filtro por búsqueda (case-insensitive regex)
      if (searchTerm) {
        const searchRegex = new RegExp(searchTerm, 'i');
        const matchesSearch =
          searchRegex.test(exp.title) ||
          searchRegex.test(exp.description) ||
          searchRegex.test(exp.destination);

        if (!matchesSearch) return false;
      }

      // Filtro por categoría (exacto)
      if (selectedCategory && exp.category !== selectedCategory) {
        return false;
      }

      // Filtro por destino (exacto)
      if (selectedDestination && exp.destination !== selectedDestination) {
        return false;
      }

      return true;
    });
  }, [experiences, searchTerm, selectedCategory, selectedDestination]);

  return {
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
  };
}
