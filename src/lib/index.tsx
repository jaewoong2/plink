import puppeteer from 'puppeteer'
import { load } from 'cheerio'

export async function getMetaTags(url: string) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--disable-extensions',
      '--disable-plugins',
      '--disable-dev-shm-usage', // Docker와 같은 컨테이너 환경에서 메모리 이슈를 방지
      '--no-sandbox', // 보안이 중요하지 않은 환경에서 성능 향상을 위해 사용
      '--disable-gpu', // GPU 가속을 비활성화
    ],
  })

  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'domcontentloaded' })

  await page.setRequestInterception(true)

  page.on('request', (req) => {
    if (req.resourceType() === 'stylesheet' || req.resourceType() === 'image') {
      req.abort()
    } else {
      req.continue()
    }
  })

  await page.waitForFunction(
    () => {
      return document.querySelector('meta[property="og:title"]')
    },
    { timeout: 5000 }
  ) // 5초 타임아웃 설정

  const content = await page.content()

  const $ = load(content)

  const metaTags: { [key: string]: string } = {}

  $('meta').each((_, element) => {
    const property = $(element).attr('property') || $(element).attr('name')
    if (property && property.startsWith('og:')) {
      const content = $(element).attr('content') || ''
      metaTags[property.replace('og:', '')] = content
    }
  })

  await browser.close()

  return metaTags
}
