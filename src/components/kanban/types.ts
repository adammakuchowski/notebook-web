import {ColumnType, KanbanTasks, TaskType} from 'types'

export type KanbanProps = {
  initData: KanbanTasks
}

export type ColumnProps = {
  column: ColumnType
  tasks: TaskType[]
}

export type TaskProps = {
  task: TaskType
  index: number
}
