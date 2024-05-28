import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {Container} from '@mantine/core'
import {SidePanel} from 'features'
import {CenterPositionLoader} from 'components'
import classes from './Board.module.css'

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
