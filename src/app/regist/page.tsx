import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const PLACEHOLDER =
  'https://www.google.com/search?q=%EB%A7%81%ED%81%AC%EB%A5%BC+%EC%A4%84%EC%9D%B4%EB%8A%94+%EB%B0%A9%EB%B2%95&rlz=1C5CHFA_enKR1009KR1009&oq=%EB%A7%81%ED%81%AC%EB%A5%BC+&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYPTIGCAMQRRg9MgYIBBBFGD3SAQgxODI1ajBqMagCALACAA&sourceid=chrome&ie=UTF-8'

const Page = () => {
  return (
    <Layout>
      <div>
        <div className='flex w-full flex-col items-center justify-center gap-3 py-4'>
          <label className='input-group flex max-w-md justify-center'>
            <span className='whitespace-nowrap'>원본 링크</span>
            <input type='text' placeholder={PLACEHOLDER} className='input-bordered input w-full max-w-sm' />
          </label>
          <label className='input-group flex max-w-md justify-center'>
            <span className='whitespace-nowrap border border-r-0 bg-white'>https://p-link.site/</span>
            <input type='text' placeholder={'S0V4C21'} className='input-bordered input w-full max-w-sm' />
          </label>
          <Link
            className='relative mx-auto flex h-[448px] w-[448px] flex-col items-center justify-center overflow-hidden rounded-xl border bg-white transition-transform hover:-translate-y-1'
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
          <button className='btn-primary btn w-full max-w-md'>링크 만들기</button>
        </div>
      </div>
    </Layout>
  )
}

export default Page
