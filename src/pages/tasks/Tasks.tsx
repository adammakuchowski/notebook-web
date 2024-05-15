import {useTranslation} from 'react-i18next'
import {Box} from '@mantine/core'
import {useQuery} from '@tanstack/react-query'
import classes from './Tasks.module.css'
import {taskApi} from 'api'
import {Subpage} from 'layouts'
import {TasksPanel} from 'features'
// import {initData} from './data'

export const Tasks = (): JSX.Element => {
  const {t} = useTranslation()

  const token = localStorage.getItem('token')

  if (token === null) {
    throw new Error('No token found')
  }

  const {isPending, isError, data} = useQuery({
    queryKey: ['todos'],
    queryFn: async () => await taskApi.getKanbanTasks({token}),
  })

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
