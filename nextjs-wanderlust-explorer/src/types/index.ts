/**
 * Type definitions for Wanderlust Explorer
 */

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';
  destination: string; // Ciudad + País
  price: number;
  rating: number;
  imageUrl: string;
}

export type Category = Experience['category'];

export interface FilterParams {
  search?: string;
  category?: Category;
  destination?: string;
  priceMin?: number;
  priceMax?: number;
}
