import $axios, { AxiosError, AxiosInstance } from 'axios'

const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log('interceptor > error', error)
      return Promise.reject(error)
    }
  )

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(process.env.LOCAL_TOKEN_ITEM ?? '')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error: AxiosError) => {
      console.log('interceptor > error', error)
      Promise.reject(error)
    }
  )
}

const createAxios = () => {
  const instance = $axios.create({
    baseURL: process.env.NEXT_PUBLIC_CURRENT_URL,
    timeout: 2000,
  })
  setInterceptors(instance)

  return instance
}

const axios = createAxios()

export default axios
