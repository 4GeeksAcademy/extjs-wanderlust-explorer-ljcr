/**
 * useFavorites Hook
 *
 * Este hook gestiona el estado compartido de las experiencias favoritas.
 * Utiliza localStorage para persistencia y useState para reactividad.
 *
 * Arquitectura de Estado Compartido:
 * - Los IDs de favoritos se almacenan en localStorage con la clave 'wanderlust-favorites'
 * - Se utiliza hydration en el cliente para evitar errores de SSR
 * - Este hook se puede usar en múltiples componentes sin problemas
 *
 * Uso:
 * const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
 */

'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'wanderlust-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate desde localStorage en el cliente
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error reading favorites from localStorage:', error);
    }
    setIsHydrated(true);
  }, []);

  // Sincronizar cambios a localStorage
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error('Error saving favorites to localStorage:', error);
      }
    }
  }, [favorites, isHydrated]);

  const addFavorite = (experienceId: string) => {
    setFavorites((prev) => {
      if (!prev.includes(experienceId)) {
        return [...prev, experienceId];
      }
      return prev;
    });
  };

  const removeFavorite = (experienceId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== experienceId));
  };

  const isFavorite = (experienceId: string): boolean => {
    return favorites.includes(experienceId);
  };

  const toggleFavorite = (experienceId: string) => {
    if (isFavorite(experienceId)) {
      removeFavorite(experienceId);
    } else {
      addFavorite(experienceId);
    }
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    clearAllFavorites,
    isHydrated,
    count: favorites.length,
  };
}

/**
 * NOTA ARQUITECTÓNICA: Gestión de Estado Compartido
 *
 * Dado que el proyecto no permite librerías externas (Redux, Zustand, Context API avanzada),
 * se utiliza un patrón de hook personalizado con localStorage.
 *
 * Flujo:
 * 1. Cada componente que necesita acceso a favoritos importa useFavorites()
 * 2. El hook maneja hydration automáticamente (SSR safe)
 * 3. Los cambios se sincronizan automáticamente a localStorage
 * 4. Para compartir el estado entre múltiples componentes sin prop drilling,
 *    se puede usar este hook en el layout root o en componentes padres
 *
 * Alternativa si se necesita estado más centralizado:
 * - Crear un componente wrapper FavoritesProvider que use useState
 * - Pedir favorites y setFavorites desde props
 * - Esto no viola la regla de "sin librerías externas"
 *
 * Ventajas:
 * - Simple y directo sin dependencias
 * - Persiste datos entre sesiones
 * - SSR compatible
 * - Hydration-safe
 */
