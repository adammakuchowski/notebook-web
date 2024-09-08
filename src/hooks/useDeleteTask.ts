import {DeleteTaskParams, taskApi} from 'api'
import {AxiosResponse} from 'axios'
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import {KanbanTasks} from 'types'

export const useDeleteTask = (): UseMutationResult<
  AxiosResponse<KanbanTasks>,
  Error,
  DeleteTaskParams
> => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: taskApi.deleteTask,
    onSuccess: (response) => {
      if (!response || response.status !== 201) {
        throw new Error('Error while delete task')
      }

      queryClient.invalidateQueries({queryKey: ['kanbanTasks']})
    },
    onError: () => {
      // TODO: init login error notification
    },
  })
}
