'use client'
import React from 'react'
import { Intro } from './components/Intro'
import Link from 'next/link'
import Layout from './components/Layout'
import { BiCopyAlt } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'

const PLACEHOLDER = '더 나은 마케팅을 위해 링크를 단축해보세요.'

const Page = () => {
  return (
    <Layout>
      <div className='container mx-auto w-full max-w-7xl'>
        <div className='flex w-full p-5'>
          <div className='flex w-full flex-col items-center justify-center gap-2 px-4 py-6'>
            <div className='w-full py-6'>
              <div className='text-center'>
                <div className='mt-5 text-4xl font-bold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]'>
                  <div className='py-10 font-tossFace'>🖇️</div>
                  <h2 className='bg-gradient-to-r from-blue-500 via-purple-400 to-violet-500 bg-clip-text font-GangwonState text-transparent'>
                    우리의 링크를 <strong className='font-GangwonState text-orange-400'>[디자인]</strong> 하다 -
                  </h2>
                </div>
                <p className='font-GangwonState text-xl font-semibold text-gray-600'>
                  링크를 단축하고, QR Code로 만들어서 접속 통계를 확인 해요
                </p>
                <p className='font-GangwonState text-xl font-semibold text-gray-600'>
                  링크를 편집해, 더욱 이쁘게 공유 해요
                </p>
              </div>
              <div className='flex w-full flex-col items-center justify-center gap-3 py-4'>
                <div className='flex w-full max-w-sm items-center rounded-lg border bg-white shadow-md'>
                  <label className='pl-3 font-tossFace'></label>
                  <input type='text' placeholder={PLACEHOLDER} className='input w-full' />
                  <div className='h-[40px] w-[2px] bg-slate-200' />
                  <button className='btn-ghost btn bg-transparent px-3 font-tossFace outline-none hover:animate-wiggle-more hover:bg-transparent'>
                    🚀
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto flex w-full max-w-sm flex-col gap-4 rounded-md bg-white px-4 py-2 shadow-md'>
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
            <RxHamburgerMenu className='text-lg font-bold' />
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
            <RxHamburgerMenu className='text-lg font-bold' />
          </button>
        </div>
      </div>

      <div className='mx-auto mb-32 flex h-[120px] w-[1px]' />
      <div className='mx-auto mb-32 flex flex-col items-center rounded-lg px-6'>
        <p className='mb-4 text-3xl font-bold text-blue-600'>우리는 링크를 그냥 보내지 않습니다.</p>
        <p className='text-gray-700'>링크를 공유 할 때 이미지와 설명을 달 수 있습니다.</p>
        <p className='text-gray-700'>그런 이미지와 설명을 정해진 대로 둘 수 밖에 없을까요?</p>
        <p className='text-gray-700'>이미지와 설명을 편집하고 공유할 때 더욱 쉽게 접근 할 수 있게 공유해요.</p>
      </div>
      <div className='mx-auto mb-32 flex h-[120px] w-[1px]' />
      <section className='flex w-full items-center justify-center border-y px-6 text-center'>
        <ul className='container mx-auto flex w-full justify-center py-20 max-md:flex-col'>
          <Intro title='📝 링크에 이름을 지어주세요' index={1} subTitle='링크를 디자인하고, 리텐션을 증가시켜요' />
          <Intro
            title='💘 내가 원하는 것으로'
            index={2}
            subTitle='링크를 디자인하고, 원하는 사진과 설명으로 공유해요'
          />
          <Intro
            title='📊 프링크를 통해 통계를 확인해요'
            index={3}
            subTitle='링크를 디자인하고, 매일 어떤 유저가 접속하는지 확인해요'
          />
        </ul>
      </section>
      <div className='container mx-auto w-full max-w-7xl py-4'>
        <div className='flex w-full flex-col items-center'>
          <p className='text-lg'>현재 등록된 링크</p>
          <div className='mx-auto grid w-full grid-cols-4 gap-4 rounded-xl p-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
            <Link
              className='relative  mx-auto flex h-72 w-72 flex-col items-center justify-center overflow-hidden rounded-xl border transition-transform hover:-translate-y-1'
              href={'#'}
            >
              <div className='absolute left-0 top-0 w-full overflow-scroll truncate border py-1 text-sm opacity-50'>
                {PLACEHOLDER}
              </div>
              <div className='h-full w-full'>
                <img
                  src='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
                  alt='placeholder'
                />
              </div>
              <p className=''>설명</p>
            </Link>
            <Link
              className='relative mx-auto flex h-72 w-72 flex-col items-center justify-center overflow-hidden rounded-xl border transition-transform hover:-translate-y-1'
              href={'#'}
            >
              <div className='absolute left-0 top-0 w-full overflow-scroll truncate border py-1 text-sm opacity-50'>
                {PLACEHOLDER}
              </div>
              <div className='h-full w-full'>
                <img
                  src='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
                  alt='placeholder'
                />
              </div>
              <p className=''>설명</p>
            </Link>
            <Link
              className='relative mx-auto flex h-72 w-72 flex-col items-center justify-center overflow-hidden rounded-xl border transition-transform hover:-translate-y-1'
              href={'#'}
            >
              <div className='absolute left-0 top-0 w-full overflow-scroll truncate border py-1 text-sm opacity-50'>
                {PLACEHOLDER}
              </div>
              <div className='h-full w-full'>
                <img
                  src='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
                  alt='placeholder'
                />
              </div>
              <p className=''>설명</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
