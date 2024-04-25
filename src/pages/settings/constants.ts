import {LanguageSelect} from 'components/LanguageSelect'
import {ThemeModeSelect} from 'components/ThemeModeSelect'
import {Attribute} from 'types'

export const settingsAttributes: Attribute[] = [
  {
    fieldName: 'language',
    translations: {
      pl: 'Język',
      en: 'Language'
    },
    ControlComponent: LanguageSelect,
    controlComponentProps: {
      width: 100
    }
  },
  {
    fieldName: 'themeMode',
    translations: {
      pl: 'Tryb motywu',
      en: 'Theme mode'
    },
    ControlComponent: ThemeModeSelect
  }
]
