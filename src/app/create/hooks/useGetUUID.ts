import axios, { AxiosError } from 'axios'
import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query'

type Data = { uuid: string }

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useGetUUID = (
  configuration?: Omit<UndefinedInitialDataOptions<Data, AxiosError<{ message: string }>>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<Data, AxiosError<{ message: string }>>({
    queryKey: ['/api/uuid'],
    queryFn: () => fetcher('/api/uuid'),
    retry: 2,
    ...configuration,
  })
}

export default useGetUUID
