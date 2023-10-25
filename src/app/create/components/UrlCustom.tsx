import Input from '@/app/components/Input'
import React, { useState } from 'react'
import { useCreateLinkAction, useCreateLinkState } from '../hooks/useCreateLink'
import { AiOutlineEdit } from 'react-icons/ai'

const UrlCustom = () => {
  const [isEdit, setIsEdit] = useState(false)

  const { image, title, customURL, link } = useCreateLinkState()
  const dispatch = useCreateLinkAction()

  // 변경 후 이미 있는 URL 인지 아닌지 점검
  const onChangeCustomURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_CUSTOM_URL', payload: e.target.value })
  }

  const onChangeOriginURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_LINK', payload: e.target.value })
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-full flex-col items-center justify-center gap-3 border-b bg-slate-50 px-7 py-6'>
        {image && <img src={image} className='h-[40px] w-auto rounded-full' alt='link' />}
        <div className='w-full truncate font-bold'>{title}</div>
      </div>
      <div className='my-2 flex w-full flex-col px-6'>
        <Input
          disabled={!isEdit}
          value={link}
          onChange={onChangeOriginURL}
          className='mx-2 w-full py-2 text-sm'
          label={<p className='text-sm font-semibold text-gray-600'>원본 링크</p>}
          postfix={
            <button
              type='button'
              onClick={() => setIsEdit((prev) => !prev)}
              className='flex h-fit cursor-pointer items-center justify-center px-3 py-0 text-sm transition-transform active:scale-90'
            >
              <AiOutlineEdit />
            </button>
          }
        />
      </div>
      <div className='my-1 flex w-full flex-col px-6'>
        <Input
          prefixElement={
            <div className='flex items-center justify-center'>
              <select className='mr-2 rounded-lg rounded-r-none bg-transparent px-5 py-2 text-center text-sm text-gray-400'>
                <option className='h-full'>plink.kr</option>
              </select>
            </div>
          }
          value={customURL}
          onChange={onChangeCustomURL}
          className='w-full rounded-r-lg border-l px-2 py-1.5 text-sm'
          label={<p className='text-sm font-semibold text-gray-600'>커스텀 링크</p>}
          helper={
            <div className='flex w-full justify-end px-6 pt-2 text-xs'>
              <button
                type='button'
                className='rounded-xl p-1 font-normal text-primary-500 transition-transform active:scale-95'
              >
                랜덤 링크 생성
              </button>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default UrlCustom
