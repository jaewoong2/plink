import React, { PropsWithChildren } from 'react'
import MainLayout from '@/app/components/Layout'

const Layout = ({ children }: PropsWithChildren) => {
  return <MainLayout className='overflow-hidden pb-32'>{children}</MainLayout>
}

export default Layout
