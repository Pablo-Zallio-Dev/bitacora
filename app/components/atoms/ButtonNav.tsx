import React from 'react'


export default function ButtonNav({href, text}: {href: string, text: string}) {
  return (
    <a href={href} className=" py-2 border-b border-primary-foreground ">{text}</a>
  )
}
