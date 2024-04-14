import {Box} from '@mantine/core'
import {LoginForm, TopBar} from 'features'
import classes from './Login.module.css'

export const Login = (): JSX.Element => {
  return (
    <Box className={classes.loginBoxWrapper}>
      <TopBar/>
      <LoginForm/>
    </Box>
  )
}
