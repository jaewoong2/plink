import { Metadata } from 'next'
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
    <html lang='kr' className='min-h-screen'>
      <body suppressHydrationWarning={true} className='relative min-h-screen overflow-scroll bg-white'>
        <Providers>
          <ThemeProviders>{children}</ThemeProviders>
        </Providers>
      </body>
    </html>
  )
}
