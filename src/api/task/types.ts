import {KanbanTasks} from 'types/kanban'

export interface GetKanbanTasksParams {
  token: string
}

export interface UpdateKanbanTasksParams {
  token: string
  kanbanTasks: KanbanTasks
}
