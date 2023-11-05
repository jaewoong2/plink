import CardImage from '@/app/components/CardImage'
import React from 'react'
import { useCreateLinkState } from '../hooks/useCreateLink'
import SaveButton from './SaveButton'
import { useRouter } from 'next/navigation'
import { isValidUrl } from '@/lib'
import usePostCustomLink from '../hooks/usePostCustomLink'
import { useToast } from '@chakra-ui/react'
import Link from 'next/link'

type Props = {
  type?: 'CREATE' | 'UPDATE'
}

const RightSection = ({ type }: Props) => {
  const { description, image, link, title, isLoading, customURL, ogs_id, urls_id } = useCreateLinkState()
  const toast = useToast()
  const navigation = useRouter()

  const { mutate } = usePostCustomLink(type ?? 'CREATE', {
    onSuccess(data) {
      toast({
        variant: 'solid',
        position: 'top',
        title: data.message,
        status: 'success',
      })
      navigation.push('/')
    },
    onError(error) {
      toast({
        variant: 'solid',
        position: 'top',
        title: error.response?.data.message,
        status: 'error',
      })
    },
  })

  const onCancle = () => {
    navigation.push('/')
  }

  const onClickSaveButton = () => {
    mutate({
      ogs_id: ogs_id,
      urls_id: urls_id,
      custom_url: customURL ?? '',
      origin_url: link,
      title,
      image,
      description,
    })
  }

  return (
    <div className='w-1/2 max-md:w-full'>
      <div className='flex h-full max-h-[150px] items-center justify-center border-b bg-slate-50 py-6 text-sm font-semibold text-gray-600 dark:border-darkBg-100 dark:bg-darkBg-200 dark:text-white'>
        미리보기
      </div>
      <div className='flex w-full flex-col items-center'>
        {/* 네이버 */}
        <div className='divider px-12 py-3 text-xs font-semibold text-[#05d686] before:bg-[#05d686] after:bg-[#05d686]'>
          네이버
        </div>
        <Link href={link} className='h-[340px] w-[90%] overflow-hidden border bg-white' aria-label='네이버 SNS 카드'>
          <div className={'h-[220px] max-h-[220px] w-auto border-b'}>
            {image && (
              <CardImage image={image} alt='preview' className='cursor-pointer object-cover' isLoading={isLoading} />
            )}
          </div>
          <div className='p-[21px_26px_18px]'>
            <div aria-label='타이틀' className='max-h-[40px] truncate text-[#333]'>
              {title}
            </div>
            <div aria-label='내용' className='line-clamp-2 max-h-[40px] text-sm text-[#999]'>
              {description}
            </div>
            <div aria-label='원본 링크 호스트 네임' className='flex items-center text-sm text-[#00a832]'>
              {isValidUrl(link) && new URL(link).hostname}
            </div>
          </div>
        </Link>

        {/* 카카오 */}
        <div className='divider px-12 py-3 text-xs font-semibold text-[#7a753f] before:bg-[#F7E600] after:bg-[#F7E600]'>
          카카오
        </div>
        <Link href={link} className='h-[340px] w-[90%] overflow-hidden border bg-white' aria-label='네이버 SNS 카드'>
          <div className='h-[220px] max-h-[220px] w-auto border-b'>
            {image && (
              <CardImage image={image} alt='preview' className='cursor-pointer object-cover' isLoading={isLoading} />
            )}
          </div>
          <div className='p-[8px_12px]'>
            <div aria-label='타이틀' className='max-h-[40px] truncate text-[#333]'>
              {title}
            </div>
            <div aria-label='내용' className='line-clamp-2 max-h-[40px] text-[13px]  text-sm text-[#707070]'>
              {description}
            </div>
            <div aria-label='원본 링크 호스트 네임' className='flex items-center text-[12px] text-sm text-[#aaa]'>
              {isValidUrl(link) && new URL(link).hostname}
            </div>
          </div>
        </Link>
      </div>
      <SaveButton
        onClick={onClickSaveButton}
        onCancleButtonClick={onCancle}
        wrapperClassName='h-[40px] z-10 flex items-center justify-end bg-white px-3 py-10 shadow-md transition-all sticky bottom-0 max-md:hidden mt-5'
      >
        커스텀 링크 저장하고 복사하기
      </SaveButton>
    </div>
  )
}

export default RightSection
