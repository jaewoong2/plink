'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import HeroTitle from './HeroTitle'
import Input from './Input'

const Hero = () => {
  const [link, setLink] = useState('')

  return (
    <div className='container mx-auto w-full max-w-7xl'>
      <div className='flex w-full p-5'>
        <div className='flex w-full flex-col items-center justify-center gap-2 px-4 py-6'>
          <div className='w-full py-6'>
            <HeroTitle>
              <h2 className='bg-gradient-to-r from-blue-500 via-purple-400 to-violet-500 bg-clip-text font-GangwonState text-transparent'>
                링크를 <strong className='font-GangwonState text-orange-400'>[커스텀]</strong> 하다
              </h2>
            </HeroTitle>
            <div className='flex w-full flex-col items-center justify-center gap-3 py-4'>
              <Input
                className='ml-3 h-full pl-3'
                onChange={(e) => setLink(e.target.value)}
                value={link}
                placeholder={'더 나은 마케팅을 위해 링크를 단축해보세요.'}
                postfix={
                  <Link
                    href={`/create?link=${link}`}
                    className='btn-ghost btn bg-transparent p-1 px-3 font-tossFace outline-none hover:animate-rocket hover:bg-transparent'
                  >
                    🚀
                  </Link>
                }
              />
              <div className='text-sm font-semibold'>
                온라인 마케팅을 위한 Custom URL을 <strong className='text-blue-600'>무료</strong>로 만들어보세요
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
