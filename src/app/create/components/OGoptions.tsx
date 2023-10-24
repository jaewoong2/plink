import React from 'react'
import Dropzone from './Dropzone'
import Input from '@/app/components/Input'
import Textarea from '@/app/components/Textarea'
import { useCreateLinkState } from '../hooks/useCreateLink'

const OGoptions = () => {
  const { title, description } = useCreateLinkState()

  return (
    <>
      <p className='cursor-pointer items-center justify-between px-6 text-sm font-semibold text-gray-600 peer-checked:py-2 '>
        {'SNS 커스터마이징'}
      </p>
      <div className='flex animate-fade-in-down flex-col gap-2 px-6 py-4'>
        <Dropzone />
        <div className='my-2 flex w-full flex-col'>
          <Input
            value={title}
            placeholder='오늘의 상품'
            className='mx-2 w-full py-2 text-sm'
            label={<p className='text-sm font-semibold text-gray-600'>SNS 제목</p>}
          />
        </div>
        <div className='my-2 flex w-full flex-col'>
          <Textarea
            value={description}
            placeholder='오늘의 상품은 테니스 공 24개입 입니다. 3500원의 즐거움. 🚀'
            rows={2}
            className='textarea mx-2 w-full resize-none px-0 py-1.5'
            label={<p className='text-sm font-semibold text-gray-600'>SNS 내용</p>}
          />
        </div>
      </div>
    </>
  )
}

export default OGoptions
