import { Session } from '@supabase/supabase-js'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

type Data = { data: { session: Session } } & { show: boolean }

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useGetSession = (
  show?: boolean,
  configuration?: Omit<UseQueryOptions<Data, AxiosError<{ message: string }>>, 'queryKey'>
) => {
  return useQuery<Data, AxiosError<{ message: string }>>({
    queryKey: [`/api/session?show=${show ?? false}`],
    queryFn: () => fetcher(`/api/session?show=${show ?? false}`),
    ...configuration,
  })
}

export default useGetSession
