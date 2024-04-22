import {Box, Title} from '@mantine/core'
import classes from './Subpage.module.css'
import {SubpageProps} from './types'

export const Subpage = ({children, title}: SubpageProps): JSX.Element => (
    <Box className={classes.pageContainer}>
        <Box className={classes.titleTopBar}>
            <Title order={2}>{title}</Title>
        </Box>
        <Box className={classes.contentContainer}>
            {children}
        </Box>
    </Box>
)
