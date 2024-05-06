import {LanguageSelect} from 'components/languageSelect_temp'
import {ThemeModeSelect} from 'components/themeModeSelect_temp'
import {Attribute} from 'types'

export const settingsAttributes: Attribute[] = [
  {
    fieldName: 'language',
    translations: {
      pl: 'Język',
      en: 'Language',
    },
    ControlComponent: LanguageSelect,
    controlComponentProps: {
      width: 100,
    },
  },
  {
    fieldName: 'themeMode',
    translations: {
      pl: 'Tryb motywu',
      en: 'Theme mode',
    },
    ControlComponent: ThemeModeSelect,
  },
]
