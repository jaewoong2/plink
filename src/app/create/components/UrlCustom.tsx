import Input from '@/app/components/Input'
import React, { useEffect, useState } from 'react'
import { useCreateLinkAction, useCreateLinkState } from '../hooks/useCreateLink'
import { AiOutlineEdit } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import useDebounceCallback from '../hooks/useDebounceCallback'
import { twMerge } from 'tailwind-merge'
import CardImage from '@/app/components/CardImage'
import useGetOgData from '../hooks/useGetOgData'
import { isValidUrl } from '@/lib'
import useGetUUID from '../hooks/useGetUUID'

const UrlCustom = () => {
  const { image, title, customURL, link, isLoading } = useCreateLinkState()
  const { error } = useGetOgData(link, { enabled: isValidUrl(link) })
  const [isEdit, setIsEdit] = useState(false)
  const navigation = useRouter()
  const { refetch, data } = useGetUUID({ enabled: false })

  const [onChangeOriginURL] = useDebounceCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    navigation.push(`create?link=${e.target.value}`)
  }, 2000)

  const dispatch = useCreateLinkAction()

  // 변경 후 이미 있는 URL 인지 아닌지 점검
  const onChangeCustomURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_CUSTOM_URL', payload: e.target.value })
  }

  const onClickRandomLinkGenerate = () => {
    refetch()
  }

  useEffect(() => {
    dispatch({ type: 'SET_CUSTOM_URL', payload: data?.uuid ?? customURL })
  }, [data, dispatch, customURL])

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-full flex-col items-center justify-center gap-3 border-b bg-slate-50 px-7 py-6'>
        <figure
          className={twMerge(
            'h-16 w-16 overflow-hidden rounded-full bg-slate-200',
            isLoading ? 'h-16 w-16 animate-pulse' : 'bg-transparent'
          )}
        >
          <CardImage image={image} className='h-full w-auto object-cover' alt={title + '- 미리보기'} />
        </figure>
        {isValidUrl(link) && !error && !image && <span className='loading loading-dots loading-md'></span>}
        <div className='w-full truncate text-center font-bold'>{title ?? '제목'}</div>
      </div>
      <form
        className='relative my-2 flex w-full flex-col px-6'
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Input
          placeholder={link || 'https://prl.co'}
          disabled={!isEdit}
          value={link ?? ''}
          onChange={(e) => {
            dispatch({ type: 'SET_LINK', payload: e.target.value })
            onChangeOriginURL(e)
          }}
          helper={
            !isValidUrl(link) && (
              <p className='absolute right-5 flex w-full max-w-sm animate-fade-down justify-end p-0 text-xs text-red-400'>
                유효한 URL을 작성 해주세요
              </p>
            )
          }
          status={!isValidUrl(link) ? 'ERROR' : 'NORMAL'}
          className={twMerge('mx-2 w-full py-2 text-sm')}
          label={<p className='text-sm font-semibold text-gray-600'>원본 링크</p>}
          postfix={
            <button
              type='submit'
              onClick={() => setIsEdit((prev) => !prev)}
              className={
                'flex h-fit cursor-pointer items-center justify-center px-3 py-0 text-sm transition-transform active:scale-90'
              }
            >
              <AiOutlineEdit className={isEdit && link ? 'text-blue-900' : ''} />
            </button>
          }
        />
      </form>
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
                onClick={onClickRandomLinkGenerate}
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
