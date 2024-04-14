import {Select} from '@mantine/core'
import {useTranslation} from 'react-i18next'

import {languageSelectData} from './constants'
import {ChangeLanguageProps} from './types'

export const LanguageSelect = (): JSX.Element => {
  const {i18n} = useTranslation()

  const changeLanguage = (changeLanguageProps: ChangeLanguageProps): void => {
    const {option: {value}} = changeLanguageProps

    i18n.changeLanguage(value)
  }

  return (
    <Select
      data={languageSelectData}
      defaultValue={i18n.language.includes('pl') ? 'pl' : 'en'}
      onChange={(value, option) => changeLanguage({value, option})}
      allowDeselect={false}
      size='sm'
      w={75}
    />
  )
}
