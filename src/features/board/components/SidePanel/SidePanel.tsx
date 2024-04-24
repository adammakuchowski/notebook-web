import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Container, Title, NavLink, Box} from '@mantine/core'
import {IconLogout, IconNotebook, IconSettings, IconSubtask} from '@tabler/icons-react'
import {IconButton} from 'components'
import classes from './SidePanel.module.css'
import {MenuOption} from './types'

export const SidePanel = (): JSX.Element => {
  const {t} = useTranslation()

  const options: MenuOption[] = [
    {icon: IconSubtask, label: `${t('menu.tasks')}`, path: '/board/tasks'},
    {icon: IconNotebook, label: `${t('menu.notes')}`, path: '/board/notes'},
    {icon: IconSettings, label: `${t('menu.settings')}`, path: '/board/settings'}
  ]

  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState(options.findIndex(option => option.path === location.pathname))

  const items = options.map((item, index) => (
    <NavLink
      classNames={{
        root: classes.root,
        label: classes.label
      }}
      key={item.label}
      active={index === active}
      label={item.label}
      leftSection={<item.icon size='1.7rem' stroke={1.5} />}
      onClick={() => {
        navigate(item.path)
        setActive(index)
      }}
    />
  ))

  const logOut = (): void => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    navigate('/login')
  }

  return (
    <Container className={classes.sidePanelContainer}>
      <Container className={classes.logo}>
        <Title order={2}>
          Notes
        </Title>
      </Container>
      <Box className={classes.menuOptionsWrapper}>
        <Container className={classes.menuOptions}>
          {items}
        </Container>
        <Box className={classes.logout}>
          <IconButton label={t('login.logOut')} Icon={IconLogout} action={logOut} />
        </Box>
      </Box>
    </Container>
  )
}
