import Link from 'next/link';
import React from 'react'

interface TripCardProps {
      slug: string;
      title: string;
      date: string;
      summary: string;
      description: string;
      coverImage: string;
      lang: string
}

export default function TripCard({ slug, title, date, coverImage, lang }: TripCardProps) {
      return (
            <Link className=" overflow-hidden group" href={`/journal/${slug}?lang=${lang}`}>
                  <div className="w-full h-60 bg-cover bg-center group-hover:scale-105  transition-all duration-200   " style={{ backgroundImage: 'url(' + coverImage + ')' }} />
                  <div className=" flex justify-between mt-4 ">
                        <div className=" flex flex-col gap-1.5 ">
                              <p className=" font-cormorantGaramond text-3xl ">{title}</p>
                              <p className=" font-dmSans text-xs text-muted ">{date}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={` lucide lucide-arrow-up-right preview-icon mr-1 mt-1 group-hover:mr-0 group-hover:mt-0 transition-all duration-200 `}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </div>
            </Link>
      )
}
