import axios from '@/app/api/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

type Variables = { email: string; redirectTo: string }

const patchFetcher = (arg: Partial<Variables>) => axios.post<Response>('/auth/login-email', arg).then((res) => res.data)

const useMagicLinkLogin = (
  configuration?: UseMutationOptions<Response, AxiosError<Response>, Partial<Variables>, unknown>
) => {
  return useMutation({ mutationFn: patchFetcher, ...configuration })
}

export default useMagicLinkLogin
