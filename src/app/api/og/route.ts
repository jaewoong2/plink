import { NextRequest, NextResponse } from 'next/server'
import { getMetaTags } from '@/lib/getMetaTags'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase'
import { OGS, URLS, URLS_INFOS } from '@/types'
import { isValidUrl } from '@/lib'

export const dynamic = 'force-dynamic'

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
    const response = await supabase.auth.getSession()

    if (!response.data.session || response.error) {
      return NextResponse.json({
        status: 200,
        message: '등록이 완료 되었어요 :)',
      })
    }

    const { status: ogStatus } = await supabase
      .from('ogs')
      .insert({ custom_url, description, title, image, user_id: response.data.session.user.id, views: 0 })

    if (199 < urlStatus && urlStatus < 300 && 199 < ogStatus && ogStatus < 300) {
      return NextResponse.json({
        status: 200,
        message: '등록이 완료 되었어요 :)',
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

export async function PATCH(request: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  try {
    const response = await supabase.auth.getSession()

    if (!response.data.session || response.error) {
      return NextResponse.json(
        {
          message: '로그인 후 수정 가능해요',
        },
        {
          status: 401,
        }
      )
    }

    const { custom_url, description, image, origin_url, title, urls_id, ogs_id }: Required<URLS_INFOS> =
      await request.json()

    if (!custom_url || !urls_id || !ogs_id) {
      return NextResponse.json(
        {
          message: '잘못 된 요청 입니다.',
        },
        {
          status: 401,
        }
      )
    }

    const { data } = await supabase.from('urls').select('*').eq('custom_url', custom_url).neq('id', urls_id).single()

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

    const { status: urlStatus } = await supabase.from('urls').update({ custom_url, origin_url }).eq('id', urls_id)

    if ((!response.data || response.error) && 199 < urlStatus && urlStatus < 300) {
      return NextResponse.json({
        status: 200,
        message: '저장이 완료 되었어요 :)',
      })
    }

    const { status: ogStatus } = await supabase
      .from('ogs')
      .update({ custom_url, description, title, image, views: 0 })
      .eq('id', ogs_id)
      .eq('user_id', response.data.session.user.id)

    if (199 < urlStatus && urlStatus < 300 && 199 < ogStatus && ogStatus < 300) {
      return NextResponse.json({
        status: 200,
        message: '저장이 완료 되었어요 :)',
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
  } catch (err) {
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
