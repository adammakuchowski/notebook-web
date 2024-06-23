import {UpdateKanbanTasksParams, taskApi} from 'api'
import {AxiosResponse} from 'axios'
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import {KanbanTasks} from 'types'

export const useUpdateKanbanTasks = (): UseMutationResult<
  AxiosResponse<KanbanTasks>,
  Error,
  UpdateKanbanTasksParams
> => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: taskApi.updateKanbanTasks,
    onSuccess: (response) => {
      if (!response || response.status !== 200) {
        throw new Error('Error while update kanban tasks')
      }

      queryClient.invalidateQueries({queryKey: ['kanbanTasks']})
    },
    onError: () => {
      // TODO: init login error notification
    },
  })
}
