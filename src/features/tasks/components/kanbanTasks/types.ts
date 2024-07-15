import {ColumnType, KanbanTasks, TaskType} from 'types'

export type KanbanProps = {
  initData: KanbanTasks
  updateKanban: any
}

export type ColumnProps = {
  column: ColumnType
  tasks: TaskType[]
  index: number
}

export type TaskProps = {
  task: TaskType
  index: number
}
