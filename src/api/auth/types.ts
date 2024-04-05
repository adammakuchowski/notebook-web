export type LoginData = {
  email: string;
  password: string;
}

export type AuthorizationToken = {
  token: string;
  refreshToken: string;
}

export type RefreshUserTokenProps = {
  token: string;
  refreshToken: string;
}
