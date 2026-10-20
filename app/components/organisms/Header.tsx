import React, { useState } from 'react'
import Logo from '../atoms/Logo'
import ButtonNav from '../atoms/ButtonNav'
import { dict } from '@/app/data/dictionary';
import { createPortal } from 'react-dom';
import ModalAbout from './ModalAbout';

export default function Header({ toggleTheme, lang, setLang, isDark }: { toggleTheme: () => void, lang: 'es' | 'en', setLang: (lang: 'es' | 'en') => void, isDark: boolean }) {

      const [openModal, setOpenModal] = useState(false)
      const text = dict[lang].nav;
      return (
            <header className=" flex flex-col sm:flex-row sm:justify-between items-center sm:py-10 my-8  border-b border-border ">
                  <Logo />

                  <div className=" flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-10 sm:pt-0  ">
                        <nav className=" flex items-start gap-6 font-dmSans text-xs">
                              <ButtonNav href="/" text={text.journal} />
                              <button className=" lg:hover:bg-hover rounded-md py-2 transition-all duration-100  " onClick={() => setOpenModal(true)} >{text.about}</button>
                        </nav>
                        <div className="  flex justify-self-start gap-18   ">

                              <button className="   absolute top-2 sm:top-0 left-6 sm:relative lg:hover:bg-hover p-2 rounded-md transition-colors duration-300 " onClick={toggleTheme}>
                                    {
                                          isDark ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sun preview-icon"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-moon preview-icon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" /></svg>
                                    }
                              </button>
                              <div className="  absolute top-2 sm:top-0 right-6 sm:relative flex items-center justify-center py-2 gap-1 sm:gap-3 cursor-pointer lg:hover:bg-hover rounded-md transition-colors duration-300 " onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className=" lucide lucide-earth preview-icon"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
                                    <div className=" flex gap-1 font-dmSans text-xs uppercase ">
                                          <p className={` ${lang === "en" ?'font-bold' :'font-light'} `}>EN</p>
                                          <p className="">/</p>
                                          <p className={` ${lang === "es" ?'font-bold' :'font-light'} `}>ES</p>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {
                        openModal && createPortal(
                              <ModalAbout lang={lang} setOpenModal={() => setOpenModal(false)} /> ,
                              document.body
                        )
                  }
            </header>
      )
}
