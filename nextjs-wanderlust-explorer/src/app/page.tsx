import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                Bienvenido a Wanderlust
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Descubre Experiencias <span className="text-orange-600">Únicas</span> en el Mundo
              </h1>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Explora aventuras emocionantes, experiencias culturales, gastronomía excepcional,
              retiros de bienestar y maravillas naturales alrededor del globo. Crea tu próximo
              viaje memorable con nosotros.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link
                href="/experiences"
                className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Explorar Experiencias
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                href="/experiences?category=Adventure"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-200"
              >
                Ver Aventuras
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-slate-200">
              <div>
                <p className="text-3xl font-bold text-slate-900">100+</p>
                <p className="text-slate-600">Experiencias</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">50+</p>
                <p className="text-slate-600">Destinos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">5</p>
                <p className="text-slate-600">Categorías</p>
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="https://picsum.photos/500/600?random=hero"
                alt="Adventure Travel"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Explora por Categorías
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Desde aventuras extremas hasta experiencias culinarias, encuentra tu próxima pasión
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: 'Adventure', emoji: '🪂', color: 'from-red-500' },
              { name: 'Culture', emoji: '🏛️', color: 'from-blue-500' },
              { name: 'Food', emoji: '🍜', color: 'from-yellow-500' },
              { name: 'Wellness', emoji: '🧘', color: 'from-green-500' },
              { name: 'Nature', emoji: '🌲', color: 'from-emerald-500' },
            ].map((category, index) => (
              <Link
                key={index}
                href={`/experiences?category=${category.name}`}
                className="group relative overflow-hidden rounded-xl card"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative p-6 text-center space-y-3">
                  <div className="text-4xl">{category.emoji}</div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-white transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors">
                    Descubre aquí
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              ¿Por qué Wanderlust?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Experiencias Verificadas',
                description: 'Cada experiencia es cuidadosamente seleccionada y verificada por expertos en viajes.',
                icon: '✓',
              },
              {
                title: 'Guarda tus Favoritos',
                description: 'Guarda tus experiencias favoritas y comparte enlaces personalizados con amigos.',
                icon: '❤️',
              },
              {
                title: 'Filtrado Inteligente',
                description: 'Busca y filtra por categoría, destino, precio y rating de forma sencilla.',
                icon: '🔍',
              },
            ].map((feature, index) => (
              <div key={index} className="card p-8 text-center space-y-4">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para tu siguiente aventura?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Explora cientos de experiencias únicas seleccionadas específicamente para
            viajeros como tú.
          </p>
          <Link
            href="/experiences"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Comenzar a Explorar
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
