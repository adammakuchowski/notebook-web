import {taskApi} from 'api'
import {AxiosResponse} from 'axios'
import {UseMutationResult, useMutation, useQueryClient} from '@tanstack/react-query'
import {Task} from 'types/task'
import {CreateTaskParams} from 'api/task/types'

export const useCreateTask = (): UseMutationResult<
  AxiosResponse<Task>,
  Error,
  CreateTaskParams
> => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: taskApi.createTask,
    onSuccess: (response) => {
      if (!response || response.status !== 200) {
        throw new Error('Error while create tasks')
      }

      queryClient.invalidateQueries({queryKey: ['kanbanTasks']})
    },
    onError: () => {
      // TODO: init login error notification
    },
  })
}
