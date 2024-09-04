import {ColumnType, Task} from 'types'

export interface KanbanTaskContextType {
  column: ColumnType
  setColumn: (newColumn: ColumnType) => void
  task: Task | undefined
  setTask: (newTask?: Task) => void
  manageTaskModalOpened: boolean
  openManageTaskModal: () => void
  closeManageTaskModal: () => void
  taskDetailsModalOpened: boolean
  openTaskDetailsModal: () => void
  closeTaskDetailsModal: () => void
}
