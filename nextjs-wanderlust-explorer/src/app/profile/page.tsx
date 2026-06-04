'use client';

import { useFavorites } from '@/hooks/useFavorites';
import Link from 'next/link';

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
            Mi Perfil 👤
          </h1>
          <p className="text-lg text-slate-600">
            Gestiona tu cuenta y preferencias
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white card mb-8">
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-200">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-fd-761a to-orange-600 flex items-center justify-center text-4xl">
              ✈️
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Viajero Aventurero</h2>
              <p className="text-slate-600">Miembro desde Junio 2026</p>
            </div>
          </div>

          {/* User Info */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Email</label>
                <p className="text-slate-900">viajero@wanderlust.com</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">País</label>
                <p className="text-slate-900">España</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Teléfono</label>
                <p className="text-slate-900">+34 600 123 456</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Moneda</label>
                <p className="text-slate-900">EUR (€)</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-2">Biografía</label>
              <p className="text-slate-900">Apasionado por viajar y descubrir nuevas culturas. Busco experiencias auténticas y aventuras inolvidables.</p>
            </div>
          </div>
        </div>

        {/* Favorites Stats */}
        <div className="bg-white card mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Mis Estadísticas</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-fd-761a to-orange-600 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">{favorites.length}</div>
              <p className="text-orange-100">Experiencia{favorites.length !== 1 ? 's' : ''} Guardada{favorites.length !== 1 ? 's' : ''}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">25</div>
              <p className="text-blue-100">Experiencias Realizadas</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">4.7/5</div>
              <p className="text-green-100">Promedio de Valoración</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">15</div>
              <p className="text-purple-100">Países Visitados</p>
            </div>
          </div>

          {/* Favorites Link */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
            <p className="text-slate-600 mb-3">
              Ver todas tus experiencias guardadas:
            </p>
            <Link 
              href="/favorites"
              className="btn-primary inline-block"
            >
              Ir a Favoritos
            </Link>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white card mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Preferencias</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div>
                <p className="font-semibold text-slate-900">Notificaciones por Email</p>
                <p className="text-sm text-slate-600">Recibe actualizaciones sobre nuevas experiencias</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div>
                <p className="font-semibold text-slate-900">Newsletter Semanal</p>
                <p className="text-sm text-slate-600">Recomendaciones personalizadas cada semana</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div>
                <p className="font-semibold text-slate-900">Mostrar Perfil Públicamente</p>
                <p className="text-sm text-slate-600">Permite que otros usuarios vean tu perfil</p>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Membership */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 card mb-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl">⭐</span>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Miembro Premium</h3>
              <p className="text-blue-800 mb-4">
                Acceso exclusivo a experiencias VIP, descuentos especiales y soporte prioritario.
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Renovar Membresía
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white card">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Acciones</h3>
          
          <div className="space-y-3">
            <button className="w-full px-6 py-3 text-left font-semibold text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
              📊 Descargar mis datos
            </button>
            
            <button className="w-full px-6 py-3 text-left font-semibold text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
              🔐 Cambiar contraseña
            </button>
            
            <button className="w-full px-6 py-3 text-left font-semibold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              🚪 Cerrar sesión
            </button>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="text-slate-600 hover:text-slate-900 transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
