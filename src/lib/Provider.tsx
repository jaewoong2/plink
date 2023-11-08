'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS toastOptions={{ defaultOptions: { position: 'top' } }}>
        <CacheProvider>{children}</CacheProvider>
      </ChakraProvider>
    </QueryClientProvider>
  ) : null
}
