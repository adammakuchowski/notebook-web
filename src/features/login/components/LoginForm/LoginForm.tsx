import {useTranslation} from 'react-i18next'
import {useQueryClient} from '@tanstack/react-query'
import {useForm} from '@mantine/form'
import {
  TextInput,
  PasswordInput,
  Button,
  Box,
  Group
} from '@mantine/core'

import {authApi} from 'api'
import {LoginFormContainer} from './loginFormStyled'

export const LoginForm = (): JSX.Element => {
  const {t} = useTranslation()

  const queryClient = useQueryClient()

  const signIn = async (): Promise<void> => {
    const {values} = form

    try {
      const response = await queryClient.fetchQuery({
        queryFn: async () => await authApi.loginUser(values),
        queryKey: ['signIn', values]
      })

      if (!response || response.status !== 200) {
        throw new Error('Error while sign in')
      }

      const {data: {token, refreshToken}} = response
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
    } catch (err) {
      // TODO
    }
  }

  const form = useForm({
    initialValues: {email: '', password: ''},

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null)
    }
  })

  return (
    <LoginFormContainer>
      <Box maw={340} mx='auto'>
        <form onSubmit={form.onSubmit(signIn)}>
          <TextInput label={t('login.email')} placeholder={t('login.email')} {...form.getInputProps('email')} />
          <PasswordInput mt='sm' label={t('login.password')} placeholder={t('login.password')} {...form.getInputProps('password')} />
          <Group justify='flex-end'>
            <Button size='compact-xs' variant='white' justify='right' p='0'>
              {t('login.forgotPassword')}
            </Button>
          </Group>
          <Button type='submit' mt='xl' fullWidth>
            {t('login.signIn')}
          </Button>
        </form>
      </Box>
    </LoginFormContainer>
  )
}
