import {ColumnType} from 'types'

export interface ManageTaskContextType {
  column: ColumnType
  setColumn: (newColumn: ColumnType) => void
  manageTaskModalOpened: boolean
  openManageTaskModal: () => void
  closeManageTaskModal: () => void
}
