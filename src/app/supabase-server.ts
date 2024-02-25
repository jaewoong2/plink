import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/supabase'
import { getMetaTags } from '@/lib/getMetaTags'
import axios from 'axios'

export const createServerSupabaseClient = () =>
  createServerComponentClient<Database>(
    { cookies },
    {
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    }
  )

export async function getUrlByCustomUrl(customUrl: string) {
  try {
    const url = process.env.NEXT_PUBLIC_CURRENT_URL ?? ''
    const urls = await axios.get(`${url}/link/search?custom_url=${decodeURIComponent(customUrl)}`)

    if (!urls.data) {
      throw new Error('No data found')
    }

    return urls.data
  } catch (err) {
    return err
  }
}

export async function getRegistedUrls(limit = 5) {
  try {
    const url = process.env.NEXT_PUBLIC_CURRENT_URL ?? ''
    const ogs = await axios.get(`${url}/link?take=${limit}`)
    if (!ogs.data) {
      throw new Error('No data found')
    }

    if (ogs.data.data.length === 0) {
      throw new Error('No data found')
    }

    const promises = ogs.data.data.map(async (value: any) => {
      // 이미 이미지가 있으면, 새로운 값을 찾지 않고 현재 값을 반환합니다.
      if (value.image) {
        return value
      }

      try {
        // 이미지가 없으면, getMetaTags를 사용하여 이미지를 가져옵니다.
        const metaTags = await getMetaTags(value.origin_url ?? '')

        return {
          ...value,
          image: metaTags?.['image'], // 안전하게 접근하기 위해 옵셔널 체이닝 사용
        }
      } catch (error) {
        console.error('Error fetching meta tags for URL:', value.origin_url, error)
        return {
          ...value,
          image: null, // 에러 발생 시, 이미지를 null로 설정합니다.
        }
      }
    })

    // Promise.all을 사용하여 모든 프로미스가 해결되기를 기다립니다.
    const ogsData = await Promise.all(promises)
    return { ...ogs, data: ogsData }
  } catch (err) {
    return null
  }
}
