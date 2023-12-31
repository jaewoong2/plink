import supabaseServer from '@/lib/supabaseServer'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<NextResponse<null> | Response> {
  const supabase = supabaseServer()

  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)
  const custom_url = params.get('custom_url')

  try {
    if (!custom_url) {
      throw new Error('데이터가 없습니다')
    }

    const ogs = await supabase.from('url_infos').select('*').eq('custom_url', encodeURIComponent(custom_url)).single()

    if (!ogs.data || ogs.error) {
      throw new Error('데이터가 없습니다')
    }

    return NextResponse.json(ogs, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({}, { status: 404 })
    }
    return NextResponse.json({ message: '잘못된 요청' }, { status: 500 })
  }
}
