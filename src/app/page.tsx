'use client'
import React from 'react'
import Link from 'next/link'
import Layout from './components/Layout'
import { BiCopyAlt, BiBarChartAlt, BiDotsVerticalRounded } from 'react-icons/bi'

const PLACEHOLDER = '더 나은 마케팅을 위해 링크를 단축해보세요.'

const Page = () => {
  return (
    <Layout>
      <div className='container mx-auto w-full max-w-7xl'>
        <div className='flex w-full p-5'>
          <div className='flex w-full flex-col items-center justify-center gap-2 px-4 py-6'>
            <div className='w-full py-6'>
              <div className='text-center'>
                <div className='text-4xl font-bold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]'>
                  <div className='pb-10 font-tossFace'>🖇️</div>
                  <h2 className='bg-gradient-to-r from-blue-500 via-purple-400 to-violet-500 bg-clip-text font-GangwonState text-transparent'>
                    링크를 <strong className='font-GangwonState text-orange-400'>[커스텀]</strong> 하다
                  </h2>
                </div>
                <p className='font-GangwonState text-xl font-semibold text-gray-600'>
                  링크를 단축하고, QR Code로 만들어서 접속 통계를 확인 해요
                </p>
                <p className='font-GangwonState text-xl font-semibold text-gray-600'>
                  링크를 커스텀 하고, 더욱 이쁘게 공유 해요
                </p>
              </div>
              <div className='flex w-full flex-col items-center justify-center gap-3 py-4'>
                <div className='flex w-full max-w-sm items-center rounded-lg border bg-white shadow-md'>
                  <label className='pl-3 font-tossFace'></label>
                  <input type='text' placeholder={PLACEHOLDER} className='input w-full' />
                  <div className='h-[40px] w-[2px] bg-slate-200' />
                  <Link
                    href={'/create?link='}
                    className='btn-ghost btn bg-transparent px-3 font-tossFace outline-none hover:animate-rocket hover:bg-transparent'
                  >
                    🚀
                  </Link>
                </div>
                <div className='text-sm font-semibold'>
                  온라인 마케팅을 위한 Custom URL을 <strong className='text-blue-600'>무료</strong>로 만들어보세요
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto flex w-full max-w-sm flex-col gap-4 rounded-md bg-white px-4 py-2 shadow-md'>
        <p className='mx-auto py-2 font-semibold text-gray-600'>현재 등록 중인 링크</p>
        <div className='flex items-center justify-between rounded-md border p-2 px-3'>
          <div className='flex w-full items-center gap-3'>
            <div className='aspect-square h-16 overflow-hidden rounded-full border bg-slate-100'>
              <img
                src='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
                alt='placeholder'
                className='h-full w-auto'
              />
            </div>
            <div className='flex h-full flex-col justify-center'>
              <div className='flex items-center gap-3'>
                <Link className='link-primary link font-Pretendard text-base font-semibold' href={'#'}>
                  prl.co/RW2eEr
                </Link>
                <button className='btn-ghost btn-xs btn-circle btn'>
                  <BiCopyAlt className='rounded-full border p-1 text-2xl text-gray-500' />
                </button>
              </div>
              <Link className='link-neutral link font-Pretendard text-sm font-semibold' href={'#'}>
                https://newsubs.site
              </Link>
            </div>
          </div>
          <button className='btn-ghost btn-sm btn-circle btn'>
            <BiBarChartAlt className='text-lg font-bold text-gray-500' />
          </button>
        </div>
        <div className='flex items-center justify-between rounded-md border p-2 px-3'>
          <div className='flex w-full items-center gap-3'>
            <div className='aspect-square h-16 overflow-hidden rounded-full border bg-slate-100'>
              <img
                src='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
                alt='placeholder'
                className='h-full w-auto'
              />
            </div>
            <div className='flex h-full flex-col justify-center'>
              <div className='flex items-center gap-3'>
                <Link className='link-primary link font-Pretendard text-base font-semibold' href={'#'}>
                  prl.co/RW2eEr
                </Link>
                <button className='btn-ghost btn-xs btn-circle btn'>
                  <BiCopyAlt className='rounded-full border p-1 text-2xl text-gray-500' />
                </button>
              </div>
              <Link className='link-neutral link font-Pretendard text-sm font-semibold' href={'#'}>
                https://newsubs.site
              </Link>
            </div>
          </div>
          <button className='btn-ghost btn-sm btn-circle btn'>
            <BiBarChartAlt className='text-lg font-bold text-gray-500' />
          </button>
        </div>
        <div className='flex items-center justify-between rounded-md border p-2 px-3'>
          <div className='flex w-full items-center gap-3'>
            <div className='aspect-square h-16 overflow-hidden rounded-full border bg-slate-100'>
              <img
                src='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
                alt='placeholder'
                className='h-full w-auto'
              />
            </div>
            <div className='flex h-full flex-col justify-center'>
              <div className='flex items-center gap-3'>
                <Link className='link-primary link font-Pretendard text-base font-semibold' href={'#'}>
                  prl.co/RW2eEr
                </Link>
                <button className='btn-ghost btn-xs btn-circle btn'>
                  <BiCopyAlt className='rounded-full border p-1 text-2xl text-gray-500' />
                </button>
              </div>
              <Link className='link-neutral link font-Pretendard text-sm font-semibold' href={'#'}>
                https://newsubs.site
              </Link>
            </div>
          </div>
          <button className='btn-ghost btn-sm btn-circle btn'>
            <BiBarChartAlt className='text-lg font-bold text-gray-500' />
          </button>
        </div>
        <div className='flex items-center justify-between rounded-md border p-2 px-3'>
          <div className='flex w-full items-center gap-3'>
            <div className='aspect-square h-16 overflow-hidden rounded-full border bg-slate-100'>
              <img
                src='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
                alt='placeholder'
                className='h-full w-auto'
              />
            </div>
            <div className='flex h-full flex-col justify-center'>
              <div className='flex items-center gap-3'>
                <Link className='link-primary link font-Pretendard text-base font-semibold' href={'#'}>
                  prl.co/RW2eEr
                </Link>
                <button className='btn-ghost btn-xs btn-circle btn'>
                  <BiCopyAlt className='rounded-full border p-1 text-2xl text-gray-500' />
                </button>
              </div>
              <Link className='link-neutral link font-Pretendard text-sm font-semibold' href={'#'}>
                https://newsubs.site
              </Link>
            </div>
          </div>
          <button className='btn-ghost btn-sm btn-circle btn'>
            <BiBarChartAlt className='text-lg font-bold text-gray-500' />
          </button>
        </div>
        <div className='flex justify-center py-4  pt-2'>
          <button className='btn-ghost btn bg-transparent hover:bg-transparent'>
            <BiDotsVerticalRounded className='text-2xl' />
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Page
