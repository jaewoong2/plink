'use client'
import Link from 'next/link'
import React from 'react'
import { BiBarChartAlt } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import CardImage from './CardImage'

type Props = {
  imageSrc: string
  customizedLink?: string
  originalLink?: string
  customURL: string | null
  options?: boolean
}

const LinkCard = ({ imageSrc, customizedLink, originalLink, customURL, options }: Props) => {
  return (
    <div className='flex min-h-[80px] items-center justify-between rounded-md border p-2 px-3 transition-all will-change-transform  hover:-translate-y-1 hover:shadow-md dark:border-darkBg-100 dark:bg-darkBg-400'>
      <div className='flex w-[90%] items-center gap-3'>
        <figure className={'h-10 w-10 overflow-hidden rounded-full border'}>
          <CardImage image={imageSrc} className='h-full w-auto object-cover' alt={'미리보기'} />
        </figure>
        <div className='flex h-full w-[calc(100%-40px)] flex-col justify-center overflow-clip'>
          <div className='flex w-full items-center gap-3'>
            <Link
              target='_blank'
              referrerPolicy='no-referrer'
              className='link-primary link line-clamp-1 text-clip break-words text-xs tracking-wide'
              href={customizedLink ?? '#'}
            >
              {decodeURIComponent(customizedLink ?? '')}
            </Link>
          </div>
          <Link
            target='_blank'
            referrerPolicy='no-referrer'
            className='link-neutral link line-clamp-2 break-words text-xs tracking-wide dark:text-gray-300'
            href={originalLink ?? '#'}
          >
            {originalLink}
          </Link>
        </div>
      </div>
      {options && (
        <div className='flex w-[10%] flex-col items-end'>
          <Link
            href={`/update?link=${originalLink}&customURL=${customURL}`}
            className='btn-ghost btn-sm btn-circle btn'
          >
            <FiSettings className='text-lg font-bold text-gray-500 dark:text-white' />
          </Link>
          <button className='btn-ghost btn-sm btn-circle btn'>
            <Link href={`/analytics?path=${customURL}`} className='btn-ghost btn-sm btn-circle btn'>
              <BiBarChartAlt className='text-lg font-bold text-gray-500 dark:text-white' />
            </Link>
          </button>
        </div>
      )}
    </div>
  )
}

export default LinkCard
