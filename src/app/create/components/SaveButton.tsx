import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  wrapperClassName?: string
}

const SaveButton = ({ className, children, wrapperClassName, ...props }: Props & JSX.IntrinsicElements['button']) => {
  return (
    <div
      className={twMerge(
        'z-10 flex h-fit items-center justify-end rounded-t-xl bg-white px-3 py-2 transition-all max-md:hidden md:sticky md:bottom-0 md:shadow-[0_-8px_14px_-7px_rgba(0,0,0,0.25)]',
        wrapperClassName
      )}
    >
      <button className={twMerge('btn-primary btn w-full text-white', className)} {...props}>
        {children ?? '커스텀 링크 저장하고 복사하기'}
      </button>
    </div>
  )
}

export default SaveButton
