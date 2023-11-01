import { CreateLinkAction, CreateLinkState } from '@/types'
import React, { PropsWithChildren, createContext, useEffect, useReducer } from 'react'
import useGetOgData from '../hooks/useGetOgData'
import { useToast } from '@chakra-ui/react'
import { addHttpProtocol, isValidUrl } from '@/lib'
import useGetUUID from '../hooks/useGetUUID'

const initialState: CreateLinkState = {
  description: '',
  image: '',
  site_name: '',
  title: '',
  type: '',
  url: '', //
  customURL: null,
  link: '', // 원본 얘는 처음 이후 바뀌면 안됨
  isLoading: false,
  isError: false,
}

export const CreateLinkStateContext = createContext<CreateLinkState | null>(null)
export const CreateLinkActionContext = createContext<React.Dispatch<CreateLinkAction> | null>(null)

function CreateLinkActionReducer(state: CreateLinkState, action: CreateLinkAction): CreateLinkState {
  switch (action.type) {
    case 'INIT':
      return { ...state, ...action.payload }
    case 'SET_IMAGE':
      return { ...state, image: action.payload }
    case 'SET_URL':
      return { ...state, url: action.payload }
    case 'SET_LINK':
      return { ...state, link: action.payload }
    case 'SET_TITLE':
      return { ...state, title: action.payload }
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload }
    case 'SET_ISLOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_CUSTOM_URL':
      return { ...state, customURL: action.payload }
    default:
      return state
  }
}
type Props = {
  link: string
}

export const CreateLinkProvider = ({ link, children }: PropsWithChildren<Props>) => {
  const protocolLink = addHttpProtocol(link)
  const [state, dispatch] = useReducer(CreateLinkActionReducer, { ...initialState, link: protocolLink })
  const { data, isLoading, error, isSuccess } = useGetOgData(protocolLink, { enabled: isValidUrl(protocolLink) })
  const { data: uuidData } = useGetUUID({
    enabled: state.customURL === null,
  })
  const toast = useToast()

  useEffect(() => {
    if (data) {
      dispatch({ type: 'INIT', payload: { ...data, isLoading, url: protocolLink, link: protocolLink } })
      return
    }
  }, [data, isLoading, protocolLink])

  useEffect(() => {
    if (isSuccess && !data && !error) {
      toast({
        title: <p className='font-tossFace'>정보가 없어요 😂</p>,
        description: <p className='font-tossFace'>추가로 작성을 해주세요</p>,
        variant: 'solid',
        position: 'top',
        status: 'warning',
      })
      return
    }
  }, [data, error, isSuccess, toast])

  useEffect(() => {
    if (error) {
      toast({
        title: error?.response?.data?.message,
        description: '올바른 링크를 작성해주세요',
        variant: 'solid',
        position: 'top',
        status: 'error',
      })
    }
  }, [error, toast])

  useEffect(() => {
    if (uuidData?.uuid) {
      dispatch({ type: 'SET_CUSTOM_URL', payload: uuidData.uuid })
      return
    }
  }, [uuidData, dispatch])

  return (
    <CreateLinkStateContext.Provider value={state}>
      <CreateLinkActionContext.Provider value={dispatch}>{children}</CreateLinkActionContext.Provider>
    </CreateLinkStateContext.Provider>
  )
}
