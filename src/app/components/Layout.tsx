import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import Footer from './Footer'
import ThemeToogleButton from './ToogleThemeButton'
import AuthModal from './AuthModal'
import AuthButton from './AuthButton'
import { getSession } from '../supabase-server'

const Layout = async ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  const session = await getSession()

  return (
    <div className='hero-background min-h-screen w-full dark:bg-darkBg-600'>
      <nav className='fixed inset-x-0 top-0 z-30 flex w-full items-center justify-between border-b border-gray-200 bg-white/25 p-3 backdrop-blur-lg transition-all dark:border-darkBg-200 dark:bg-darkBg-300/10'>
        <Link className='font-GangwonState dark:text-white' href={'/'}>
          {process.env.NEXT_PUBLIC_NAME}
        </Link>
        <div className='flex items-center gap-5'>
          <AuthButton isLogin={Boolean(session?.data.session)} />
          <ThemeToogleButton />
        </div>
      </nav>
      <main className={className}>{children}</main>
      <Footer />
      <AuthModal />
    </div>
  )
}

export default Layout
