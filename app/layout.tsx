import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans  } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
      variable: "--font-cormorant-garamond",
      subsets: ["latin"]
})

const dmSans = DM_Sans({
      variable: "--font-dm-sans",
      subsets: ["latin"]
})




export const metadata: Metadata = {
  title: "Bitacora - Mis viajes, mis fotos",
  description: "Mis viajes, mis fotos",
  openGraph: {
    title: 'Diario de Viajes | Fotografías y Relatos',
    description: 'Un archivo personal de momentos congelados en el tiempo, de viajes y fotografía.',
    url: 'https://tu-dominio.com', // Reemplaza con tu dominio real o de Vercel
    siteName: 'Diario de Viajes',
    images: [
      {
        url: 'https://tu-dominio.com/images/cover-og.jpg', // Imagen horizontal recomendada (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Diario de Viajes - Portada',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diario de Viajes | Fotografías y Relatos',
    description: 'Un archivo personal de momentos congelados en el tiempo.',
    images: ['https://tu-dominio.com/images/cover-og.jpg'],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      
      className={`${dmSans.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
