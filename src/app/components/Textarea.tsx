import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

const SIZE = {
  small: 'h-[24px]',
  medium: 'h-[48px]',
  large: 'h-[72px]',
} as const

type Props = {
  prefixElement?: React.ReactNode
  postfix?: React.ReactNode
  label?: React.ReactNode
  variants?: keyof typeof SIZE
  helper?: React.ReactNode
}

const Textarea = ({
  label,
  prefixElement,
  postfix,
  children,
  className,
  helper,
  ...props
}: PropsWithChildren<Props & JSX.IntrinsicElements['textarea']>) => {
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <div
        className={twMerge('flex w-full max-w-sm items-center rounded-lg border bg-white shadow-md max-md:max-w-xl')}
      >
        {prefixElement}
        <textarea className={twMerge('w-full', className)} onChange={() => {}} {...props} />
        {postfix && <div className={twMerge('h-[40px] w-[2px] bg-slate-200')} />}
        {postfix}
        {children}
      </div>
      {helper}
    </>
  )
}

export default Textarea
