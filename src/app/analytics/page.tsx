import { NextPageProps } from '@/types'
import React from 'react'
import PageViewsChart from './components/PageViewChart'
import { getReport } from './lib/getReport'

const Page = async ({ searchParams }: NextPageProps<null, { path: string }>) => {
  const { path } = searchParams
  const data = await getReport(path ?? '/')

  return (
    <div className='mt-[80px] h-full min-h-screen w-full flex-col items-center justify-center'>
      <div className='bg-white'>
        <PageViewsChart
          data={[{ date: data?.dimensionValues?.[1].value, views: +`${data?.metricValues?.[0].value}` }]}
        />
      </div>
    </div>
  )
}

export default Page
