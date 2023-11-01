'use client'

import React, { useState } from 'react'
import { URLS_INFOS } from '@/types'
import useGetUrls from '../create/hooks/useGetUrls'
import LinkCard from './LinkCard'

const CURRENT_URL = process.env.NEXT_PUBLIC_CURRENT_URL ?? 'localhost:3000'

type Props = {
  initDatas: URLS_INFOS[]
}

const LinkCards = ({ initDatas }: Props) => {
  const [isMore, setIsMore] = useState(false)
  const { data } = useGetUrls({ initialData: { data: initDatas }, enabled: isMore })

  if (!data || data.data.length === 0) {
    return <></>
  }

  return (
    <>
      {data.data?.map((info) => (
        <LinkCard
          key={info.custom_url}
          imageSrc={info.image ?? ''}
          customizedLink={`${CURRENT_URL}/c/${info.custom_url}` ?? ''}
          originalLink={info.origin_url ?? ''}
        />
      ))}
      <button type='button' className='btn' onClick={() => setIsMore((prev) => !prev)}>
        {isMore ? '닫기' : '더보기'}
      </button>
    </>
  )
}

export default React.memo(LinkCards)
