import supabaseServer from '@/lib/supabaseServer'
import { NextResponse } from 'next/server'

export async function POST(): Promise<NextResponse<null> | Response> {
  try {
    const supabase = supabaseServer()

    const { error } = await supabase.auth.signOut()

    if (error) {
      return NextResponse.error()
    }

    return NextResponse.json({ message: '로그아웃 성공' }, { status: 200 })
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 401 })
    }
    return NextResponse.json({ message: '로그아웃 실패' }, { status: 401 })
  }
}
