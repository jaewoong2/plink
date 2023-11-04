import { OGS, URLS, URLS_INFOS } from '@/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

type Variables = OGS & URLS & URLS_INFOS
type Response = { message: string }

const postFetcher = (arg: Partial<Variables>) => axios.post<Response>('/api/og', arg).then((res) => res.data)
const patchFetcher = (arg: Partial<Variables>) => axios.patch<Response>('/api/og', arg).then((res) => res.data)

const fetchers = {
  CREATE: postFetcher,
  UPDATE: patchFetcher,
}

const usePostCustomLink = (
  type: 'CREATE' | 'UPDATE',
  configuration?: UseMutationOptions<Response, AxiosError<Response>, Partial<Variables>, unknown>
) => {
  const { data, ...rest } = useMutation<Response, AxiosError<Response>, Partial<Variables>, unknown>({
    mutationFn: fetchers[type],
    ...configuration,
  })

  return {
    data: data,
    ...rest,
  }
}

export default usePostCustomLink
