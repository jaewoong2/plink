import React, { PropsWithChildren } from 'react'
import MainLayout from '@/app/components/Layout'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <MainLayout className='flex h-full min-h-screen w-full items-center justify-center'>
      <div className='w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg'>
        <div className='scrollbar-hide grid max-h-[80vh] max-w-4xl divide-x divide-gray-100 overflow-scroll md:max-h-[min(906px,_70vh)] md:grid-cols-2'>
          {children}
        </div>
      </div>
    </MainLayout>
  )
}

export default Layout
