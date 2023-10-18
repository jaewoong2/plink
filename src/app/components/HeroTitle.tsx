import React, { PropsWithChildren } from 'react'

type Props = {
  topText?: React.ReactNode
  bottomText?: React.ReactNode
}

const INITIAL_PROPS: Props = {
  bottomText: (
    <>
      <p className='font-GangwonState text-xl font-semibold text-gray-600'>
        링크를 단축하고, QR Code로 만들어서 접속 통계를 확인 해요
      </p>
      <p className='font-GangwonState text-xl font-semibold text-gray-600'>링크를 커스텀 하고, 더욱 이쁘게 공유 해요</p>
    </>
  ),
  topText: <div className='pb-10 font-tossFace'>🖇️</div>,
}

const HeroTitle = ({
  children,
  topText = INITIAL_PROPS.topText,
  bottomText = INITIAL_PROPS.bottomText,
}: PropsWithChildren<Props>) => {
  return (
    <div className='text-center'>
      <div className='text-4xl font-bold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]'>
        {topText}
        <div className='bg-gradient-to-r from-blue-500 via-purple-400 to-violet-500 bg-clip-text font-GangwonState text-transparent'>
          {children}
        </div>
      </div>
      {bottomText}
    </div>
  )
}

export default HeroTitle
