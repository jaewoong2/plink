import { CreateLinkAction, CreateLinkState } from '@/types'
import React, { PropsWithChildren, createContext, useEffect, useReducer } from 'react'
import useGetOgData from '../hooks/useGetOgData'

const initialState: CreateLinkState = {
  description: '',
  image: '',
  site_name: '',
  title: '',
  type: '',
  url: '', //
  isLoading: false,
  customURL: '',
  link: '', // 원본 얘는 처음 이후 바뀌면 안됨
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
    default:
      return state
  }
}
type Props = {
  link?: string
}

export const CreateLinkProvider = ({ link, children }: PropsWithChildren<Props>) => {
  const [state, dispatch] = useReducer(CreateLinkActionReducer, initialState)
  const { data, isLoading } = useGetOgData(link, { keepPreviousData: false })

  useEffect(() => {
    if (data) {
      dispatch({ type: 'INIT', payload: { ...data, isLoading, url: link, link } })
    }
  }, [link, data, isLoading])

  return (
    <CreateLinkStateContext.Provider value={state}>
      <CreateLinkActionContext.Provider value={dispatch}>{children}</CreateLinkActionContext.Provider>
    </CreateLinkStateContext.Provider>
  )
}
