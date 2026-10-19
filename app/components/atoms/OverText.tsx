import React from 'react'

export default function OverText({children}: {children:React.ReactNode}) {
  return (
    <p className=" font-dmSans text-[10px] uppercase tracking-[2.5px] ">{children}</p>
  )
}
