import React, { PropsWithChildren } from 'react'
import MainLayout from '@/app/components/Layout'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <MainLayout className='flex h-full min-h-[calc(100vh-200px)] w-full items-center justify-center'>
      <div className='fixed left-0 top-0 z-20 h-full w-full bg-white bg-opacity-5 backdrop-blur-sm'></div>
      <div className='absolute left-1/2 top-1/2 z-20 mx-auto max-h-[80%] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-scroll rounded-xl border bg-white shadow-xl max-md:w-[90%]'>
        <div className='scrollbar-hide relative flex max-w-4xl items-stretch divide-x divide-gray-100 max-md:flex-col'>
          {children}
        </div>
      </div>
    </MainLayout>
  )
}

export default Layout
