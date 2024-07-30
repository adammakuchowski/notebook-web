import {DeleteColumnParams, taskApi} from 'api'
import {AxiosResponse} from 'axios'
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import {KanbanTasks} from 'types'

export const useDeleteColumnKanbanTasks = (): UseMutationResult<
  AxiosResponse<KanbanTasks>,
  Error,
  DeleteColumnParams
> => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: taskApi.deleteColumn,
    onSuccess: (response) => {
      if (!response || response.status !== 201) {
        throw new Error('Error while delete column kanban tasks')
      }

      queryClient.invalidateQueries({queryKey: ['kanbanTasks']})
    },
    onError: () => {
      // TODO: init login error notification
    },
  })
}
