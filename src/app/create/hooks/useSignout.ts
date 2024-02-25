import Error from 'next/error'
import { NextResponse } from 'next/server'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import axios from '@/app/api/api'

const fetcher = () => axios.post<NextResponse>('/auth/signout').then((res) => res.data)

const useSignout = (configuration?: UseMutationOptions<NextResponse, Error>) => {
  const { data, ...rest } = useMutation({ mutationFn: fetcher, ...configuration })

  return {
    data: data,
    ...rest,
  }
}

export default useSignout
