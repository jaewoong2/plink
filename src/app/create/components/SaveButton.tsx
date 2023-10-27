import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  wrapperClassName?: string
  onCancleButtonClick?: JSX.IntrinsicElements['button']['onClick']
}

const SaveButton = ({
  className,
  children,
  wrapperClassName,
  onCancleButtonClick,
  ...props
}: Props & JSX.IntrinsicElements['button']) => {
  return (
    <div
      className={twMerge(
        'z-10 flex h-fit items-center justify-end gap-3 rounded-t-xl border bg-white px-3 py-2 transition-all max-md:hidden md:sticky md:bottom-0 md:shadow-[0_-8px_14px_-7px_rgba(0,0,0,0.25)]',
        wrapperClassName
      )}
    >
      <button className={'btn w-fit'} onClick={onCancleButtonClick} type='button'>
        취소
      </button>
      <button className={twMerge('btn-primary btn flex-1 text-white', className)} {...props}>
        {children ?? '커스텀 링크 저장하고 복사하기'}
      </button>
    </div>
  )
}

export default SaveButton
