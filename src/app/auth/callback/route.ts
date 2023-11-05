import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import type { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')
    const redirectUrl = requestUrl.searchParams.get('redirectUrl')

    if (code) {
      const supabase = createRouteHandlerClient({ cookies })
      await supabase.auth.exchangeCodeForSession(code)
    }

    if (!redirectUrl) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_CURRENT_URL + '/auth/signin')
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(redirectUrl)
  } catch (err) {
    console.error(err)
    return NextResponse.redirect(process.env.NEXT_PUBLIC_CURRENT_URL + '/', { status: 401 })
  }
}
