import axios, { AxiosError } from 'axios'
import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query'
import { LinkState } from '@/types'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useGetOgData = (
  url: string,
  configuration?: Omit<UndefinedInitialDataOptions<LinkState, AxiosError<{ message: string }>>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<LinkState, AxiosError<{ message: string }>>({
    queryKey: [url],
    queryFn: () => fetcher(`/api/og?url=${url}`),
    retry: 2,
    ...configuration,
  })
}

export default useGetOgData
