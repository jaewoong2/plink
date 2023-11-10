'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import Input from './Input'
import { isValidUrl } from '@/lib'
import HeroTitle from './HeroTitle'

const Hero = () => {
  const [link, setLink] = useState('')
  const [isError, setIsError] = useState(false)

  const onChangeLink: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setLink(event.target.value)

    if (!isValidUrl(event.target.value)) {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }

  return (
    <div className='container mx-auto flex w-full max-w-7xl items-center'>
      <div className='flex w-full p-5'>
        <div className='flex w-full flex-col items-center justify-center gap-2 px-4 py-6'>
          <div className='w-full py-6'>
            <HeroTitle></HeroTitle>
            <form
              onSubmit={(event) => {
                event.preventDefault()
              }}
              className='flex w-full flex-col items-center justify-center py-4'
            >
              <Input
                onChange={onChangeLink}
                status={isError ? 'ERROR' : 'NORMAL'}
                className={'ml-3 h-full py-3 pl-3'}
                value={link}
                placeholder={'더 나은 마케팅을 위해 URL을 단축해보세요.'}
                helper={
                  isError && (
                    <p className='absolute flex w-full max-w-sm animate-fade-down justify-end p-0 text-xs text-red-400'>
                      유효한 URL을 작성 해주세요
                    </p>
                  )
                }
                postfix={
                  <Link
                    onClick={(event) => {
                      if (isError) {
                        event.preventDefault()
                      }
                    }}
                    href={`/create?link=${link}`}
                    className='btn-ghost btn bg-transparent p-1 px-3 font-tossFace outline-none hover:animate-rocket hover:bg-transparent'
                  >
                    <button type='submit'>🚀</button>
                  </Link>
                }
              />
              <div className='py-6 text-sm font-semibold dark:text-white'>
                온라인 마케팅을 위한 Custom URL을 <strong className='text-blue-600'>무료</strong>로 만들어보세요
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
