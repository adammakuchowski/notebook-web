import {AxiosResponse} from 'axios'
import {UseMutationResult, useMutation, useQueryClient} from '@tanstack/react-query'
import {CreateTaskParams, taskApi} from 'api'
import {Task} from 'types'

export const useCreateTask = (): UseMutationResult<
  AxiosResponse<Task>,
  Error,
  CreateTaskParams
> => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: taskApi.createTask,
    onSuccess: (response) => {
      if (!response || response.status !== 201) {
        throw new Error('Error while create tasks')
      }

      queryClient.invalidateQueries({queryKey: ['kanbanTasks']})
    },
    onError: () => {
      // TODO: init login error notification
    },
  })
}
