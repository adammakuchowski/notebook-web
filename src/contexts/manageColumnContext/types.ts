import {ColumnType} from 'types'

export interface ManageColumnContextType {
  column: ColumnType | undefined
  setColumn: (newColumn?: ColumnType) => void
  manageColumnModalOpened: boolean
  openManageColumnModal: () => void
  closeManageColumnModal: () => void
}
