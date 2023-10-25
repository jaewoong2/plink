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

const Input = ({
  label,
  prefixElement,
  postfix,
  children,
  className,
  helper,
  ...props
}: PropsWithChildren<Props & JSX.IntrinsicElements['input']>) => {
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <div
        className={twMerge(
          'flex w-full max-w-sm items-center rounded-lg border bg-white shadow-md max-md:max-w-xl',
          props.disabled && 'cursor-not-allowed bg-slate-200 text-gray-600'
        )}
      >
        {prefixElement}
        <input
          type='text'
          className={twMerge(
            'w-full',
            'disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-gray-600',
            className
          )}
          onChange={() => {}}
          {...props}
        />
        {postfix && <div className={twMerge('h-[40px] w-[2px] bg-slate-200')} />}
        {postfix}
        {children}
      </div>
      {helper}
    </>
  )
}

export default Input
