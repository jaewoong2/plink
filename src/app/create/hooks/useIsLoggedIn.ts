import { UseQueryOptions } from '@tanstack/react-query'
import useGetSession from './useGetSession'
import { AxiosError } from 'axios'
import { Session } from '@supabase/supabase-js'
import { useState } from 'react'

type Data = { data: { session: Session } }

type Prams = Omit<UseQueryOptions<Data, AxiosError<{ message: string }>>, 'queryKey'>

const useIsLoggedIn = (options?: Prams) => {
  const [show, setShow] = useState(true)
  const { data, refetch, ...rest } = useGetSession({ ...options, enabled: false, retry: 1 })

  if (!data?.data.session) {
    return {
      isLoggedIn: false,
      check: (isShow = true) => {
        setShow(isShow)
        refetch()
      },
      show,
      ...rest,
    }
  }

  return {
    isLoggedIn: true,
    check: (isShow = true) => {
      setShow(isShow)
      refetch()
    },
    show,
    ...rest,
  }
}

export default useIsLoggedIn
