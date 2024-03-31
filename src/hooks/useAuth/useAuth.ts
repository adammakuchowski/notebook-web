import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'
import moment from 'moment'
import {useQueryClient} from '@tanstack/react-query'

import {authApi} from 'api'
import {UseAuth} from './types'

export const useAuth = (): UseAuth => {
  const navigate = useNavigate()
  // TODO: use useQuery instead of queryClient.fetchQuery
  const queryClient = useQueryClient()
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false)

  const redirectToLoginPage = (): void => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    navigate('/login')
  }

  const checkToken = async (): Promise<void> => {
    const token = localStorage.getItem('token')
    if (!token) {
      return redirectToLoginPage()
    }

    const decodedToken = jwtDecode(token)
    if (!decodedToken?.exp) {
      throw new Error('Invalid token')
    }

    const expirationTime = moment.unix(decodedToken.exp)
    if (moment().isSameOrAfter(expirationTime)) {
      throw new Error('Token is deprecated')
    }

    if (expirationTime.diff(moment(), 'minutes') < 5) {
      const refreshToken = localStorage.getItem('refreshToken')

      if (!refreshToken) {
        throw new Error('Invalid refreshToken')
      }

      const response = await queryClient.fetchQuery({
        queryFn: async () => await authApi.refreshUserToken(token, refreshToken),
        queryKey: ['refreshUserToken', refreshToken]
      })

      if (!response || response.status !== 201) {
        throw new Error('Error while refresh user token')
      }

      const {data: {token: newToken, refreshToken: newRefreshToken}} = response
      localStorage.setItem('token', newToken)
      localStorage.setItem('refreshToken', newRefreshToken)
    }
  }

  useEffect(() => {
    checkToken().then(() => {
      setIsTokenValid(true)
    }).catch(() => {
      redirectToLoginPage()
    })
  }, [navigate, isTokenValid])

  return {isTokenValid}
}
