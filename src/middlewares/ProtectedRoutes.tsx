import {withCenterPosition} from 'hocs/withCenterPosition'
import {Loader} from '@mantine/core'
import {Navigate, Outlet} from 'react-router-dom'
import {useVerify} from 'hooks'

const CenterPositionLoader = withCenterPosition(Loader)

const redirectPath = '/login'

export const ProtectedRoutes = (): JSX.Element => {
  const {isPending, data} = useVerify()

  if (isPending) {
    return <CenterPositionLoader />
  }

  return data ? <Outlet /> : <Navigate to={redirectPath} />
}
