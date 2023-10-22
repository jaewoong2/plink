import React from 'react'
import { NextPageProps } from '@/types'
import { Metadata } from 'next'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import CardImage from '../components/CardImage'

type OG = Metadata['openGraph']

const getDataByLink = (
  link: string
): { data: { link: string; image: string; kakaotalk: OG; naver: OG; twiiter: OG } } => {
  return {
    data: {
      link: link,
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
      <div className='z-10 hidden h-[60px] items-center justify-end rounded-t-xl bg-white px-3 py-10 shadow-md transition-all max-md:sticky max-md:top-0 max-md:flex'>
        <button className='btn h-fit w-fit rounded-xl'>커스텀 링크 저장하고 복사하기</button>
      </div>
      <div className='w-full'>
        <div className='flex flex-col items-center'>
          <div className='flex w-full items-center justify-center gap-3 border-b bg-slate-50 px-7 py-6'>
            <img src={data.image} className='aspect-square h-[40px] w-[40px] rounded-full' alt='link' />
            <div className='font-bold'>{data.link}</div>
          </div>
          <div className='my-2 flex w-full flex-col px-6'>
            <Input
              className='mx-2 w-full py-2 text-sm'
              label={<p className='text-sm font-semibold text-gray-600'>원본 링크</p>}
            />
          </div>
          <div className='my-1 flex w-full flex-col px-6'>
            <Input
              prefixElement={
                <div className='flex items-center justify-center'>
                  <select className='mr-2 rounded-lg rounded-r-none bg-transparent px-5 py-2 text-center text-sm text-gray-400'>
                    <option className='h-full'>plink.kr</option>
                  </select>
                </div>
              }
              value={link}
              readOnly
              className='w-full rounded-r-lg border-l px-2 py-1.5 text-sm'
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
        <div className='divider px-12 py-3 text-xs text-gray-500 before:bg-slate-100 after:bg-slate-100'>옵션</div>
        <p className='cursor-pointer items-center justify-between px-6 text-sm font-semibold text-gray-600 peer-checked:py-2 '>
          SNS 커스터마이징
        </p>
        <div className='flex animate-fade-in-down flex-col gap-2 px-6 py-4'>
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
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                    />
                  </svg>
                  <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                    <span className='font-semibold'>업로드</span> | 파일 내려놓기
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF</p>
                </div>
                <input id='dropzone-file' type='file' className='hidden' />
              </label>
            </div>
          </div>
          <div className='my-2 flex w-full flex-col'>
            <Input
              placeholder='오늘의 상품'
              className='mx-2 w-full py-2 text-sm'
              label={<p className='text-sm font-semibold text-gray-600'>SNS 제목</p>}
            />
          </div>
          <div className='my-2 flex w-full flex-col'>
            <Textarea
              placeholder='오늘의 상품은 테니스 공 24개입 입니다. 3500원의 즐거움. 🚀'
              rows={2}
              className='textarea mx-2 w-full resize-none px-0 py-1.5'
              label={<p className='text-sm font-semibold text-gray-600'>SNS 내용</p>}
            />
          </div>
        </div>
        <div className='z-10 flex h-[90px] items-center justify-end rounded-t-xl bg-white px-3 py-10 transition-all max-md:hidden md:sticky md:bottom-0 md:shadow-[0_-10px_10px_-7px_rgba(0,0,0,0.1)]'>
          <button className='btn h-fit w-fit rounded-xl'>커스텀 링크 저장하고 복사하기</button>
        </div>
      </div>
      <div className='w-full'>
        <div className='flex max-h-[150px] items-center justify-center border-b bg-slate-50 py-6 text-sm font-semibold text-gray-600'>
          미리보기
        </div>
        <div className='flex w-full flex-col items-center'>
          {/* 네이버 */}
          <div className='divider px-12 py-3 text-xs font-semibold text-[#05d686] before:bg-[#05d686] after:bg-[#05d686]'>
            네이버
          </div>
          <div className='h-[360px] w-[90%] overflow-hidden border' aria-label='네이버 SNS 카드'>
            <div className='h-[220px] max-h-[220px] w-auto border-b'>
              <CardImage image={data.naver?.images as string} alt='preview' className='cursor-pointer object-cover' />
            </div>
            <div className='p-[21px_26px_18px]'>
              <div aria-label='타이틀' className='max-h-[40px] text-[#333]'>
                Title
              </div>
              <div aria-label='내용' className='line-clamp-2 max-h-[40px] text-sm text-[#999]'>
                {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui repudiandae eos molestiae delectus assumenda
              porro fugit consequatur ipsum, saepe, dolorum quod animi voluptatem repellendus esse quam voluptates ea
              optio doloribus.`}
              </div>
              <div aria-label='원본 링크 호스트 네임' className='flex items-center text-sm text-[#00a832]'>
                plink.kr
              </div>
            </div>
          </div>

          {/* 카카오 */}
          <div className='divider px-12 py-3 text-xs font-semibold text-[#7a753f] before:bg-[#F7E600] after:bg-[#F7E600]'>
            카카오
          </div>
          <div className='h-[360px] w-[90%] overflow-hidden border' aria-label='네이버 SNS 카드'>
            <div className='h-[220px] max-h-[220px] w-auto border-b'>
              <CardImage image={data.naver?.images as string} alt='preview' className='cursor-pointer object-cover' />
            </div>
            <div className='p-[8px_12px]'>
              <div aria-label='타이틀' className='max-h-[40px] text-[#333]'>
                Title
              </div>
              <div aria-label='내용' className='line-clamp-2 max-h-[40px] text-[13px]  text-sm text-[#707070]'>
                {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui repudiandae eos molestiae delectus assumenda
              porro fugit consequatur ipsum, saepe, dolorum quod animi voluptatem repellendus esse quam voluptates ea
              optio doloribus.`}
              </div>
              <div aria-label='원본 링크 호스트 네임' className='flex items-center text-[12px] text-sm text-[#aaa]'>
                plink.kr
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
