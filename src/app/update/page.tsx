'use client'
import React, { useEffect } from 'react'
import { NextPageProps } from '@/types'
import LeftSection from '../create/components/LeftSection'
import RightSection from '../create/components/RightSection'
import { CreateLinkProvider } from '../create/context/createLinkContext'
import { useRouter } from 'next/navigation'

const Page = ({ searchParams }: NextPageProps<null, { link: string; customURL: string }>) => {
  const { link, customURL } = searchParams
  const navigation = useRouter()

  const onClickBackMask = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      navigation.push('/')
    }
  }

  useEffect(() => {
    document.querySelector('html')?.classList.add('overflow-hidden')

    return () => {
      document.querySelector('html')?.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <div
      id='mask'
      className='fixed left-0 top-0 z-20 h-full w-full bg-white bg-opacity-5 backdrop-blur-sm'
      onClick={onClickBackMask}
    >
      <div className='absolute left-1/2 top-1/2 z-20 mx-auto max-h-[80%] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-scroll rounded-xl border bg-white shadow-xl dark:border-darkBg-100 dark:bg-darkBg-300 max-lg:w-[90%]'>
        <div className='scrollbar-hide relative flex max-w-4xl items-stretch divide-x divide-gray-100 max-md:flex-col'>
          <div className='flex w-full divide-x dark:divide-darkBg-100 max-md:flex-col'>
            <CreateLinkProvider link={link} customURL={customURL} type='UPDATE'>
              <LeftSection />
              <RightSection type='UPDATE' />
            </CreateLinkProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
