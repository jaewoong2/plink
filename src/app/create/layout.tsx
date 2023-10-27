import React, { PropsWithChildren } from 'react'
import MainLayout from '@/app/components/Layout'
import Hero from '../components/Hero'
import LinkCard from '../components/LinkCard'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <MainLayout className='overflow-hidden pb-32'>
      <Hero />
      <div className='mx-auto flex w-full max-w-sm flex-col gap-4 rounded-md bg-white px-4 py-2 shadow-md'>
        <p className='mx-auto py-2 font-semibold text-gray-600'>현재 등록 중인 링크</p>
        <LinkCard
          imageSrc='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
          customizedLink='prl.co/RW2eEr'
          originalLink='https://newsubs.site'
        />
        <LinkCard
          imageSrc='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
          customizedLink='prl.co/RW2eEr'
          originalLink='https://newsubs.site'
        />
        <LinkCard
          imageSrc='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
          customizedLink='prl.co/RW2eEr'
          originalLink='https://newsubs.site'
        />
        <LinkCard
          imageSrc='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
          customizedLink='prl.co/RW2eEr'
          originalLink='https://newsubs.site'
        />
      </div>
      {children}
    </MainLayout>
  )
}

export default Layout
