import { Session } from '@supabase/supabase-js'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

type Data = { data: { session: Session } }

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useGetSession = (
  show?: boolean,
  configuration?: Omit<UseQueryOptions<Data, AxiosError<{ message: string; show: boolean }>>, 'queryKey'>
) => {
  return useQuery<Data, AxiosError<{ message: string; show: boolean }>>({
    queryKey: ['/api/session'],
    queryFn: () => fetcher(`/api/session?show=${show ?? false}`),
    ...configuration,
  })
}

export default useGetSession
