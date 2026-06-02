# Contexto Técnico del Proyecto: Wanderlust Labs (Explorador de Experiencias)

## 1. Arquitectura y Stack Tecnológico
- **Framework:** Next.js 16 (o última versión estable utilizando el App Router).
- **Lenguaje:** TypeScript (Tipado estricto, interfaces obligatorias para los datos).
- **Estilos:** Tailwind CSS (Enfoque mobile-first y diseño responsivo).
- **Estructura de Directorios:**
  - `src/app/`: Rutas, páginas y layouts.
  - `src/components/`: Componentes reutilizables de UI (`Navbar`, `ExperienceCard`, `SearchBar`, `FilterBar`).
  - `src/data/`: Almacenamiento del dataset local (`experiences.ts`).
  - `src/hooks/`: Hooks personalizados para encapsular lógica (`useExperiences` o `useFilters`).
  - `src/types/`: Definiciones de tipos globales.

## 2. Reglas de Gestión de Estado y Datos
- **Prohibición de Librerías Externas:** No se permite el uso de Redux, Zustand, Recoil o Context API avanzada. Todo el estado global/compartido debe gestionarse mediante `useState` nativo de React en el nivel superior y distribuirse a través de props.
- **Estado de Filtros Dirigido por URL:** La barra de búsqueda y los filtros de la página `/experiences` deben sincronizarse bidireccionalmente con la URL mediante query parameters (`?search=...&category=...&destination=...`).
  - Se deben utilizar exclusivamente `useSearchParams`, `usePathname` y `useRouter` de `next/navigation`.
  - Al cargar la página, los inputs deben prerrellenarse con los valores extraídos de la URL.

## 3. Especificaciones del Dataset e Interfaces
- Se requiere una interfaz estricta llamada `Experience` en `src/types/index.ts` con la siguiente estructura:
  ```typescript
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

## 4. Diseños de inspiración
- Se toma como inspiración los diseños presentes en la carpeta img junto al DESIGN markdown.