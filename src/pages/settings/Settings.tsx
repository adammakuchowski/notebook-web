import {Box} from '@mantine/core'
import {useTranslation} from 'react-i18next'
import {Subpage} from 'layouts'
import {SettingsPanel} from 'features'
import classes from './Settings.module.css'
import {settingsAttributes} from './constants'

export const Settings = (): JSX.Element => {
  const {t} = useTranslation()

  return (
    <Box className={classes.pageContainer}>
      <Subpage title={t('settings.title')}>
        <Box className={classes.settingsContainer}>
          <SettingsPanel attributes={settingsAttributes}/>
        </Box>
      </Subpage>
    </Box>
  )
}
