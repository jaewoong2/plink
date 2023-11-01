import { cookies } from 'next/headers'
import { Database } from '@/types/supabase'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import * as uuid from 'uuid'

export const dynamic = 'force-dynamic'

const getUUID = () => {
  return uuid.v4().split('-')[0]
}

export async function GET(): Promise<NextResponse<null> | Response> {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  try {
    const uuid = getUUID()

    const { data } = await supabase.from('urls').select('custom_url').eq('custom_url', uuid).single()

    if (data) {
      throw new Error('이미 존재하는 UUID 입니다')
    }

    return NextResponse.json({ uuid }, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 404 })
    }
    return NextResponse.json({ message: '메시지 전송 실패' }, { status: 404 })
  }
}
