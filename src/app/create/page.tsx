import React from 'react'
import { NextPageProps } from '@/types'
import { Metadata } from 'next'
import Input from '../components/Input'
import Textarea from '../components/Textarea'

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
      <div className='w-full md:max-h-[min(906px,_90vh)]'>
        <div className='flex flex-col items-center'>
          <div className='flex w-full items-center justify-center gap-3 border-b bg-slate-50 px-7 py-6'>
            <img src={data.image} className='aspect-square h-[40px] w-[40px] rounded-full' alt='link' />
            <div className='font-bold'>{data.link}</div>
          </div>
          <div className='my-2 flex w-full flex-col px-6'>
            <Input
              className='mx-2 w-full py-1.5'
              label={<p className='text-sm font-semibold text-gray-600'>원본 링크</p>}
            />
          </div>
          <div className='my-1 flex w-full flex-col px-6'>
            <Input
              prefixElement={
                <div className='flex h-full items-center justify-center'>
                  <select className='mr-2 h-full rounded-lg rounded-r-none bg-transparent px-5 text-center text-sm text-gray-400'>
                    <option className='h-full'>plink.kr</option>
                  </select>
                </div>
              }
              className='w-full rounded-r-lg border-l px-2 py-1.5'
              label={<p className='text-sm font-semibold text-gray-600'>커스텀 링크</p>}
              helper={
                <div className='flex w-full justify-end px-6 pt-2 text-xs'>
                  <button className='rounded-xl p-1 font-normal text-primary-500 transition-transform active:scale-95'>
                    랜덤 링크 생성
                  </button>
                </div>
              }
            />
          </div>
        </div>
        <div className='divider px-12 text-xs text-gray-500 before:bg-slate-100 after:bg-slate-100'>옵션</div>
        <div className='flex flex-col gap-2 px-6 pb-4'>
          <p className='text-sm font-semibold text-gray-600'>소셜 미디어</p>
          <div>
            <div className='flex w-full items-center justify-center pr-3'>
              <label
                htmlFor='dropzone-file'
                className='dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600'
              >
                <div className='flex flex-col items-center justify-center pb-6 pt-5'>
                  <svg
                    className='mb-4 h-8 w-8 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 16'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                    />
                  </svg>
                  <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                    <span className='font-semibold'>Click to upload</span> or drag and drop
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id='dropzone-file' type='file' className='hidden' />
              </label>
            </div>
          </div>
          <div className='my-2 flex w-full flex-col'>
            <Input
              className='mx-2 w-full py-1.5'
              label={<p className='text-sm font-semibold text-gray-600'>SNS 제목</p>}
            />
          </div>
          <div className='my-2 flex w-full flex-col'>
            <Textarea
              minLength={4}
              rows={4}
              className='textarea mx-2 w-full resize-none py-1.5'
              label={<p className='text-sm font-semibold text-gray-600'>SNS 내용</p>}
            />
          </div>
        </div>
      </div>
      <div className='w-full md:max-h-[min(906px,_90vh)] md:overflow-scroll'>
        <div className='flex h-full items-center justify-center text-sm font-semibold text-gray-600'>미리보기</div>
      </div>
    </>
  )
}

export default Page
