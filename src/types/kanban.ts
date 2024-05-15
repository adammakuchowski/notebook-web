export type TaskType = {
  id: string
  title: string
}

export type ColumnType = {
  id: string
  title: string
  taskIds: string[]
}

export type KanbanTasks = {
  tasks: Record<string, TaskType>
  columns: Record<string, ColumnType>
  columnOrder: string[]
}
