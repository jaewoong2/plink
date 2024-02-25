import React from 'react'
import LinkCard from './LinkCard'
import { getRegistedUrls } from '../supabase-server'

const CURRENT_URL = process.env.NEXT_PUBLIC_CURRENT_URL ?? 'https://prlc.kr'

const LinkCards = async () => {
  const urls = await getRegistedUrls()

  if (!urls || urls.data.length === 0) {
    return <></>
  }

  return (
    <>
      {urls.data?.map((info) => (
        <LinkCard
          key={info.custom_url}
          imageSrc={info.image ?? ''}
          customizedLink={`${CURRENT_URL}/c/${info.custom_url}` ?? ''}
          customURL={info.custom_url}
          originalLink={info.origin_url ?? ''}
          // options={info.user_id === session?.data.session?.user.id}
        />
      ))}
    </>
  )
}

export default React.memo(LinkCards)
