import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wanderlust Explorer - Descubre Experiencias Únicas',
  description:
    'Explora y descubre experiencias únicas alrededor del mundo. Adventure, Culture, Food, Wellness y Nature en un solo lugar.',
  keywords: [
    'viajes',
    'experiencias',
    'adventure',
    'cultura',
    'comida',
    'bienestar',
    'naturaleza',
  ],
  authors: [{ name: 'Wanderlust Labs' }],
  creator: 'Wanderlust Labs',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://wanderlust-explorer.com',
    siteName: 'Wanderlust Explorer',
    title: 'Wanderlust Explorer',
    description: 'Descubre experiencias de viaje únicas en todo el mundo',
    images: [
      {
        url: 'https://picsum.photos/1200/630?random=og',
        width: 1200,
        height: 630,
        alt: 'Wanderlust Explorer',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full bg-slate-50">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
