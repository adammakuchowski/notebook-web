import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'
import moment from 'moment'
import {useMutation} from '@tanstack/react-query'

import {authApi} from 'api'
import {UseAuth} from './types'

export const useAuth = (): UseAuth => {
  const navigate = useNavigate()
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false)

  // isPending
  const {mutate} = useMutation({
    mutationFn: authApi.refreshUserToken,
    onSuccess: (response) => {
      if (!response || response.status !== 201) {
        throw new Error('Error while refresh user token')
      }

      const {data: {token: newToken, refreshToken: newRefreshToken}} = response
      localStorage.setItem('token', newToken)
      localStorage.setItem('refreshToken', newRefreshToken)
    },
    onError: () => {
      // TODO: init login error notification
    }
  })

  const redirectToLoginPage = (): void => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    navigate('/login')
  }

  const checkToken = async (): Promise<void> => {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('Toekn is required')
    }

    const decodedToken = jwtDecode(token)
    if (!decodedToken?.exp) {
      throw new Error('Invalid token')
    }

    const expirationTime = moment.unix(decodedToken.exp)
    if (moment().isSameOrAfter(expirationTime)) {
      throw new Error('Token is deprecated')
    }

    const refreshToken = localStorage.getItem('refreshToken')
    if (!refreshToken) {
      throw new Error('RefreshToken is required')
    }

    if (expirationTime.diff(moment(), 'minutes') < 10) {
      mutate({token, refreshToken})
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
