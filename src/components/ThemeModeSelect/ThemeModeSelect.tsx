import {Select, useMantineColorScheme} from '@mantine/core'
import {themeSelectData} from './constants'
import {ChangeThemeModeProps} from './types'
import {Theme} from 'types'

export const ThemeModeSelect = (): JSX.Element => {
  const {colorScheme, setColorScheme} = useMantineColorScheme()

  const changeThemeMode = (changeThemeModeProps: ChangeThemeModeProps): void => {
    const {option: {value}} = changeThemeModeProps

    setColorScheme(value as Theme)
  }

  return (
    <Select
      data={themeSelectData}
      defaultValue={colorScheme}
      onChange={(value, option) => changeThemeMode({value, option})}
      allowDeselect={false}
      size='sm'
      w={100}
    />
  )
}
