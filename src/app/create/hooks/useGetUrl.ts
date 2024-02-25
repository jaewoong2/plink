import { AxiosError } from 'axios'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { Link } from '@/types'
import axios from '@/app/api/api'

type Data = { data: Link }

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useGetUrls = (
  custom_url: Link['custom_url'],
  configuration?: Omit<UseQueryOptions<Data, AxiosError<{ message: string }>>, 'queryKey' | 'queryFn'>
) => {
  const URL = `/link/search?custom_url=${custom_url}`

  return useQuery<Data, AxiosError<{ message: string }>>({
    queryKey: [URL],
    queryFn: () => fetcher(URL),
    retry: 2,
    ...configuration,
  })
}

export default useGetUrls
