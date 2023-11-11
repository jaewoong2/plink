import { getUrlByCustomUrl } from '@/app/supabase-server'
import { isValidUrl } from '@/lib'
import { NextPageProps } from '@/types'
import { redirect, RedirectType } from 'next/navigation'
import Redirect from './Redirect'

export async function generateMetadata({ params }: NextPageProps<{ url: string }>) {
  const data = await getUrlByCustomUrl(params.url)

  return {
    title: data?.data?.title,
    description: `${data?.data?.description}`,
    openGraph: {
      title: data?.data?.title,
      url: `${data?.data?.origin_url}`,
      images: [data?.data?.image],
      description: `${data?.data?.description}`,
    },
    twitter: {
      title: data?.data?.title,
      site: `${data?.data?.origin_url}`,
      images: [data?.data?.image],
      description: `${data?.data?.description}`,
    },
  }
}

const Page = async ({ params }: NextPageProps<{ url: string }>) => {
  const url = await getUrlByCustomUrl(params.url)

  if (url?.data?.origin_url && isValidUrl(url.data.origin_url)) {
    redirect(new URL(url?.data.origin_url).href, RedirectType.replace)
  }

  return <Redirect origin_url={url?.data?.origin_url} />
}

export default Page
