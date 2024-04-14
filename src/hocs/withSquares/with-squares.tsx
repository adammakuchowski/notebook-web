import {Box} from '@mantine/core'

import classes from './with-squares.module.css'
import {Square} from 'components'

export const withSquares = <P extends object>(Component: React.ComponentType<P>) => (props: P) => (
    <Box className={classes.withSquaresWrapper}>
        <Box className={classes.leftSquareWrapper}><Square /></Box>
        <Component {...props} />
        <Box className={classes.rightSquareWrapper}><Square /></Box>
    </Box>
)
