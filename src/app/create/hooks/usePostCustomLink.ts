import axios from '@/app/api/api'
import { Link } from '@/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

type Variables = Link
type Response = { message: string }

const postFetcher = (arg: Partial<Variables>) => axios.post<Response>('/link', arg).then((res) => res.data)
const patchFetcher = (arg: Partial<Variables>) => axios.patch<Response>('/link', arg).then((res) => res.data)

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
