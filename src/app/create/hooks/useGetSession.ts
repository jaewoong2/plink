import { Session } from '@supabase/supabase-js'
import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

type Data = { data: { session: Session } }

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useGetSession = (
  configuration?: Omit<UndefinedInitialDataOptions<Data, AxiosError<{ message: string }>>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<Data, AxiosError<{ message: string }>>({
    queryKey: ['/api/session'],
    queryFn: () => fetcher('/api/session'),
    ...configuration,
  })
}

export default useGetSession
