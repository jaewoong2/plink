'use client'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

type PageViewsData = {
  date?: string | null
  views?: number | null
}

type PageViewsChartProps = {
  data: PageViewsData[]
}

const PageViewsChart: React.FC<PageViewsChartProps> = ({ data }) => (
  <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type='monotone' dataKey='views' stroke='#8884d8' />
    <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
    <XAxis dataKey='date' />
    <YAxis />
    <Tooltip />
    <Legend />
  </LineChart>
)

export default React.memo(PageViewsChart)
