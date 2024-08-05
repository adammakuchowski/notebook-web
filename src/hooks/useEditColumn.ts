import {AxiosResponse} from 'axios'
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import {EditColumnParams, taskApi} from 'api'
import {KanbanTasks} from 'types'

export const useEditColumn = (): UseMutationResult<
  AxiosResponse<KanbanTasks>,
  Error,
  EditColumnParams
> => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: taskApi.editColumn,
    onSuccess: (response) => {
      if (!response || response.status !== 201) {
        throw new Error('Error while edit column')
      }

      queryClient.invalidateQueries({queryKey: ['kanbanTasks']})
    },
    onError: () => {
      // TODO: init login error notification
    },
  })
}
