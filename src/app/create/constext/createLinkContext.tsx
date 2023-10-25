import { CreateLinkAction, CreateLinkState } from '@/types'
import React, { PropsWithChildren, createContext, useEffect, useReducer } from 'react'
import useGetOgData from '../hooks/useGetOgData'

const initialState: CreateLinkState = {
  description: '',
  image: '',
  site_name: '',
  title: '',
  type: '',
  url: '',
  customURL: '',
  link: '',
}

export const CreateLinkStateContext = createContext<CreateLinkState | null>(null)
export const CreateLinkActionContext = createContext<React.Dispatch<CreateLinkAction> | null>(null)

function CreateLinkActionReducer(state: CreateLinkState, action: CreateLinkAction): CreateLinkState {
  switch (action.type) {
    case 'INIT':
      return { ...state, ...action.payload }
    case 'SET_IMAGE':
      return { ...state, image: action.payload }
    case 'SET_LINK':
      return { ...state, link: action.payload }
    case 'SET_URL':
      return { ...state, url: action.payload }
    case 'SET_TITLE':
      return { ...state, title: action.payload }
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload }
    default:
      return state
  }
}
type Props = {
  link?: string
}

export const CreateLinkProvider = ({ link, children }: PropsWithChildren<Props>) => {
  const [state, dispatch] = useReducer(CreateLinkActionReducer, initialState)
  const { data } = useGetOgData(link)

  useEffect(() => {
    dispatch({ type: 'INIT', payload: { ...data, url: link, link } })
  }, [link, data])

  return (
    <CreateLinkStateContext.Provider value={state}>
      <CreateLinkActionContext.Provider value={dispatch}>{children}</CreateLinkActionContext.Provider>
    </CreateLinkStateContext.Provider>
  )
}
