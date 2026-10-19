import React, { Suspense } from 'react';
import { dict } from '@/app/data/dictionary';
import Link from 'next/link';
import Image from 'next/image';

interface TripPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    lang?: string;
  }>;
}

// 1. Generamos las rutas estáticas para que Next.js sepa qué páginas compilar
export async function generateStaticParams() {
  const slugs = dict.es.trips.map((trip) => ({
    slug: trip.slug,
  }));
  return slugs;
}

// 2. Componente interno que maneja la lógica y los searchParams envuelto en Suspense
async function TripContent({ params, searchParams }: TripPageProps) {
  const resolvedParams = await params;
  const resolvedSearch = await searchParams;

  const currentSlug = resolvedParams.slug;
  const lang = (resolvedSearch.lang === 'en' ? 'en' : 'es') as 'es' | 'en';

  const tripsList = dict[lang].trips;
  const trip = tripsList.find((t) => t.slug === currentSlug);

  if (!trip) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-dmSans">
        <h1 className="text-2xl font-cormorantGaramond mb-4">
          {lang === 'es' ? 'Viaje no encontrado' : 'Trip not found'}
        </h1>
        <Link href={`/?lang=${lang}`} className="underline text-sm">
          {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-12 space-y-12 font-dmSans">
      <Link href={`/?lang=${lang}`} className="inline-block font-dmSans text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
        {lang === 'es' ? '← Volver al diario' : '← Back to journal'}
      </Link>

      <header className="space-y-3">
        <span className="text-xs uppercase tracking-widest text-foreground/60">{trip.date}</span>
        <h1 className="text-4xl sm:text-6xl font-cormorantGaramond font-normal">{trip.title}</h1>
      </header>

      <div 
        className="w-full h-[30vh] sm:h-[50vh] bg-cover bg-center rounded-xl shadow-sm"
        style={{ backgroundImage: `url(${trip.coverImage})` }}
      />

      <section className="space-y-6 text-foreground/85 leading-relaxed text-sm tracking-widest">
        <p className="uppercase font-black">{trip.summary}</p>
        <p className="w-full font-dmSans text-sm tracking-wide">{trip.description}</p>
      </section>

      {trip.images && trip.images.length > 0 && (
        <section className="space-y-6 pt-8 border-t border-border">
          <h2 className="text-2xl font-cormorantGaramond">
            {lang === 'es' ? 'Galería del viaje' : 'Trip Gallery'}
          </h2>
          <div className="columns-1 md:columns-2 gap-6 space-y-6 py-6">
            {trip.images.map((imgUrl, index) => (
              <div key={index} className="break-inside-avoid">
                <Image
                  src={imgUrl}
                  alt={`${trip.title} - ${index + 1}`}
                  width={1200}
                  height={1600}
                  className="w-full h-auto rounded-lg shadow-md object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

// 3. Componente principal que cumple con los requisitos de cacheComponents y Suspense
export default function TripDetailPage(props: TripPageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-dmSans opacity-60">Cargando...</div>}>
      <TripContent {...props} />
    </Suspense>
  );
}