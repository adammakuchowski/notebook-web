import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'

import {UseAuth} from './types'

export const useAuth = (): UseAuth => {
  const navigate = useNavigate()
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false)

  const redirectToLoginPage = (): void => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  useEffect(() => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        return redirectToLoginPage()
      }

      const decodedToken = jwtDecode(token)
      if (!decodedToken?.exp) {
        throw new Error('Invalid token')
      }

      const expirationTime = decodedToken.exp * 1000
      if (Date.now() >= expirationTime) {
        throw new Error('Token is deprecated')
      }

      setIsTokenValid(true)
    } catch (error) {
      redirectToLoginPage()
    }
  }, [navigate, isTokenValid])

  return {isTokenValid}
}
