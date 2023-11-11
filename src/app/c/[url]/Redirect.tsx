'use client'
import { isValidUrl } from '@/lib'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  origin_url?: string | null
}

const Redirect = ({ origin_url }: Props) => {
  const navigation = useRouter()

  if (!origin_url) return <div>잘못된 요청 입니다</div>

  if (isValidUrl(origin_url)) {
    navigation.replace(new URL(origin_url).href)
  }

  return <div>Redirect...</div>
}

export default Redirect
