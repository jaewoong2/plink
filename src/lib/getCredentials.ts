import fs from 'fs'

const hasCredentials = (jsonFileName: string) => {
  const res = fs.readFileSync(jsonFileName)
  return Boolean(res)
}

const interval = (callback: () => boolean) =>
  new Promise((resolve) => {
    const inerval = setInterval(() => {
      if (callback()) {
        clearInterval(inerval)
        resolve(true)
      }
    }, 1000)
  })

export const getCredentials = async () => {
  const jsonFileName = 'credentials.json'
  if (hasCredentials(jsonFileName)) return

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

  const jsonString = JSON.stringify(jsonContent, null, 2)
  fs.writeFileSync(jsonFileName, jsonString, 'utf-8')

  await interval(() => hasCredentials(jsonFileName))
}
