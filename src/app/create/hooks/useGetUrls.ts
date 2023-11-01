import axios, { AxiosError } from 'axios'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { URLS_INFOS } from '@/types'

type Data = { data: URLS_INFOS[] }

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useGetUrls = (
  configuration?: Omit<UseQueryOptions<Data, AxiosError<{ message: string }>>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<Data, AxiosError<{ message: string }>>({
    queryKey: ['/api/urls'],
    queryFn: () => fetcher('/api/urls'),
    retry: 2,
    ...configuration,
  })
}

export default useGetUrls
