import {ColumnType} from 'types'

export interface KanbanColumnContextType {
  column: ColumnType | undefined
  setColumn: (newColumn?: ColumnType) => void
  manageColumnModalOpened: boolean
  openManageColumnModal: () => void
  closeManageColumnModal: () => void
  deleteColumnModalOpened: boolean
  openDeleteColumnModal: () => void
  closeDeleteColumnModal: () => void
}
