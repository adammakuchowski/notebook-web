import {Loader} from '@mantine/core'

import {useAuth} from 'hooks'

export const withAuth = (WrappedComponent: () => JSX.Element) => (props: Record<string, unknown>) => {
  // TODO: implement refreshing the toekn
  // TODO: useAuth - should be useTokenValid
  const {isTokenValid} = useAuth()

  if (!isTokenValid) {
    return (
      <Loader color='blue' />
    )
  }

  return <WrappedComponent {...props} />
}
