import React from 'react'

export default function TextPage({children, className}: {children: string, className?: string}) {
  return (
    <p className={` max-w-190 font-dmSans text-xs tracking-wider ${className} `}>{children}</p>
  )
}
