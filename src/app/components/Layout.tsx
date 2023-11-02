import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import Footer from './Footer'
import ThemeToogleButton from './ToogleThemeButton'

const Layout = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className='hero-background z-10 min-h-screen w-full dark:bg-darkBg-600'>
      <nav className='fixed inset-x-0 top-0 z-30 flex w-full items-center justify-between border-b border-gray-200 bg-white/25 p-3 backdrop-blur-lg transition-all dark:border-darkBg-200 dark:bg-darkBg-300/10'>
        <Link className='font-GangwonState dark:text-white' href={'/'}>
          PLINK_
        </Link>
        <ThemeToogleButton />
      </nav>
      <main className={className}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
