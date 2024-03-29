'use client'
import React, { useEffect } from 'react'
import useSignout from '@/app/create/hooks/useSignout'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'

type Props = {
  searchParams: {
    redirectUrl: string
  }
}
const SignOut = ({ searchParams }: Props) => {
  const queryClient = useQueryClient()
  const navigtaion = useRouter()
  const toast = useToast()

  const { mutate } = useSignout({
    onSuccess: () => {
      navigtaion.replace(searchParams?.redirectUrl ?? '/')
      queryClient.removeQueries({ queryKey: ['/auth/validate'] })
      toast({
        title: '로그아웃 성공 😎',
        position: 'top',
        isClosable: true,
      })
    },
    onError: () => {
      toast({
        title: '로그아웃 실패',
        position: 'top',
        isClosable: true,
      })
    },
  })

  useEffect(() => {
    mutate()
  }, [mutate])

  return <div>로그아웃</div>
}

export default SignOut
