# 🌍 Bitacora - Diario de Viajes / Travel Journal Portfolio

Un archivo personal de viajes y fotografía minimalista, diseñado como un portafolio bilingüe (Español / Inglés). Construido con **Next.js (App Router)** y **Tailwind CSS**.

---

## ✨ Características Principales

- **Multilingüe (ES / EN)**: Cambio de idioma integrado mediante parámetros de búsqueda (`?lang=es` / `?lang=en`) que se conservan al navegar por los portales de los viajes.
- **Portales Dinámicos de Viajes**: Rutas dinámicas (`/journal/[slug]`) que generan una vista detallada para cada destino con su respectiva historia, fecha y galería.
- **Galería Estilo Pinterest (Columns)**: Visualización fluida de fotografías con proporciones mixtas (verticales y horizontales) sin recortes forzados ni huecos vacíos.
- **Metadatos y OpenGraph Dinámicos**: Configuración automática de SEO y tarjetas compartidas para redes sociales (WhatsApp, Twitter, etc.) adaptadas a cada viaje específico.
- **Tipografía y Estilo Elegante**: Diseñado con fuentes serif y sans-serif personalizadas (**Cormorant Garamond** y **DM Sans**) sobre Tailwind CSS.

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Lenguaje**: TypeScript / JavaScript (React)

---

## 📁 Estructura del Proyecto

```text
src/
├── app/
│   ├── data/
│   │   └── dictionary.ts      # Fuente centralizada de textos y datos de los viajes
│   ├── journal/
│   │   └── [slug]/
│   │       └── page.tsx       # Portal dinámico de detalle de cada viaje
│   ├── layout.tsx             # Layout principal y metadatos globales (OpenGraph)
│   └── page.tsx               # Landing page principal del diario
└── public/
    └── images/                # Archivos multimedia y portadas de los viajes