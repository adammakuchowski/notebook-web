import {KanbanTasks} from 'types/kanban'

export type TasksPanelProps = {
  kanbanTasksData: KanbanTasks | undefined
  isPending: boolean
  isError: boolean
}
