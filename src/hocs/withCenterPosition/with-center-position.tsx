import {Container} from '@mantine/core'

import classes from './with-center-position.module.css'

export const withCenterPosition = <P extends object>(Component: React.ComponentType<P>) => (props: P) => (
  <Container className={classes.centerPositionContainer} fluid>
    <Component {...props} />
  </Container>
)
