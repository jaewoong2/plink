import { Database } from '@/types/supabase'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(): Promise<NextResponse<null> | Response> {
  const supabase = createRouteHandlerClient<Database>({ cookies })

  try {
    const ogs = await supabase.from('url_infos').select('*').order('created_at', { ascending: false })
    if (!ogs.data || ogs.data.length === 0) {
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
