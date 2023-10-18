import React from 'react'
import { NextPageProps } from '@/types'
import { Metadata } from 'next'
import Input from '../components/Input'

type OG = Metadata['openGraph']

const getDataByLink = (
  link: string
): { data: { link: string; image: string; kakaotalk: OG; naver: OG; twiiter: OG } } => {
  return {
    data: {
      link: 'Link',
      image: 'https://yt3.ggpht.com/yti/ADpuP3M3y8Ak8cIZ1nlLeWZfX1dFg_sTwbW11TcX6yz-=s88-c-k-c0x00ffffff-no-rj-mo',
      kakaotalk: {
        url: 'https://prl.co/E2fcC3',
        images: 'https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png',
        title: '타이틀',
        description: '디스크립션',
      },
      naver: {
        url: 'https://prl.co/E2fcC3',
        images: 'https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png',
        title: '타이틀',
        description: '디스크립션',
      },
      twiiter: {
        url: 'https://prl.co/E2fcC3',
        images: 'https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png',
        title: '타이틀',
        description: '디스크립션',
      },
    },
  }
}

const Page = ({ searchParams }: NextPageProps<null, { link: string }>) => {
  const { link } = searchParams

  const { data } = getDataByLink(link)

  // 링크 값을 통해 소셜 값을 갖고 온다.
  // 어쩌구 저쩌구 한다

  return (
    <>
      <div className='w-full md:max-h-[min(906px,_90vh)] md:overflow-scroll'>
        <div className='flex flex-col items-center'>
          <div className='flex w-full items-center justify-center gap-3 border-b bg-slate-50 px-7 py-6'>
            <img src={data.image} className='aspect-square h-[40px] w-[40px] rounded-full' alt='link' />
            <div className='font-bold'>{data.link}</div>
          </div>
          <div className='my-1 flex w-full flex-col px-6'>
            <Input className='mx-2 w-full py-1.5' label={<p className='text-sm font-semibold'>원본주소</p>} />
          </div>
          <div className='my-1 flex w-full flex-col px-6'>
            <Input className='mx-2 w-full py-1.5' label={<p className='text-sm font-semibold'>원본주소</p>} />
          </div>
          <div className='my-1 flex w-full flex-col px-6'>
            <Input className='mx-2 w-full py-1.5' label={<p className='text-sm font-semibold'>원본주소</p>} />
          </div>
        </div>
        <div className='divider px-6 before:bg-slate-100 after:bg-slate-100'>옵션</div>
      </div>
      <div className='w-full md:max-h-[min(906px,_90vh)] md:overflow-scroll'>
        <div className='flex h-full items-center justify-center text-sm font-semibold text-gray-500'>미리보기</div>
      </div>
    </>
  )
}

export default Page
