import {Box, Text} from '@mantine/core'
import {useTranslation} from 'react-i18next'
import classes from './SettingsPanel.module.css'
import {SettingsPanelProps} from './types'

export const SettingsPanel = ({
  attributes,
}: SettingsPanelProps): JSX.Element => {
  const {i18n} = useTranslation()

  return (
    <Box className={classes.optionsContainer}>
      {attributes.map((attribute) => {
        const {ControlComponent} = attribute

        return (
          <Box className={classes.controlTypeWrapper} key={attribute.fieldName}>
            <Text className={classes.labelWrapper}>
              {attribute.translations[i18n.resolvedLanguage as 'pl' | 'en']}:{' '}
            </Text>
            <ControlComponent {...attribute.controlComponentProps} />
          </Box>
        )
      })}
    </Box>
  )
}
