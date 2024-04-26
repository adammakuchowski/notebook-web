import {Box} from '@mantine/core'
import {useTranslation} from 'react-i18next'
import {Subpage} from 'layouts'
import {Kanban} from 'components/Kanban'
import classes from './Tasks.module.css'
import {initData} from './data'

export const Tasks = (): JSX.Element => {
  const {t} = useTranslation()

  return (
    <Box className={classes.pageContainer}>
      <Subpage title={t('tasks.title')}>
        <Box className={classes.settingsContainer}>
          <Kanban initData={initData}/>
        </Box>
      </Subpage>
    </Box>
  )
}
