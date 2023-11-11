import fs from 'fs'

const generate = (jsonFileName: string, jsonContent: { [key: string]: string | undefined }) => {
  console.log('파일 생성')
  const jsonString = JSON.stringify(jsonContent, null, 2)
  fs.writeFileSync(jsonFileName, jsonString, 'utf-8')
}

const hasCredentials = (jsonFileName: string) => {
  try {
    const res = fs.readFileSync(jsonFileName)
    return Boolean(res)
  } catch (err) {
    console.log(err)
    return false
  }
}

const generateWithInterval = (callback: () => boolean, fallback: () => void, timeout = 1000, maxFailures = 5) =>
  new Promise((resolve, reject) => {
    let failureCount = 0
    const intervalId = setInterval(() => {
      if (failureCount >= maxFailures) {
        clearInterval(intervalId)
        reject(new Error('Max failure count reached'))
      }
      if (callback()) {
        clearInterval(intervalId)
        resolve('Credentials File 생성 성공')
      } else {
        failureCount += 1
        fallback()
      }
    }, timeout)
  })

export const generateCredentials = async () => {
  const jsonFileName = 'credentials.json'

  const jsonContent = {
    type: 'service_account',
    project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
    private_key_id: process.env.NEXT_PUBLIC_PRIVATE_KEY_ID,
    private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY!.replaceAll('\\n', '\n'),
    client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: process.env.NEXT_PUBLIC_CLIENT_X509_CERT_URL,
    universe_domain: 'googleapis.com',
  }

  await generateWithInterval(
    () => hasCredentials(jsonFileName),
    () => generate(jsonFileName, jsonContent)
  )
    .then(() => console.log('Crendentials 파일이 접근이 완료 되었습니다.'))
    .catch((error) => console.error(error.message))
}
