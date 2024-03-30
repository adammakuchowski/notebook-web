import {Loader} from '@mantine/core'

import {useAuth} from 'hooks'

export const withAuth = (Component: () => JSX.Element) => (props: Record<string, unknown>) => {
  // TODO: implement refreshing the toekn
  // TODO: useAuth - should be useTokenValid
  const {isTokenValid} = useAuth()

  console.log('isTokenValid', isTokenValid)

  if (!isTokenValid) {
    return (
      <Loader color='blue' />
    )
  }

  return <Component {...props} />
}
