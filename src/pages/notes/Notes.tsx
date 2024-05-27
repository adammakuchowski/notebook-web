import {Box} from '@mantine/core'
import {useTranslation} from 'react-i18next'
import {Subpage} from 'layouts'
import classes from './Notes.module.css'

export const Notes = (): JSX.Element => {
  const {t} = useTranslation()

  return (
    <Box className={classes.pageContainer}>
      <Subpage title={t('notes.title')}>
        <Box className={classes.settingsContainer}></Box>
      </Subpage>
    </Box>
  )
}
