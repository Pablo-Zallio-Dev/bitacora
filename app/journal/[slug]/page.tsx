import React from 'react';
import { dict } from '@/app/data/dictionary';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

interface TripPageProps {
      params: Promise<{
            slug: string;
      }>;
      searchParams: Promise<{
            lang?: string;
      }>;
}



export async function generateStaticParams() {
  // Obtenemos los slugs de todos los viajes definidos en el diccionario
  const slugs = dict.es.trips.map((trip) => ({
    slug: trip.slug,
  }));

  return slugs;
}


export default async function TripDetailPage({ params, searchParams }: TripPageProps) {
      const resolvedParams = await params;
      const resolvedSearch = await searchParams;

      const currentSlug = resolvedParams.slug;

      // Capturamos el idioma de la URL, si es 'en' usamos inglés, de lo contrario español por defecto
      const lang = (resolvedSearch.lang === 'en' ? 'en' : 'es') as 'es' | 'en';

      const tripsList = dict[lang].trips;

      // Buscamos el viaje que coincida con el slug de la URL
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
            <main className=" w-full max-w-325 mx-auto px-6 py-12 space-y-12 font-dmSans">
                  {/* Botón para volver conservando el idioma */}
                  <Link href={`/?lang=${lang}`} className="inline-block font-dmSans text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
                        {lang === 'es' ? '← Volver al diario' : '← Back to journal'}
                  </Link>

                  {/* Cabecera del viaje */}
                  <header className="space-y-3">
                        <span className="text-xs uppercase tracking-widest text-foreground/60">{trip.date}</span>
                        <h1 className="text-4xl sm:text-6xl font-cormorantGaramond font-normal">{trip.title}</h1>
                  </header>

                  {/* Imagen de Portada Principal */}
                  <div
                        className="w-full xl:max-w-3/4 h-[30vh] sm:h-[50vh] mx-auto bg-cover bg-center rounded-xl shadow-sm"
                        style={{ backgroundImage: `url(${trip.coverImage})` }}
                  />

                  {/* Sección de Descripción Completa */}
                  <section className=" space-y-6 text-foreground/85 leading-relaxed text-sm tracking-widest">
                        <p className=' uppercase font-black '>{trip.summary}</p>
                        <p className=" w-full max-w-2xl font-dmSans text-sm tracking-wide ">{trip.description}</p>

                  </section>

                  {/* Galería de Imágenes Adicionales */}
                  {trip.images && trip.images.length > 0 && (
                        <section className="space-y-6 pt-8 border-t border-border">
                              <h2 className="text-2xl font-cormorantGaramond">
                                    {lang === 'es' ? 'Galería del viaje' : 'Trip Gallery'}
                              </h2>

                              {/* Usamos COLUMNS en lugar de GRID */}
                              <div className="columns-1 md:columns-2 gap-6 space-y-6 py-6">
                                    {trip.images.map((imgUrl, index) => (
                                          <div key={index} className="break-inside-avoid">
                                                <Image
                                                      src={imgUrl}
                                                      alt={`${trip.title} - imagen ${index + 1}`}
                                                      width={1200}
                                                      height={1600}
                                                      className="w-full h-auto rounded-lg shadow-md/50 p-1 object-cover"
                                                />
                                          </div>
                                    ))}
                              </div>
                        </section>
                  )}
            </main>
      );
}