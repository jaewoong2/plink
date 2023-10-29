import React from 'react'
import LinkCard from './components/LinkCard'
import Hero from './components/Hero'
import Layout from './components/Layout'
import { getRegistedUrls } from './supabase-server'

const CURRENT_URL = process.env.NEXT_PUBLIC_CURRENT_URL ?? 'localhost:3000'

const Page = async () => {
  const urls = await getRegistedUrls()

  return (
    <Layout className='min-h-screen pb-32'>
      <Hero />
      <div className='mx-auto flex w-full max-w-sm flex-col gap-4 rounded-md bg-white px-4 py-2 shadow-md'>
        <p className='mx-auto py-2 font-semibold text-gray-600'>현재 등록 중인 링크</p>
        {urls?.data.map(
          (data) =>
            data && (
              <LinkCard
                key={data.custom_url}
                imageSrc={data.image ?? ''}
                customizedLink={`${CURRENT_URL}/c/${data.custom_url}` ?? ''}
                originalLink={data.origin_url ?? ''}
              />
            )
        )}
      </div>
    </Layout>
  )
}

export default Page
