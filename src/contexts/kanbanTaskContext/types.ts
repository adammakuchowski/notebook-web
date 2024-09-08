import {ColumnType, Task} from 'types'

export interface KanbanTaskContextType {
  column: ColumnType | undefined
  setColumn: (newColumn?: ColumnType) => void
  task: Task | undefined
  setTask: (newTask?: Task) => void
  manageTaskModalOpened: boolean
  openManageTaskModal: () => void
  closeManageTaskModal: () => void
  taskDetailsModalOpened: boolean
  openTaskDetailsModal: () => void
  closeTaskDetailsModal: () => void
  deleteTaskModalOpened: boolean
  openDeleteTaskModal: () => void
  closeDeleteTaskModal: () => void
}
