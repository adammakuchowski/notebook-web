import {Box} from '@mantine/core'
import {useTranslation} from 'react-i18next'
import {Subpage} from 'layouts'

import classes from './Tasks.module.css'

export const Tasks = (): JSX.Element => {
  const {t} = useTranslation()

  return (
    <Box className={classes.pageContainer}>
      <Subpage title={t('tasks.title')}>
        <Box className={classes.settingsContainer}>

        </Box>
      </Subpage>
    </Box>
  )
}
