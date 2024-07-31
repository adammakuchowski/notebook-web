export interface CreateTaskContextType {
  columnId: string
  setColumnId: (newColumnId: string) => void
  createTaskModalOpened: boolean
  openCreateTaskModal: () => void
  closeCreateTaskModal: () => void
}
