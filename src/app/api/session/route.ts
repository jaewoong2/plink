import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })

  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)
  const show = params.get('show')

  try {
    const response = await supabase.auth.getSession()

    if (!response.data) {
      throw NextResponse.error()
    }

    if (!response.data.session) {
      throw NextResponse.error()
    }

    return NextResponse.json({ ...response, show: show === 'true' ? true : false }, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { message: '로그인 정보가 없습니다.', show: show === 'true' ? true : false },
      { status: 401 }
    )
  }
}
