import { BetaAnalyticsDataClient } from '@google-analytics/data'

const analyticsDataClient = new BetaAnalyticsDataClient()
export async function runReport(propertyId: string, pagePath: string | null) {
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
      {
        name: 'date', // 날짜 차원 추가
      },
    ],
    dimensionFilter: {
      filter: {
        fieldName: 'pagePath',
        stringFilter: {
          matchType: 'EXACT',
          value: pagePath ?? '/',
        },
      },
    },
    metrics: [
      {
        name: 'screenPageViews',
      },
    ],
  })

  return response
}

export async function getReport(path: string) {
  try {
    const data = await runReport(`${process.env.NEXT_PUBLIC_GA_PROPOERTY_ID}`, path)

    return data.rows?.[0]
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error!')
    }
    throw new Error('Error!')
  }
}
