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

  status?: 'SUCCESS' | 'ERROR' | 'NORMAL'
}

const Input = ({
  label,
  prefixElement,
  postfix,
  children,
  className,
  helper,
  status = 'NORMAL',
  ...props
}: PropsWithChildren<Props & JSX.IntrinsicElements['input']>) => {
  return (
    <>
      {label && <label htmlFor={props.id}>{label}</label>}
      <div
        className={twMerge(
          'flex w-full max-w-sm items-center rounded-lg border bg-white shadow-md max-md:max-w-xl',
          'dark:border-darkBg-100 dark:bg-darkBg-300 dark:shadow-none',
          props.disabled && 'cursor-not-allowed bg-slate-200 text-gray-600 dark:bg-darkBg-400',
          props.readOnly && 'cursor-not-allowed bg-slate-200 text-gray-600 dark:bg-darkBg-400',
          status === 'SUCCESS' && '',
          status === 'ERROR' && 'border-red-400 '
        )}
      >
        {prefixElement}
        <input
          type='text'
          className={twMerge(
            'w-full',
            'disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-gray-600 disabled:dark:bg-darkBg-400',
            'read-only:cursor-not-allowed read-only:bg-slate-200 read-only:text-gray-600 read-only:dark:bg-darkBg-400',
            'dark:bg-darkBg-300 dark:text-white max-sm:text-[16px]',
            className
          )}
          value={''}
          {...props}
        />
        {postfix && (
          <p
            className={twMerge(
              'h-[40px] w-[2px] bg-slate-200 ',
              'dark:bg-darkBg-100',
              status === 'ERROR' && 'bg-red-200 '
            )}
          />
        )}
        {postfix}
        {children}
      </div>
      {helper}
    </>
  )
}

export default Input
