import {Box, Container} from '@mantine/core'

import classes from './TopBar.module.css'
import {LanguageSelect, ThemeModeButton} from 'components'

export const TopBar = (): JSX.Element => {
  return (
    <Container className={classes.topBarContainer} fluid>
      <Box>LOGO</Box>
      <Box className={classes.settings}>
        <ThemeModeButton/>
        <LanguageSelect/>
      </Box>
    </Container>
  )
}
