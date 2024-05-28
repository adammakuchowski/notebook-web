import {userApi, LoginData} from 'api'
import {AxiosResponse} from 'axios'
import {useNavigate} from 'react-router-dom'
import {UseMutationResult, useMutation} from '@tanstack/react-query'

export const useLoginUser = (): UseMutationResult<
  AxiosResponse,
  Error,
  LoginData
> => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: userApi.loginUser,
    onSuccess: (response) => {
      const {
        data: {token, refreshToken},
      } = response

      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
      navigate('/')
    },
    onError: () => {
      // TODO: init login error notification
    },
  })
}
