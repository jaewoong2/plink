import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

type Variables = { email: string }

const patchFetcher = (arg: Partial<Variables>) => axios.post<Response>('/api/magiclink', arg).then((res) => res.data)

const useMagicLinkLogin = (
  configuration?: UseMutationOptions<Response, AxiosError<Response>, Partial<Variables>, unknown>
) => {
  return useMutation({ mutationFn: patchFetcher, ...configuration })
}

export default useMagicLinkLogin
