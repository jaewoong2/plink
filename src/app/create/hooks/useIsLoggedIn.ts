import { UseQueryOptions } from '@tanstack/react-query'
import useGetSession from './useGetSession'
import { AxiosError } from 'axios'
import { Session } from '@supabase/supabase-js'
import { useCallback, useMemo } from 'react'

type Data = { data: { session: Session } } & { show: boolean }

type Prams = Omit<UseQueryOptions<Data, AxiosError<{ message: string }>>, 'queryKey'>

const useIsLoggedIn = (options?: Prams) => {
  const { data, refetch, ...rest } = useGetSession(true, { ...options, enabled: false, retry: 1 })

  const check = useCallback(() => {
    refetch()
  }, [refetch])

  const value = useMemo(
    () => ({
      data,
      isLoggedIn: !data?.data.session ? false : true,
      check,
      ...rest,
    }),
    [check, data, rest]
  )

  return value
}

export default useIsLoggedIn
