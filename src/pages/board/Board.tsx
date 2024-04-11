import {Container} from '@mantine/core'
import {SidePanel} from 'features'
import classes from './Board.module.css'

export const Board = (): JSX.Element => {
  return (
    <Container className={classes.boardContainer} fluid>
      <SidePanel />
    </Container>
  )
}
