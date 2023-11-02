import React, { PropsWithChildren } from 'react'
import MainLayout from '@/app/components/Layout'
import Hero from '../components/Hero'
import { getRegistedUrls } from '../supabase-server'
import LinkCards from '../components/LinkCards'

const Layout = async ({ children }: PropsWithChildren) => {
  const urls = await getRegistedUrls()

  return (
    <MainLayout className='overflow-hidden pb-32'>
      <Hero />
      <div className='mx-auto flex w-full max-w-sm flex-col gap-4 rounded-md bg-white px-4 py-2 shadow-md dark:border dark:border-darkBg-100 dark:bg-darkBg-300 dark:shadow-none'>
        <p className='mx-auto py-2 font-semibold text-gray-600 dark:text-white'>현재 등록 중인 링크</p>
        <LinkCards initDatas={urls?.data ?? []} />
      </div>
      {children}
    </MainLayout>
  )
}

export default Layout
