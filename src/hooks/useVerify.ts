import {AxiosResponse} from 'axios'
import {UseQueryResult, useQuery} from '@tanstack/react-query'
import {userApi} from 'api/index'

export const useVerify = (): UseQueryResult<AxiosResponse> => {
  return useQuery({
    queryKey: ['verifyUser'],
    queryFn: async () => await userApi.verifyUser(),
  })
}
