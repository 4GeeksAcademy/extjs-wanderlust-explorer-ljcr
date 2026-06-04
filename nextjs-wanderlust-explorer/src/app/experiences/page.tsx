import { Suspense } from 'react';
import ExperiencesContent from '@/components/ExperiencesContent';

export const metadata = {
  title: 'Explorar Experiencias | Wanderlust',
  description: 'Descubre cientos de experiencias únicas alrededor del mundo. Busca y filtra por categoría, destino y más.',
};

function ExperiencesLoadingState() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Skeleton */}
      <div className="mb-8 sm:mb-12 space-y-3 animate-pulse">
        <div className="h-10 bg-slate-200 rounded-lg w-1/2"></div>
        <div className="h-6 bg-slate-200 rounded-lg w-1/3"></div>
      </div>

      {/* Search & Filters Skeleton */}
      <div className="space-y-6 mb-8 sm:mb-12">
        <div className="h-12 bg-slate-200 rounded-lg animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-12 bg-slate-200 rounded-lg animate-pulse"></div>
          <div className="h-12 bg-slate-200 rounded-lg animate-pulse"></div>
          <div className="h-12 bg-slate-200 rounded-lg animate-pulse"></div>
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card overflow-hidden animate-pulse">
            <div className="h-56 sm:h-64 bg-slate-200"></div>
            <div className="p-4 sm:p-5 space-y-3">
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
              <div className="h-6 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Suspense fallback={<ExperiencesLoadingState />}>
        <ExperiencesContent />
      </Suspense>
    </div>
  );
}
