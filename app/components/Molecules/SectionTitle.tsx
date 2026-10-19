import React from 'react'
import OverText from '../atoms/OverText'
import { dict } from '@/app/data/dictionary';
import Title from '../atoms/Title';
import TextPage from '../atoms/TextPage';

export default function SectionTitle({lang}: {lang: 'es' | 'en'}) {
      const text = dict[lang].page;
  return (
    <div className=" w-full flex flex-col items-center py-16 gap-5 border-b border-border ">
      <OverText>
            {text.overTitle}
      </OverText>
      <Title title={text.title} titleItalic={text.titleItalic} />
      <TextPage>{text.text}</TextPage>
      
    </div>
  )
}
