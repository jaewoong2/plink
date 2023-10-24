import CardImage from '@/app/components/CardImage'
import React from 'react'
import { useCreateLinkState } from '../hooks/useCreateLink'

const RightSection = () => {
  const { description, image, url, title } = useCreateLinkState()

  return (
    <div className='w-full'>
      <div className='flex max-h-[150px] items-center justify-center border-b bg-slate-50 py-6 text-sm font-semibold text-gray-600'>
        미리보기
      </div>
      <div className='flex w-full flex-col items-center'>
        {/* 네이버 */}
        <div className='divider px-12 py-3 text-xs font-semibold text-[#05d686] before:bg-[#05d686] after:bg-[#05d686]'>
          네이버
        </div>
        <div className='h-[340px] w-[90%] overflow-hidden border' aria-label='네이버 SNS 카드'>
          <div className='h-[220px] max-h-[220px] w-auto border-b'>
            {image && <CardImage image={image} alt='preview' className='cursor-pointer object-cover' />}
          </div>
          <div className='p-[21px_26px_18px]'>
            <div aria-label='타이틀' className='max-h-[40px] text-[#333]'>
              {title}
            </div>
            <div aria-label='내용' className='line-clamp-2 max-h-[40px] text-sm text-[#999]'>
              {description}
            </div>
            <div aria-label='원본 링크 호스트 네임' className='flex items-center text-sm text-[#00a832]'>
              {description}
            </div>
          </div>
        </div>

        {/* 카카오 */}
        <div className='divider px-12 py-3 text-xs font-semibold text-[#7a753f] before:bg-[#F7E600] after:bg-[#F7E600]'>
          카카오
        </div>
        <div className='h-[340px] w-[90%] overflow-hidden border' aria-label='네이버 SNS 카드'>
          <div className='h-[220px] max-h-[220px] w-auto border-b'>
            {image && <CardImage image={image} alt='preview' className='cursor-pointer object-cover' />}
          </div>
          <div className='p-[8px_12px]'>
            <div aria-label='타이틀' className='max-h-[40px] text-[#333]'>
              {title}
            </div>
            <div aria-label='내용' className='line-clamp-2 max-h-[40px] text-[13px]  text-sm text-[#707070]'>
              {description}
            </div>
            <div aria-label='원본 링크 호스트 네임' className='flex items-center text-[12px] text-sm text-[#aaa]'>
              {url}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSection
