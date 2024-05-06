import {Box, Button, Title} from '@mantine/core'
import classes from './Subpage.module.css'
import {SubpageProps} from './types'

export const Subpage = ({
  children,
  title,
  actionButton,
  actionButtonTitle,
  actionButtonCallback,
}: SubpageProps): JSX.Element => (
  <Box className={classes.pageContainer}>
    <Box className={classes.titleTopBar}>
      <Title order={2}>{title}</Title>
      {actionButton ? (
        <Button variant="filled" onClick={actionButtonCallback}>
          {actionButtonTitle}
        </Button>
      ) : null}
    </Box>
    <Box className={classes.contentContainer}>{children}</Box>
  </Box>
)
