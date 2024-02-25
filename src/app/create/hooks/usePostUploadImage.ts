import axios from '@/app/api/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

interface UploadResponse {
  data: {
    data: {
      path: string
      name: string
    }
  }
  path: string
  error: null | string
  status: number
  statusText: string
}

const fetcher = (arg: FormData) => axios.post<UploadResponse['data']>('/upload', arg).then((res) => res.data)

const usePostUploadImage = (configuration?: UseMutationOptions<UploadResponse['data'], Error, FormData, unknown>) => {
  const { data, ...rest } = useMutation<UploadResponse['data'], Error, FormData, unknown>({
    mutationFn: fetcher,
    ...configuration,
  })

  return {
    data,
    ...rest,
  }
}

export default usePostUploadImage
