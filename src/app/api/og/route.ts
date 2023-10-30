import { NextRequest, NextResponse } from 'next/server'
import { getMetaTags } from '@/lib/getMetaTags'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase'
import { OGS, URLS } from '@/types'
import { isValidUrl } from '@/lib'

export async function GET(request: NextRequest): Promise<NextResponse<null> | Response> {
  try {
    const url = new URL(request.url)
    const params = new URLSearchParams(url.search)
    const requestURL = params.get('url')

    if (!requestURL) {
      throw new Error('잘못된 URL 정보 입니다.')
    }

    const metadata = await getMetaTags(requestURL)

    return NextResponse.json(metadata, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 404 })
    }
    return NextResponse.json({ message: '메시지 전송 실패' }, { status: 404 })
  }
}

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  try {
    const { custom_url, description, image, origin_url, title }: Required<OGS> & Required<URLS> = await request.json()
    const { data } = await supabase.from('urls').select('*').eq('custom_url', custom_url).single()

    if (!origin_url || !isValidUrl(origin_url)) {
      return NextResponse.json(
        {
          message: '유효하지 않은 URL 입니다.',
        },
        {
          status: 401,
        }
      )
    }

    if (data) {
      return NextResponse.json(
        {
          message: '이미 존재하는 CUSTOM_URL',
        },
        {
          status: 404,
        }
      )
    }

    const { status: urlStatus } = await supabase.from('urls').insert({ custom_url, origin_url })
    const { status: ogStatus } = await supabase.from('ogs').insert({ custom_url, description, title, image, views: 0 })

    if (199 < urlStatus && urlStatus < 300 && 199 < ogStatus && ogStatus < 300) {
      return NextResponse.json({
        status: 200,
        message: '등록 성공!',
      })
    }

    return NextResponse.json(
      {
        message: '잘못 된 요청 입니다.',
      },
      {
        status: 401,
      }
    )
  } catch (err) {}
}
