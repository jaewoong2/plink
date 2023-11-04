import React, { PropsWithChildren } from 'react'
import MainLayout from '@/app/components/Layout'
import Hero from '../components/Hero'
import LinkCards from '../components/LinkCards'

const Layout = async ({ children }: PropsWithChildren) => {
  return (
    <MainLayout className='overflow-hidden pb-32'>
      <Hero />
      <div className='mx-auto flex w-full max-w-sm flex-col gap-4 rounded-md bg-white px-4 py-2 shadow-md dark:border dark:border-darkBg-100 dark:bg-darkBg-300 dark:shadow-none'>
        <p className='mx-auto py-2 font-tossFace font-semibold text-gray-600 dark:text-white'>
          새롭게 등록된 커스텀 URL 이에요 😎
        </p>
        <LinkCards />
      </div>
      {children}
    </MainLayout>
  )
}

export default Layout
