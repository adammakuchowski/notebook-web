import {ColumnType, KanbanTasks, TaskType} from 'types'

export type KanbanProps = {
  initData: KanbanTasks
  updateKanban: any
  setActionButtonDisabled: (isDisabled: boolean) => void
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
