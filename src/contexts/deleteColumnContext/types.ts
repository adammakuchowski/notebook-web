import {ColumnType} from 'types'

export interface DeleteColumnContextType {
  column: ColumnType;
  setColumn: (newColumn: ColumnType) => void
  deleteColumnModalOpened: boolean
  openDeleteColumnModal: () => void
  closeDeleteColumnModal: () => void
}

export interface DeleteColumnProviderProps {
  children: JSX.Element
}
