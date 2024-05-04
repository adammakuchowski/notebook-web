import {Loader} from '@mantine/core'

import {useAuth} from 'hooks'

export const withAuth =
  (Component: () => JSX.Element) => (props: Record<string, unknown>) => {
    const {isTokenValid} = useAuth()

    if (!isTokenValid) {
      return <Loader color="blue" />
    }

    return <Component {...props} />
  }
