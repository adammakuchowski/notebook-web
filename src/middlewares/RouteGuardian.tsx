import {Navigate, Outlet} from 'react-router-dom'
import {useVerify} from 'hooks'
import {CenterPositionLoader} from 'components'

const redirectPath = '/login'

export const RouteGuardian = (): JSX.Element => {
  const {isPending, data} = useVerify()

  if (isPending) {
    return <CenterPositionLoader />
  }

  return data ? <Outlet /> : <Navigate to={redirectPath} />
}
