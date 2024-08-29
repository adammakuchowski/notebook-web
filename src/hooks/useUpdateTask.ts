import {AxiosResponse} from 'axios'
import {UseMutationResult, useMutation, useQueryClient} from '@tanstack/react-query'
import {UpdateTaskParams, taskApi} from 'api'
import {Task} from 'types'

export const useUpdateTask = (): UseMutationResult<
  AxiosResponse<Task>,
  Error,
  UpdateTaskParams
> => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: taskApi.updateTask,
    onSuccess: (response) => {
      if (!response || response.status !== 201) {
        throw new Error('Error while update tasks')
      }

      queryClient.invalidateQueries({queryKey: ['kanbanTasks']})
    },
    onError: () => {
      // TODO: init login error notification
    },
  })
}
