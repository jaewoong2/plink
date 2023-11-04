'use client'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import useIsLoggedIn from '../create/hooks/useIsLoggedIn'

const AuthButton = ({ className, isLogin }: JSX.IntrinsicElements['button'] & { isLogin?: boolean }) => {
  const { isLoggedIn: isLoggedIn_, check, isLoading } = useIsLoggedIn()

  const url = typeof window === 'undefined' ? '' : window.location.href

  const onClickSignInButton = () => {
    if (isLogin) return
    check()
  }

  const isLoggedIn = isLogin || isLoggedIn_

  return (
    <>
      {isLoading && (
        <div
          className={twMerge(
            'loading loading-dots cursor-not-allowed list-none rounded-xl px-3 py-3 text-left text-sm font-bold hover:bg-slate-50 dark:hover:bg-darkBg-100',
            className
          )}
        ></div>
      )}
      {!isLoading && isLoggedIn && (
        <Link
          className={twMerge(
            'cursor-pointer list-none rounded-xl px-3 py-3 text-left text-sm font-bold hover:bg-slate-50 dark:hover:bg-darkBg-100',
            className
          )}
          href={`/auth/signout?redirectUrl=${url}`}
        >
          <button className=' text-black dark:text-white' aria-label='로그아웃'>
            로그아웃
          </button>
        </Link>
      )}
      {!isLoading && !isLoggedIn && (
        <button
          className={twMerge(
            'cursor-pointer list-none rounded-xl px-3 py-3 text-left text-sm font-bold hover:bg-slate-50 dark:hover:bg-darkBg-100',
            className
          )}
          aria-label='로그인'
          onClick={onClickSignInButton}
        >
          로그인
        </button>
      )}
    </>
  )
}

export default React.memo(AuthButton)
