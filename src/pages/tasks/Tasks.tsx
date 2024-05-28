import {useTranslation} from 'react-i18next'
import {Box} from '@mantine/core'
import classes from './Tasks.module.css'
import {Subpage} from 'layouts'
import {TasksPanel} from 'features'
import {useGetKanbanTasks} from 'hooks'
// import {initData} from './data'

export const Tasks = (): JSX.Element => {
  const {t} = useTranslation()

  const {isPending, isError, data} = useGetKanbanTasks()

  return (
    <Box className={classes.pageContainer}>
      <Subpage
        title={t('tasks.title')}
        actionButton
        actionButtonDisabled={isError}
        actionButtonTitle={t('tasks.actionButton')}
        // TODO
        actionButtonCallback={() => console.log(123)}
      >
        <Box className={classes.settingsContainer}>
          <TasksPanel
            kanbanTasksData={data?.data}
            isPending={isPending}
            isError={isError}
          />
        </Box>
      </Subpage>
    </Box>
  )
}
