import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {Container, Loader} from '@mantine/core'
import {useQuery} from '@tanstack/react-query'
import {userApi} from 'api'
import {SidePanel} from 'features'
import {withCenterPosition} from 'hocs/withCenterPosition'
import classes from './Board.module.css'

const CenterPositionLoader = withCenterPosition(Loader)

export const Board = (): JSX.Element => {
  const {isPending} = useQuery({
    queryKey: ['verifyUser'],
    queryFn: async () => await userApi.verifyUser(),
  })

  if (isPending) {
    return <CenterPositionLoader />
  }

  return (
    <Container className={classes.boardContainer} fluid>
      <SidePanel />
      <Container className={classes.contentContainer} fluid>
        <Suspense fallback={<CenterPositionLoader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Container>
  )
}
