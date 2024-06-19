export type TaskType = {
  id: string
  title: string
  priority: string
}

export type ColumnType = {
  id: string
  title: string
  taskIds: string[]
  color: string
  icons: {
    iconLeft: any
    iconRight: any
  }
}

export type Columns = Record<string, ColumnType>

export type Tasks = Record<string, TaskType>

export type KanbanTasks = {
  tasks: Tasks
  columns: Columns
  columnOrder: string[]
}
