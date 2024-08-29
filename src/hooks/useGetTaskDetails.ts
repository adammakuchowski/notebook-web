import {AxiosResponse} from 'axios'
import {UseQueryResult, useQuery} from '@tanstack/react-query'
import {taskApi} from 'api'
import {Task} from 'types'

export const useGetTaskDetails = (
  taskId?: string,
): UseQueryResult<AxiosResponse<Task>> =>
  useQuery({
    queryKey: ['taskDetails', {taskId}],
    queryFn: async () => await taskApi.getTaskDetails({taskId}),
  })
