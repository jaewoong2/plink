import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='z-10 h-full w-full'>
      <div className='fixed inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/25 p-3 backdrop-blur-lg transition-all'>
        <Link className='font-GangwonState' href={'/'}>
          PLINK_
        </Link>
      </div>
      <main className='hero-background'>{children}</main>
    </div>
  )
}

export default Layout
