import {Task} from 'types/task'

export interface TaskDetailsContextType {
  task: Task | undefined
  setTask: (newTask?: Task) => void
  taskDetailsModalOpened: boolean
  openTaskDetailsModal: () => void
  closeTaskDetailsModal: () => void
}
