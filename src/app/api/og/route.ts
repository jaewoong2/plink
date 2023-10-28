import { NextRequest, NextResponse } from 'next/server'
import { getMetaTags } from '@/lib/getMetaTags'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase'
import * as uuid from 'uuid'
import { CreateLinkState } from '@/types'

export async function GET(request: NextRequest): Promise<NextResponse<null> | Response> {
  try {
    const url = new URL(request.url)
    const params = new URLSearchParams(url.search)
    const requestURL = params.get('url')

    if (!requestURL) {
      throw new Error('잘못된 URL 정보 입니다.')
    }

    const metadata = await getMetaTags(requestURL)

    if (!metadata) {
      throw new Error('Metadata 정보가 없습니다')
    }

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
    const { customURL, description, image, link, title }: CreateLinkState = await request.json()

    const { data } = await supabase.from('urls').select('*').eq('custom_url', customURL)

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

    const session = await supabase.auth.getSession()

    if (!session.data.session && (description || title || image)) {
      return NextResponse.json(
        {
          message: '로그인 후 설정 가능 합니다.',
        },
        {
          status: 401,
        }
      )
    }

    const { status } = await supabase.from('urls').insert({ custom_url: customURL, origin_url: link })

    if (session.data.session && (description || title || image)) {
      const { status } = await supabase
        .from('ogs')
        .insert({ custom_url: customURL, description, title, image, views: 0 })

      if (199 >= status && status >= 300) {
        return NextResponse.json(
          {
            message: '잘못 된 요청 입니다.',
          },
          {
            status: 401,
          }
        )
      }
    }

    if (199 < status && status < 300) {
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
