import puppeteer from 'puppeteer'
import { load } from 'cheerio'

export async function getMetaTags(url: string) {
  const browser = await puppeteer.launch({
    headless: 'new',
  })

  const page = await browser.newPage()
  await page.goto(url)

  // OG 태그가 페이지에 존재할 때까지 기다립니다.
  // await page.waitForFunction(() => {
  //   return document.querySelector('meta[property="og:title"]')
  // })

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
