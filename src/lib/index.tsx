export async function sleep(time = 500) {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove
    }, time)
  })
}

export function isValidUrl(url: string) {
  try {
    return new URL(url) && true
  } catch (err) {
    if (err instanceof TypeError) {
      return false
    }
    throw err
  }
}

export function addHttpProtocol(url: string): string {
  if (!/^https?:\/\//i.test(url)) {
    return 'http://' + url
  }
  return url
}
