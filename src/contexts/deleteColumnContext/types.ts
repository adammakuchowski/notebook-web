import {ReactNode} from 'react'

export interface DeleteColumnContextType {
  deleteColumnModalOpened: boolean
  openDeleteColumnModal: () => void
  closeDeleteColumnModal: () => void
}

export interface DeleteColumnProviderProps {
  children: ReactNode
}
