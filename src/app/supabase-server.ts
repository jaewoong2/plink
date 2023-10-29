import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/supabase'

export const createServerSupabaseClient = () =>
  createServerComponentClient<Database>(
    { cookies },
    {
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    }
  )

export async function getUrlByCustomUrl(customUrl: string) {
  const supabase = createServerSupabaseClient()

  try {
    const urls = await supabase.from('url_infos').select('*').eq('custom_url', customUrl).single()

    if (!urls.data) {
      throw new Error('No data found')
    }

    return urls
  } catch (err) {
    return null
  }
}

export async function getRegistedUrls() {
  const supabase = createServerSupabaseClient()

  try {
    const ogs = await supabase.from('url_infos').select('*').order('created_at', { ascending: false })

    if (!ogs.data) {
      throw new Error('No data found')
    }

    if (ogs.data?.length === 0) {
      throw new Error('No data found')
    }

    return ogs
  } catch (err) {
    return null
  }
}
