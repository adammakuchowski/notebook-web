import {Box} from '@mantine/core'
import {useTranslation} from 'react-i18next'
import {Subpage} from 'layouts'

import classes from './Settings.module.css'

export const Settings = (): JSX.Element => {
  const {t} = useTranslation()

  return (
    <Box className={classes.pageContainer}>
      <Subpage title={t('settings.title')}>
        <Box>
          123
        </Box>
      </Subpage>
    </Box>
  )
}
