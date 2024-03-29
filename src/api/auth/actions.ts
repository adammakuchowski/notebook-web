import type {AxiosPromise} from 'axios'

import {apiInstance} from '../base'
import {
  AuthorizationToken,
  LoginData
} from './types'
import {LOGIN_USER_URL} from './constants'

export const loginUser = async (loginData: LoginData): AxiosPromise<AuthorizationToken> => (
  await apiInstance.post(LOGIN_USER_URL, loginData)
)
