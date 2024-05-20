import {Select, useMantineColorScheme} from '@mantine/core'
import {useTranslation} from 'react-i18next'
import {ChangeThemeModeProps} from './types'
import {Theme} from 'types'

export const ThemeModeSelect = (): JSX.Element => {
  const {colorScheme, setColorScheme} = useMantineColorScheme()
  const {t, i18n} = useTranslation()

  const themeSelectData = [
    {
      value: 'light',
      label: t('theme.light'),
    },
    {
      value: 'dark',
      label: t('theme.dark'),
    },
  ]

  const changeThemeMode = (
    changeThemeModeProps: ChangeThemeModeProps,
  ): void => {
    const {
      option: {value},
    } = changeThemeModeProps

    setColorScheme(value as Theme)
  }

  // TODO: fix responsiveness

  return (
    <Select
      key={i18n.resolvedLanguage}
      data={themeSelectData}
      defaultValue={colorScheme}
      onChange={(value, option) => changeThemeMode({value, option})}
      allowDeselect={false}
      size="sm"
      w={100}
    />
  )
}
