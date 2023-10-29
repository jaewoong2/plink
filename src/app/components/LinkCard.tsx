'use client'
import Link from 'next/link'
import React from 'react'
import { BiBarChartAlt } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import CardImage from './CardImage'

type Props = {
  imageSrc?: string
  customizedLink?: string
  originalLink?: string
}

const LinkCard = ({ imageSrc, customizedLink, originalLink }: Props) => {
  return (
    <div className='flex items-center justify-between rounded-md border p-2 px-3'>
      <div className='flex w-full items-center gap-3'>
        <figure className={'h-10 w-10 overflow-hidden rounded-full border'}>
          <CardImage image={imageSrc} className='h-full w-auto object-cover' alt={'미리보기'} />
        </figure>
        <div className='flex h-full flex-col justify-center'>
          <div className='flex items-center gap-3'>
            <Link className='link-primary link font-Pretendard text-sm font-semibold' href={customizedLink ?? '#'}>
              {customizedLink}
            </Link>
          </div>
          <Link className='link-neutral link font-Pretendard text-sm font-semibold' href={originalLink ?? '#'}>
            {originalLink}
          </Link>
        </div>
      </div>
      <div className='flex w-full flex-col items-end'>
        <button className='btn-ghost btn-sm btn-circle btn'>
          <FiSettings className='text-lg font-bold text-gray-500' />
        </button>
        <button className='btn-ghost btn-sm btn-circle btn'>
          <BiBarChartAlt className='text-lg font-bold text-gray-500' />
        </button>
      </div>
    </div>
  )
}

export default LinkCard
