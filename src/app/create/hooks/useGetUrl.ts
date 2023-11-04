import axios, { AxiosError } from 'axios'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { URLS_INFOS } from '@/types'

type Data = { data: URLS_INFOS }

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useGetUrls = (
  custom_url: URLS_INFOS['custom_url'],
  configuration?: Omit<UseQueryOptions<Data, AxiosError<{ message: string }>>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<Data, AxiosError<{ message: string }>>({
    queryKey: [`/api/url?custom_id=${custom_url}`],
    queryFn: () => fetcher(`/api/url?custom_url=${custom_url}`),
    retry: 2,
    ...configuration,
  })
}

export default useGetUrls
