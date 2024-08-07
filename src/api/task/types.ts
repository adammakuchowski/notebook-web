import {KanbanTasks, Task} from 'types'

export interface GetKanbanTasksParams {
  token: string
}

export interface UpdateKanbanTasksParams {
  kanbanTasks: KanbanTasks
}

export interface CreateTaskParams {
  task: Task
  columnId: string
}

export interface DeleteColumnParams {
  columnId: string
}

export interface CreateColumnParams {
  columnId?: string
  title: string
}

export interface EditColumnParams {
  columnId?: string
  title: string
}
