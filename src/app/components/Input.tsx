import React, { PropsWithChildren } from 'react'

type Props = {
  prefix?: React.ReactNode
  postfix?: React.ReactNode
  label?: React.ReactNode
}

const Input = ({
  label,
  prefix,
  postfix,
  children,
  ...props
}: PropsWithChildren<Props & JSX.IntrinsicElements['input']>) => {
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <div className='flex w-full max-w-sm items-center rounded-lg border bg-white shadow-md'>
        {prefix && <div className='pl-3 font-tossFace'>{prefix}</div>}
        <input type='text' className='input w-full' {...props} />
        {postfix && <div className='h-[40px] w-[2px] bg-slate-200' />}
        {postfix && <div className='px-3'>{postfix}</div>}
        {children}
      </div>
    </>
  )
}

export default Input
