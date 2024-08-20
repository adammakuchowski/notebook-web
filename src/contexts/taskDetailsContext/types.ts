export interface TaskDetailsContextType {
  taskId: string
  setTaskId: (newTaskId: string) => void
  taskDetailsModalOpened: boolean
  openTaskDetailsModal: () => void
  closeTaskDetailsModal: () => void
}
