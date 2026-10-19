import React from 'react'

export default function Container({children}: {children: React.ReactNode}) {
  return (
    <section className=" w-full max-w-298 mx-auto px-5.5 md:px-16 ">{children}</section>
  )
}
