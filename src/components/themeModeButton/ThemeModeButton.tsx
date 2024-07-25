import cx from 'clsx'
import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import {IconSun, IconMoon} from '@tabler/icons-react'
import classes from './ThemeModeButton.module.css'
import {Theme} from 'types'

export const ThemeModeButton = (): JSX.Element => {
  const {setColorScheme} = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme(Theme.Light, {
    getInitialValueInEffect: true,
  })

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(
          computedColorScheme === Theme.Light ? Theme.Dark : Theme.Light,
        )
      }
      variant='default'
      size='lg'
      aria-label='Toggle color scheme'
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  )
}
