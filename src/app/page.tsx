import React from 'react'
import { Intro } from './components/Intro'
import Link from 'next/link'
import Layout from './components/Layout'

const PLACEHOLDER =
  'https://www.google.com/search?q=%EB%A7%81%ED%81%AC%EB%A5%BC+%EC%A4%84%EC%9D%B4%EB%8A%94+%EB%B0%A9%EB%B2%95&rlz=1C5CHFA_enKR1009KR1009&oq=%EB%A7%81%ED%81%AC%EB%A5%BC+&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYPTIGCAMQRRg9MgYIBBBFGD3SAQgxODI1ajBqMagCALACAA&sourceid=chrome&ie=UTF-8'

const Page = () => {
  return (
    <Layout>
      <div className='container mx-auto w-full max-w-7xl'>
        <div className='flex w-full p-5'>
          <div className='flex w-full flex-col items-center justify-center gap-2 px-4 py-6'>
            <div className='w-full py-6'>
              <div className='text-center'>
                <h2 className='pb-4 text-4xl font-semibold'>
                  우리의 링크를 <strong className='text-blue-700'>[디자인]</strong> 하다
                </h2>
                <p className='text-lg font-semibold text-gray-600'>
                  링크를 단축하고, QR Code로 만들어서 접속 통계를 확인 해요
                </p>
                <p className='text-lg font-semibold text-gray-600'>링크를 편집해, 더욱 이쁘게 공유 해요</p>
                <p className='pt-6 text-2xl font-semibold text-blue-600'>오직, 프링크에서</p>
              </div>
              <div className='flex w-full flex-col items-center justify-center gap-3 py-4'>
                <label className='input-group flex justify-center'>
                  <span>링크</span>
                  <input type='text' placeholder={PLACEHOLDER} className='input-bordered input w-full max-w-sm' />
                </label>
                <button className='btn-primary btn w-fit'>링크 만들기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto mb-32 flex h-[120px] w-[1px] bg-gray-800' />
      <div className='mx-auto mb-32 flex flex-col items-center rounded-lg bg-white px-6'>
        <p className='mb-4 text-3xl font-bold text-blue-600'>우리는 링크를 그냥 보내지 않습니다.</p>
        <p className='text-gray-700'>링크를 공유 할 때 이미지와 설명을 달 수 있습니다.</p>
        <p className='text-gray-700'>그런 이미지와 설명을 정해진 대로 둘 수 밖에 없을까요?</p>
        <p className='text-gray-700'>이미지와 설명을 편집하고 공유할 때 더욱 쉽게 접근 할 수 있게 공유해요.</p>
      </div>
      <div className='mx-auto mb-32 flex h-[120px] w-[1px] bg-gray-800' />
      <section className='flex w-full items-center justify-center border-y px-6 text-center dark:border-darkBg-200 dark:bg-darkBg-400'>
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
              className='relative  mx-auto flex h-72 w-72 flex-col items-center justify-center overflow-hidden rounded-xl border bg-white transition-transform hover:-translate-y-1'
              href={'#'}
            >
              <div className='absolute left-0 top-0 w-full overflow-scroll truncate border bg-slate-100 py-1 text-sm opacity-50'>
                {PLACEHOLDER}
              </div>
              <div className='h-full w-full bg-white'>
                <img
                  src='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
                  alt='placeholder'
                />
              </div>
              <p className=''>설명</p>
            </Link>
            <Link
              className='relative mx-auto flex h-72 w-72 flex-col items-center justify-center overflow-hidden rounded-xl border bg-white transition-transform hover:-translate-y-1'
              href={'#'}
            >
              <div className='absolute left-0 top-0 w-full overflow-scroll truncate border bg-slate-100 py-1 text-sm opacity-50'>
                {PLACEHOLDER}
              </div>
              <div className='h-full w-full bg-white'>
                <img
                  src='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
                  alt='placeholder'
                />
              </div>
              <p className=''>설명</p>
            </Link>
            <Link
              className='relative mx-auto flex h-72 w-72 flex-col items-center justify-center overflow-hidden rounded-xl border bg-white transition-transform hover:-translate-y-1'
              href={'#'}
            >
              <div className='absolute left-0 top-0 w-full overflow-scroll truncate border bg-slate-100 py-1 text-sm opacity-50'>
                {PLACEHOLDER}
              </div>
              <div className='h-full w-full bg-white'>
                <img
                  src='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png'
                  alt='placeholder'
                />
              </div>
              <p className=''>설명</p>
            </Link>
            <Link
              className='relative mx-auto flex h-72 w-72 flex-col items-center justify-center overflow-hidden rounded-xl border bg-white transition-transform hover:-translate-y-1'
              href={'#'}
            >
              <div className='absolute left-0 top-0 w-full overflow-scroll truncate border bg-slate-100 py-1 text-sm opacity-50'>
                {PLACEHOLDER}
              </div>
              <div className='h-full w-full bg-white'>
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
