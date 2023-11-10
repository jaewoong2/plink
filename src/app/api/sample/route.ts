import { NextRequest, NextResponse } from 'next/server'
import { BetaAnalyticsDataClient } from '@google-analytics/data'
import { getCredentials } from '@/lib/getCredentials'

const analyticsDataClient = new BetaAnalyticsDataClient()
async function runReport(propertyId: string) {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '2020-03-31',
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'pagePath',
      },
    ],
    metrics: [
      {
        name: 'screenPageViews',
      },
    ],
  })

  return response
}

export async function GET(request: NextRequest) {
  try {
    await getCredentials()

    const data = await runReport(`${process.env.NEXT_PUBLIC_GA_PROPOERTY_ID}`)

    return NextResponse.json({ message: data }, { status: 401 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 401 })
    }
    return NextResponse.json({ message: '메시지 전송 실패' }, { status: 401 })
  }
}
