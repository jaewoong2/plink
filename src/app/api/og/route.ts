import { NextRequest, NextResponse } from 'next/server'
import { getMetaTags } from '@/lib/index'

export async function GET(request: NextRequest): Promise<NextResponse<null> | Response> {
  try {
    const url = new URL(request.url)
    const params = new URLSearchParams(url.search)
    const requestURL = params.get('url')

    if (!requestURL) {
      return NextResponse.json({ message: '잘못된 URL' }, { status: 402 })
    }

    return NextResponse.json({ ...(await getMetaTags(requestURL)) }, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 401 })
    }
    return NextResponse.json({ message: '메시지 전송 실패' }, { status: 401 })
  }
}