import { getUrlByCustomUrl } from '@/app/supabase-server'
import { isValidUrl } from '@/lib'
import { NextPageProps } from '@/types'
import { redirect } from 'next/navigation'
import Redirect from './Redirect'

export async function generateMetadata({ params }: NextPageProps<{ url: string }>) {
  const data = await getUrlByCustomUrl(params.url)

  return {
    title: data?.data.title,
    description: `${data?.data.description}`,
    openGraph: {
      title: data?.data.title,
      url: `${data?.data.origin_url}`,
      images: [data?.data.image],
      description: `${data?.data.description}`,
    },
    twitter: {
      title: data?.data.title,
      site: `${data?.data.origin_url}`,
      images: [data?.data.image],
      description: `${data?.data.description}`,
    },
  }
}

const Page = async ({ params }: NextPageProps<{ url: string }>) => {
  try {
    const url = await getUrlByCustomUrl(decodeURIComponent(params.url))

    if (url?.data.origin_url && isValidUrl(url.data.origin_url)) {
      redirect(url?.data.origin_url)
    }

    redirect('/')
  } catch (err) {
    const url = await getUrlByCustomUrl(decodeURIComponent(params.url))

    if (!(url?.data.origin_url && isValidUrl(url.data.origin_url))) {
      return <Redirect origin_url={'/'} />
    }

    return <Redirect origin_url={url?.data.origin_url} />
  }
}

export default Page
