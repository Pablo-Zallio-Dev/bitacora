'use client';
import { useState, useEffect } from 'react';
import Container from './components/atoms/Container';
import Header from './components/organisms/Header';
import SectionTitle from './components/Molecules/SectionTitle';
import SectionGallery from './components/Molecules/SectionGallery';

export default function Home() {
      const [isDark, setIsDark] = useState(false);
      const [lang, setLang] = useState<'es' | 'en'>('es');

      // Al cargar la página, comprobamos si el usuario ya tenía un tema guardado
      useEffect(() => {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                  // eslint-disable-next-line react-hooks/set-state-in-effect
                  setIsDark(true);
                  document.documentElement.classList.add('dark');
            } else {
                  setIsDark(false);
                  document.documentElement.classList.remove('dark');
            }
      }, []);

      // Función para cambiar de tema al hacer clic en el botón
      const toggleTheme = () => {
            if (isDark) {
                  document.documentElement.classList.remove('dark');
                  localStorage.setItem('theme', 'light');
                  setIsDark(false);
            } else {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('theme', 'dark');
                  setIsDark(true);
            }
      };

      

      return (
            <main>
                  <Container>
                        <Header toggleTheme={toggleTheme} lang={lang} setLang={setLang} isDark={isDark} />
                        <SectionTitle lang={lang} />
                        <SectionGallery lang={lang} />
                  </Container>
                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </main>
      );
}


