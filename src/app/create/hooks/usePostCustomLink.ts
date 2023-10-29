import { OGS, URLS } from '@/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import axios from 'axios'

type Variables = OGS & URLS

const fetcher = (arg: Partial<Variables>) => axios.post<Variables>('/api/og', arg).then((res) => res.data)

const usePostCustomLink = (configuration?: UseMutationOptions<Variables, Error, Partial<Variables>, unknown>) => {
  const { data, ...rest } = useMutation<Variables, Error, Partial<Variables>, unknown>({
    mutationFn: fetcher,
    ...configuration,
  })

  return {
    data: data,
    ...rest,
  }
}

export default usePostCustomLink
