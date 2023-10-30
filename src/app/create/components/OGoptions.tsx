import React, { useEffect } from 'react'
import Dropzone from './Dropzone'
import Input from '@/app/components/Input'
import Textarea from '@/app/components/Textarea'
import { useCreateLinkAction, useCreateLinkState } from '../hooks/useCreateLink'
import useFileUpload from '../hooks/useUploadImage'

const OGoptions = () => {
  const { title, description } = useCreateLinkState()
  const { upload, data, isUploading } = useFileUpload()
  const dispatch = useCreateLinkAction()

  const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      upload(e.target.files[0])
    }
  }

  const onChangeOG = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'title') {
      dispatch({ type: 'SET_TITLE', payload: e.target.value })
      return
    }

    if (e.target.name === 'description') {
      dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value })
      return
    }
  }

  useEffect(() => {
    if (data?.data?.path) {
      dispatch({ type: 'SET_IMAGE', payload: data?.data?.path })
    }
  }, [data?.data?.path, dispatch])

  useEffect(() => {
    dispatch({ type: 'SET_ISLOADING', payload: isUploading })
  }, [isUploading, dispatch])

  return (
    <>
      <p className='cursor-pointer items-center justify-between px-6 text-sm font-semibold text-gray-600 peer-checked:py-2 '>
        {'SNS 커스터마이징'}
      </p>
      <div className='flex animate-fade-in-down flex-col gap-2 px-6 py-4'>
        <Dropzone onChange={onChangeImage} isLoading={isUploading} />
        <div className='my-2 flex w-full flex-col'>
          <Input
            onChange={onChangeOG}
            value={title}
            name='title'
            placeholder='오늘의 상품'
            className='mx-2 w-full py-2 text-sm'
            label={<p className='text-sm font-semibold text-gray-600'>SNS 제목</p>}
          />
        </div>
        <div className='my-2 flex w-full flex-col'>
          <Textarea
            onChange={onChangeOG}
            name='description'
            value={description}
            placeholder='오늘의 상품은 테니스 공 24개입 입니다. 3500원의 즐거움. 🚀'
            rows={5}
            className='textarea mx-2 w-full resize-none px-0 py-1.5'
            label={<p className='text-sm font-semibold text-gray-600'>SNS 내용</p>}
          />
        </div>
      </div>
    </>
  )
}

export default OGoptions
