import cx from 'clsx'
import {useTranslation} from 'react-i18next'
import {useForm} from '@mantine/form'
import {
  TextInput,
  PasswordInput,
  Button,
  Box,
  Group,
  Container,
  Title,
  useMantineColorScheme,
} from '@mantine/core'

import classes from './LoginForm.module.css'
import {useLoginUser} from 'hooks/useLoginUser'

export const LoginForm = (): JSX.Element => {
  const {t} = useTranslation()
  const {colorScheme} = useMantineColorScheme()

  const {mutate, isPending} = useLoginUser()

  const signIn = async (): Promise<void> => {
    const {values} = form
    mutate(values)
  }

  const form = useForm({
    initialValues: {email: '', password: ''},

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
    },
  })

  return (
    <Container className={cx(classes.container, classes[colorScheme])}>
      <Box maw={340} mx="auto" mt={50}>
        <Title order={2} className={classes.titleWrapper}>
          {t('login.title')}
        </Title>
        <form onSubmit={form.onSubmit(signIn)}>
          <TextInput
            label={t('login.email')}
            placeholder={t('login.email')}
            {...form.getInputProps('email')}
          />
          <PasswordInput
            mt="sm"
            label={t('login.password')}
            placeholder={t('login.password')}
            {...form.getInputProps('password')}
          />
          <Group justify="flex-end">
            <Button size="compact-xs" variant="default" justify="right" mt="10">
              {t('login.forgotPassword')}
            </Button>
          </Group>
          <Button type="submit" mt="xl" fullWidth loading={isPending}>
            {t('login.signIn')}
          </Button>
        </form>
      </Box>
    </Container>
  )
}
