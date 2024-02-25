import { UseQueryOptions } from '@tanstack/react-query'
import useGetSession from './useGetSignIn'
import { AxiosError } from 'axios'
import { Session } from '@supabase/supabase-js'
import { useCallback, useMemo } from 'react'

type Data = { data: { session: Session } }

type Prams = Omit<UseQueryOptions<Data, AxiosError<{ message: string; show: boolean }>>, 'queryKey'> & {
  show?: boolean
}

const useIsLoggedIn = (options?: Prams) => {
  const isShow = useMemo(() => (typeof options?.show === 'undefined' ? true : options.show), [options?.show])

  const { data, refetch, error, ...rest } = useGetSession(isShow, { enabled: false, retry: 1, ...options })

  const check = useCallback(() => {
    refetch()
  }, [refetch])

  const value = useMemo(
    () => ({
      data,
      isShow: error?.response?.data.show,
      isLoggedIn: !data?.data.session ? false : true,
      check,
      error,
      ...rest,
    }),
    [check, data, rest, error]
  )

  return value
}

export default useIsLoggedIn
