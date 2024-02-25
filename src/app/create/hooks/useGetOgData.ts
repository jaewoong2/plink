import { AxiosError } from 'axios'
import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query'
import { LinkState } from '@/types'
import axios from '@/app/api/api'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useGetOgData = (
  url: string,
  configuration?: Omit<UndefinedInitialDataOptions<LinkState, AxiosError<{ message: string }>>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<LinkState, AxiosError<{ message: string }>>({
    queryKey: [`/link/og?url=${url}`],
    queryFn: () => fetcher(`/link/og?url=${url}`),
    retry: 2,
    ...configuration,
  })
}

export default useGetOgData
