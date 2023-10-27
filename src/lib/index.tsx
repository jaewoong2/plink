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
