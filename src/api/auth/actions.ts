import type {AxiosPromise} from 'axios'

import {apiInstance} from '../base'
import {AuthorizationToken, LoginData, RefreshUserTokenProps} from './types'
import {LOGIN_USER_URL, REFRESH_USER_TOKEN_URL} from './constants'

export const loginUser = async (
  loginData: LoginData,
): AxiosPromise<AuthorizationToken> =>
  await apiInstance.post(LOGIN_USER_URL, loginData)

export const refreshUserToken = async ({
  token,
  refreshToken,
}: RefreshUserTokenProps): AxiosPromise<AuthorizationToken> =>
  await apiInstance.post(
    REFRESH_USER_TOKEN_URL,
    {refreshToken},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
