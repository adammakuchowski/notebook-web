export interface DeleteColumnContextType {
  deleteColumnModalOpened: boolean
  openDeleteColumnModal: () => void
  closeDeleteColumnModal: () => void
}

export interface DeleteColumnProviderProps {
  children: JSX.Element
}
