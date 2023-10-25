'use client'
import React from 'react'
import { NextPageProps } from '@/types'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'
import { CreateLinkProvider } from './constext/createLinkContext'
import SaveButton from './components/SaveButton'

const Page = ({ searchParams }: NextPageProps<null, { link: string }>) => {
  const { link } = searchParams

  return (
    <CreateLinkProvider link={link}>
      <div className='flex w-full divide-x max-md:flex-col'>
        <LeftSection />
        <RightSection />
        <SaveButton wrapperClassName='h-[40px] z-10 hidden items-center justify-end rounded-b-xl bg-white px-3 py-10 shadow-md transition-all sticky bottom-0 max-md:flex'>
          커스텀 링크 저장하고 복사하기
        </SaveButton>
      </div>
    </CreateLinkProvider>
  )
}

export default Page
