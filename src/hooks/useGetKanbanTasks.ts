import {taskApi} from 'api'
import {UseQueryResult, useQuery} from '@tanstack/react-query'
import {AxiosResponse} from 'axios'
import {KanbanTasks} from 'types/kanban'

export const useGetKanbanTasks = (): UseQueryResult<
  AxiosResponse<KanbanTasks>
> => {
  return useQuery({
    queryKey: ['kanbanTasks'],
    queryFn: async () => await taskApi.getKanbanTasks(),
  })
}
