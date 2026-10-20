import { dict } from '@/app/data/dictionary';
import React, { useEffect } from 'react'
import TextPage from '../atoms/TextPage';
import Image from 'next/image';

export default function ModalAbout({ lang, setOpenModal }: { lang: 'es' | 'en', setOpenModal: () => void }) {
      const text = dict[lang].modal;

      useEffect(() => {
            document.body.style.overflow = "hidden";
            return () => {
                  document.body.style.overflow = "unset";
            };
      }, []);
      return (
            <section className=" fixed flex justify-center items-center w-full min-h-screen px-8 bg-background/50 backdrop-blur-xs  ">
                  <div className=" w-full max-w-3xl bg-backgroundModal p-8 ">
                        <div className=" flex justify-between ">
                              <h2 className=" font-dmSans text-xs  tracking-wider uppercase ">{text.overtitle}</h2>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x preview-icon" onClick={() => setOpenModal()}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </div>
                        <div className=" flex flex-col gap-4 sm:gap-6 lg:gap-8 py-8 ">
                              <h2 className=" font-cormorantGaramond text-2xl sm:text-3xl lg:text-5xl ">{text.titleModal}</h2>
                              <TextPage className='max-w-lg leading-6 '>
                                    {text.textModal}
                              </TextPage>
                              <div className="relative w-3/4 lg:w-1/2 aspect-4/3 mx-auto ">
                                    <Image
                                          src="/images/image_modal.webp"
                                          width={600}
                                          height={400}
                                          className="w-full h-auto object-cover grayscale lg:hover:grayscale-0 transition-all duration-500  "
                                          alt=""
                                    />
                              </div>
                        </div>
                  </div>
            </section>
      )
}
