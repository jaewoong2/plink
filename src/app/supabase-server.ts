import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/supabase'
import { NextResponse } from 'next/server'

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
    const urls = await supabase.from('url_infos').select('*').eq('custom_url', decodeURIComponent(customUrl)).single()

    if (!urls.data) {
      throw new Error('No data found')
    }

    return urls
  } catch (err) {
    return null
  }
}

export async function getRegistedUrls(limit = 5) {
  const supabase = createServerSupabaseClient()

  try {
    const ogs = await supabase.from('url_infos').select('*').order('created_at', { ascending: false }).limit(limit)

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

export async function getSession() {
  const supabase = createServerSupabaseClient()

  try {
    const response = await supabase.auth.getSession()

    if (!response.data) {
      throw new Error('No data found')
    }

    if (!response.data?.session) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {
    return null
  }
}
