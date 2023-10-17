import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import Footer from './Footer'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='hero-background z-10 min-h-screen w-full'>
      <nav className='fixed inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/25 p-3 backdrop-blur-lg transition-all'>
        <Link className='font-GangwonState' href={'/'}>
          PLINK_
        </Link>
      </nav>
      <main className='min-h-screen pb-20 pt-20'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
