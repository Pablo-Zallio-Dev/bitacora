import { dict } from '@/app/data/dictionary';
import React from 'react'
import TripCard from './TripCard';

export default function SectionGallery({lang}: {lang: 'es' | 'en'}) {
            const tripsList = dict[lang].trips;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12 ">
      {tripsList.map((trip) => (
        <TripCard
          key={trip.slug}
          slug={trip.slug}
          title={trip.title}
          description={trip.description}
          date={trip.date}
          summary={trip.summary}
          coverImage={trip.coverImage}
          lang={lang}
        />
      ))}
    </section>
  )
}
