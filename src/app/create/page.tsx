'use client'
import React from 'react'
import { NextPageProps } from '@/types'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'
import { CreateLinkProvider } from './constext/createLinkContext'

const Page = ({ searchParams }: NextPageProps<null, { link: string }>) => {
  const { link } = searchParams

  return (
    <CreateLinkProvider link={link}>
      <LeftSection />
      <RightSection />
    </CreateLinkProvider>
  )
}

export default Page
