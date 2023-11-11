import { NextRequest, NextResponse } from 'next/server'
import { generateCredentials } from '@/lib/generateCredentials'
import { runReport } from '@/app/analytics/lib/getReport'

export async function GET(request: NextRequest) {
  try {
    await generateCredentials()
    const url = new URL(request.url)
    const params = new URLSearchParams(url.search)
    const path = params.get('path')

    const data = await runReport(`${process.env.NEXT_PUBLIC_GA_PROPOERTY_ID}`, path)

    return NextResponse.json({ message: data }, { status: 401 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 401 })
    }
    return NextResponse.json({ message: '메시지 전송 실패' }, { status: 401 })
  }
}
