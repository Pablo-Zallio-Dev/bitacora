import React from 'react'

export default function Title({title, titleItalic}: {title: string, titleItalic:string}) {
  return (
    <h1 className=" font-cormorantGaramond text-5xl text-center md:text-7xl ">{title} <br /> <span className=' italic '>{titleItalic}</span> </h1>
  )
}
