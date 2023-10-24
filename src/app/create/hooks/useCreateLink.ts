import { useContext } from 'react'
import { CreateLinkActionContext, CreateLinkStateContext } from '../constext/createLinkContext'

export const useCreateLinkState = () => {
  const context = useContext(CreateLinkStateContext)
  if (context === undefined || context === null) {
    throw new Error('useAppState must be used within a AppProvider')
  }
  return context
}

export const useCreateLinkAction = () => {
  const context = useContext(CreateLinkActionContext)
  if (context === undefined || context === null) {
    throw new Error('useAppDispatch must be used within a AppProvider')
  }
  return context
}
