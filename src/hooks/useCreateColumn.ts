import {AxiosResponse} from 'axios'
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import {CreateColumnParams, taskApi} from 'api'
import {KanbanTasks} from 'types'

export const useCreateColumn = (): UseMutationResult<
  AxiosResponse<KanbanTasks>,
  Error,
  CreateColumnParams
> => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: taskApi.createColumn,
    onSuccess: (response) => {
      if (!response || response.status !== 201) {
        throw new Error('Error while create column')
      }

      queryClient.invalidateQueries({queryKey: ['kanbanTasks']})
    },
    onError: () => {
      // TODO: init login error notification
    },
  })
}
