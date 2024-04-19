import {Box, Container, Title} from '@mantine/core'

import classes from './TopBar.module.css'
import {LanguageSelect, ThemeModeButton} from 'components'

export const TopBar = (): JSX.Element => {
  return (
    <Container className={classes.topBarContainer} fluid>
      <Title className={classes.logo} order={1}>
        Note.
      </Title>
      <Box className={classes.settings}>
        <ThemeModeButton />
        <LanguageSelect />
      </Box>
    </Container>
  )
}
