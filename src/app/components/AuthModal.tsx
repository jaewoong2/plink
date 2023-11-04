'use client'
import React, { useCallback, useEffect, useState } from 'react'
import SimpleModal from './SimpleModal'
import { useModal, useToast } from '@chakra-ui/react'
import useIsLoggedIn from '../create/hooks/useIsLoggedIn'
import Input from './Input'
import useMagicLinkLogin from '../create/hooks/useMagicLinkLogin'

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isLoggedIn, errorUpdatedAt, error, show } = useIsLoggedIn({ enabled: false })
  const [email, setEmail] = useState('')
  const toast = useToast()
  const modal = useModal({
    isOpen,
    onClose: () => {
      setIsOpen(false)
    },
  })

  const { mutate: login, isPending } = useMagicLinkLogin({
    onSuccess: (data) => {
      if (200 > data.status || data.status > 299) {
        toast({
          isClosable: true,
          status: 'error',
          title: '메세지 전송 실패',
          position: 'top-right',
        })
        return
      }
      modal.onClose()
      toast({
        isClosable: true,
        title: '로그인 메일 전송 완료',
        description: '이메일을 확인 해주세요',
      })
    },
    onError: (error) => {
      toast({
        isClosable: true,
        status: 'error',
        title: '등록 실패',
        description: error.message,
        position: 'top-right',
      })
      modal.onClose()
    },
  })

  const onClickEmailSignIn = useCallback(() => {
    if (isPending) return
    login({ email })
  }, [email, login, isPending])

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  useEffect(() => {
    if (error && show) {
      setIsOpen(!isLoggedIn)
    }

    return () => {
      setIsOpen(false)
    }
  }, [isLoggedIn, errorUpdatedAt, error, show])

  return (
    <SimpleModal
      {...modal}
      title='로그인'
      subTitle='로그인을 하면, 나만의 URL을 커스텀 할 수 있어요'
      closeOnOverlayClick={true}
    >
      <div className='form-control w-full pb-5'>
        <form
          className='relative flex w-full gap-5 py-2 pt-6'
          onSubmit={(e) => {
            e.preventDefault()
            onClickEmailSignIn()
          }}
        >
          <p className='absolute top-0 text-sm font-semibold text-gray-600 dark:text-white'>이메일을 입력하세요</p>
          <div className='flex w-full gap-4 text-sm read-only:cursor-pointer'>
            <Input
              type='text'
              placeholder='introduce@example.com'
              className='mx-2 h-full w-full'
              required
              value={email}
              onChange={onChangeEmail}
            />
            <button
              className='btn-accent btn justify-start text-white'
              type='submit'
              disabled={isPending}
              aria-label='로그인'
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </SimpleModal>
  )
}

export default AuthModal
