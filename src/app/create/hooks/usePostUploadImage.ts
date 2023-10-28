import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import axios from 'axios'

interface UploadResponse {
  data: {
    path: string
    name: string
  }
  path: string
  error: null | string
  status: number
  statusText: string
}

const fetcher = (arg: FormData) => axios.post<UploadResponse['data']>('/api/upload', arg).then((res) => res.data)

const usePostUploadImage = (configuration?: UseMutationOptions<UploadResponse['data'], Error, FormData, unknown>) => {
  const { data, ...rest } = useMutation<UploadResponse['data'], Error, FormData, unknown>({
    mutationFn: fetcher,
    ...configuration,
  })

  return {
    data: data,
    ...rest,
  }
}

export default usePostUploadImage
