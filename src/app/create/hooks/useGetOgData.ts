import useSWR, { Fetcher, SWRConfiguration } from 'swr'

const fetcher: Fetcher<any> = (url: string) =>
  fetch(url, { method: 'GET', cache: 'no-cache' }).then(async (res) => {
    return res.json()
  })

const useGetOgData = (url?: string, configuration?: SWRConfiguration) => {
  return useSWR(`/api/og?url=${url}`, fetcher, { ...configuration })
}

export default useGetOgData
