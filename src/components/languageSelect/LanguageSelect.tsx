import {Select} from '@mantine/core'
import {useTranslation} from 'react-i18next'

import {languageSelectData} from './constants'
import {ChangeLanguageProps, LanguageSelectProps} from './types'

export const LanguageSelect = ({
  width = 75,
}: LanguageSelectProps): JSX.Element => {
  const {i18n} = useTranslation()

  const changeLanguage = (changeLanguageProps: ChangeLanguageProps): void => {
    const {
      option: {value},
    } = changeLanguageProps

    i18n.changeLanguage(value)
  }

  return (
    <Select
      data={languageSelectData}
      defaultValue={i18n.resolvedLanguage}
      onChange={(value, option) => changeLanguage({value, option})}
      allowDeselect={false}
      size='sm'
      w={width}
    />
  )
}
