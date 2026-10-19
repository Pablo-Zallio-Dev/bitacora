import React from 'react'

export default function TextPage({children}: {children: string}) {
  return (
    <p className=" max-w-190 font-dmSans text-xs text-center tracking-wider ">{children}</p>
  )
}
