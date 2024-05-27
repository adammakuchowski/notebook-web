import type {AxiosPromise} from 'axios'
import {AuthorizationToken, LoginData} from './types'
import {LOGIN_USER_URL, VERIFY_USER_URL} from './constants'
import {axiosInstance} from '../base'

export const verifyUser = async (): AxiosPromise =>
  await axiosInstance.get(VERIFY_USER_URL)

export const loginUser = async (
  loginData: LoginData,
): AxiosPromise<AuthorizationToken> =>
  await axiosInstance.post(LOGIN_USER_URL, loginData)
