import ExperienceCard from '@/components/ExperienceCard';
import { experiences } from '@/data/experiences';

export const metadata = {
  title: 'Showcase - ExperienceCard | Wanderlust',
  description: 'Galería de demostración del componente ExperienceCard',
};

export default function ShowcasePage() {
  // Seleccionar experiencias variadas de cada categoría
  const showcaseExperiences = experiences.slice(0, 12);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            ExperienceCard Showcase
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Galería interactiva demostrando el componente ExperienceCard. Prueba a hacer clic en
            los corazones para añadir experiencias a favoritos. Los cambios se guardan
            automáticamente en tu navegador.
          </p>
        </div>
      </section>

      {/* Showcase by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Adventure Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">🪂 Adventure</h2>
            <p className="text-slate-600">Experiencias para los más aventureros</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences
              .filter((exp) => exp.category === 'Adventure')
              .slice(0, 3)
              .map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
          </div>
        </section>

        {/* Culture Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">🏛️ Culture</h2>
            <p className="text-slate-600">Inmersión en la historia y cultura mundial</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences
              .filter((exp) => exp.category === 'Culture')
              .slice(0, 3)
              .map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
          </div>
        </section>

        {/* Food Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">🍜 Food</h2>
            <p className="text-slate-600">Experiencias gastronómicas alrededor del mundo</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences
              .filter((exp) => exp.category === 'Food')
              .slice(0, 3)
              .map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
          </div>
        </section>

        {/* Wellness Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">🧘 Wellness</h2>
            <p className="text-slate-600">Retiros y experiencias de bienestar</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences
              .filter((exp) => exp.category === 'Wellness')
              .slice(0, 3)
              .map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
          </div>
        </section>

        {/* Nature Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">🌲 Nature</h2>
            <p className="text-slate-600">Maravillas naturales y vida silvestre</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences
              .filter((exp) => exp.category === 'Nature')
              .slice(0, 3)
              .map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">✨ Características del Componente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 space-y-3">
              <div className="text-2xl">📱</div>
              <h3 className="font-semibold text-slate-900">Completamente Responsivo</h3>
              <p className="text-slate-600 text-sm">
                Se adapta perfectamente a mobile, tablet y desktop
              </p>
            </div>

            <div className="card p-6 space-y-3">
              <div className="text-2xl">❤️</div>
              <h3 className="font-semibold text-slate-900">Sistema de Favoritos</h3>
              <p className="text-slate-600 text-sm">
                Toggle de corazón con persistencia en localStorage
              </p>
            </div>

            <div className="card p-6 space-y-3">
              <div className="text-2xl">🎨</div>
              <h3 className="font-semibold text-slate-900">Colores Dinámicos</h3>
              <p className="text-slate-600 text-sm">
                Badges y gradientes según la categoría de experiencia
              </p>
            </div>

            <div className="card p-6 space-y-3">
              <div className="text-2xl">🖼️</div>
              <h3 className="font-semibold text-slate-900">Fallback de Imagen</h3>
              <p className="text-slate-600 text-sm">
                Emoji de categoría si la imagen no carga
              </p>
            </div>

            <div className="card p-6 space-y-3">
              <div className="text-2xl">⭐</div>
              <h3 className="font-semibold text-slate-900">Rating Visible</h3>
              <p className="text-slate-600 text-sm">
                Estrellas y puntuación numérica clara
              </p>
            </div>

            <div className="card p-6 space-y-3">
              <div className="text-2xl">✨</div>
              <h3 className="font-semibold text-slate-900">Efectos Suaves</h3>
              <p className="text-slate-600 text-sm">
                Transiciones smooth y hover effects elegantes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">📝 Cómo Usar</h2>

        <div className="bg-slate-900 rounded-lg overflow-hidden">
          <div className="bg-slate-800 px-4 py-3 border-b border-slate-700">
            <code className="text-slate-400 text-sm">src/components/YourComponent.tsx</code>
          </div>
          <pre className="text-slate-100 p-4 overflow-x-auto text-sm">
{`import ExperienceCard from '@/components/ExperienceCard';
import { experiences } from '@/data/experiences';

export default function MyGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} experience={exp} />
      ))}
    </div>
  );
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}
