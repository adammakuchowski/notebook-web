import {useTranslation} from 'react-i18next'
import {useForm} from '@mantine/form'
import {TextInput, Button, Box, Group} from '@mantine/core'

import {LoginFormContainer} from './loginFormStyled'

export const LoginForm = (): JSX.Element => {
  const {t} = useTranslation()

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
        <form onSubmit={form.onSubmit(console.log)}>
          <TextInput label={t('login.email')} placeholder={t('login.email')} {...form.getInputProps('email')} />
          <TextInput mt='sm' label={t('login.password')} placeholder={t('login.password')} {...form.getInputProps('password')} />
          <Group justify='flex-end'>
            <Button size='compact-xs' variant='white' justify='right' p='0'>
              {t('login.forgotPassword')}
            </Button>
          </Group>
          <Button type='submit' mt='xl' fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </LoginFormContainer>
  )
}
