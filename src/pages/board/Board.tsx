import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {Container, Loader} from '@mantine/core'
import {SidePanel} from 'features'
import {withCenterPosition} from 'hocs/withCenterPosition'
import classes from './Board.module.css'

const CenterPositionLoader = withCenterPosition(Loader)

export const Board = (): JSX.Element => {
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
