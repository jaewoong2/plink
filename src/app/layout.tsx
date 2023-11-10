import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import { Providers } from '@/lib/Provider'
import { ThemeProviders } from '@/lib/ThemeProvider'

import './font.css'
import './globals.css'
import { METADATA } from '@/constants'
import GoogleAnalytics from '@/lib/GoogleAnalytics'

export const metadata: Metadata = METADATA
export const dynamic = 'force-dynamic'
export const revalidate = 0

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='kr' className='h-full min-h-screen'>
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA4 ?? ''} />
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_UA ?? ''} />
      <body suppressHydrationWarning={true} className='relative h-full min-h-screen overflow-scroll bg-white'>
        <Providers>
          <ThemeProviders>{children}</ThemeProviders>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
