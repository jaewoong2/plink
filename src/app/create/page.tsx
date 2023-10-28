'use client'
import React, { useEffect } from 'react'
import { NextPageProps } from '@/types'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'
import { CreateLinkProvider } from './context/createLinkContext'
import SaveButton from './components/SaveButton'
import { useRouter } from 'next/navigation'

const Page = ({ searchParams }: NextPageProps<null, { link: string }>) => {
  const { link } = searchParams
  const navigation = useRouter()

  const onCancle = () => {
    navigation.push('/')
  }

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
      <div className='absolute left-1/2 top-1/2 z-20 mx-auto max-h-[80%] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-scroll rounded-xl border bg-white shadow-xl max-lg:w-[90%]'>
        <div className='scrollbar-hide relative flex max-w-4xl items-stretch divide-x divide-gray-100 max-md:flex-col'>
          <div className='flex w-full divide-x max-md:flex-col'>
            <CreateLinkProvider link={link}>
              <LeftSection />
              <RightSection />
              <SaveButton
                onCancleButtonClick={onCancle}
                wrapperClassName='h-[40px] z-10 hidden items-center justify-end rounded-b-xl bg-white px-3 py-10 shadow-md transition-all sticky bottom-0 max-md:flex'
              >
                커스텀 링크 저장하고 복사하기
              </SaveButton>
            </CreateLinkProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
