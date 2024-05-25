import axios, {AxiosError, AxiosResponse} from 'axios'
import {jwtDecode} from 'jwt-decode'
import {API_URL} from 'config'
import dayjs from 'dayjs'
import {AuthorizationToken} from './user'

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
})

const logoutUser = (): void => {
  localStorage.removeItem('token')
  localStorage.removeItem('refreshToken')

  window.location.replace('/login')
}

axiosInstance.interceptors.request.use(async (req) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      return req
    }

    req.headers.Authorization = `Bearer ${token}`

    const user = jwtDecode(token)
    const isExpired = dayjs.unix(user.exp ?? 0).isBefore(dayjs())


    if (!isExpired) return req

    const refreshToken = localStorage.getItem('refreshToken')
    const response = await axios.post<AuthorizationToken>(
      `${API_URL}/user/refreshToken`,
      {
        refreshToken,
      },
    )

    localStorage.setItem('token', response.data.token)
    localStorage.setItem('refreshToken', response.data.refreshToken)

    req.headers.Authorization = `Bearer ${response.data.token}`

    return req
  } catch (error) {
    logoutUser()

    throw error
  }
})

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.response && error.response.status === 403) {
      logoutUser()
    }

    throw error
  },
)
