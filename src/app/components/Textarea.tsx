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
      <label htmlFor={props.id} className='dark:text-white'>
        {label}
      </label>
      <div
        className={twMerge(
          'flex w-full max-w-sm items-center rounded-lg border bg-white shadow-md max-md:max-w-xl',
          'dark:border-darkBg-100 dark:bg-darkBg-300 dark:text-white',
          props.disabled && 'cursor-not-allowed bg-slate-200 text-gray-600 dark:bg-darkBg-400',
          props.readOnly && 'cursor-not-allowed bg-slate-200 text-gray-600 dark:bg-darkBg-400'
        )}
      >
        {prefixElement}
        <textarea
          className={twMerge(
            'w-full',
            'dark:bg-darkBg-300 dark:text-white',
            'disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-gray-600 disabled:dark:bg-darkBg-400',
            'read-only:cursor-not-allowed read-only:bg-slate-200 read-only:text-gray-600 read-only:dark:bg-darkBg-400',
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

export default Textarea
