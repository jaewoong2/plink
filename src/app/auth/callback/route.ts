import supabaseServer from '@/lib/supabaseServer'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const redirectUrl = requestUrl.searchParams.get('redirectUrl')

  if (code) {
    const supabase = supabaseServer()
    await supabase.auth.exchangeCodeForSession(code)
  }

  if (!redirectUrl) {
    return NextResponse.redirect(process.env.NEXT_PUBLIC_CURRENT_URL + '/auth/signin')
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(redirectUrl)
}
