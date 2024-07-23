import {useTranslation} from 'react-i18next'
import {Box} from '@mantine/core'
import classes from './Tasks.module.css'
import {Subpage} from 'layouts'
import {TasksPanel} from 'features'
import {useGetKanbanTasks} from 'hooks'
import {CreateTaskModal} from 'features/tasks'
import {CreateTaskProvider} from 'contexts'

export const Tasks = (): JSX.Element => {
  const {t} = useTranslation()
  const {isPending, isError, data} = useGetKanbanTasks()

  return (
    <CreateTaskProvider>
      <Box className={classes.pageContainer}>
        <Subpage
          title={t('tasks.title')}
          actionButton
          actionButtonDisabled={isError}
          actionButtonTitle={t('tasks.actionButton')}
          actionButtonCallback={() => {}}
        >
          <Box className={classes.tasksContainer}>
            <TasksPanel
              kanbanTasksData={data?.data}
              isPending={isPending}
              isError={isError}
            />
          </Box>
        </Subpage>
        <CreateTaskModal />
      </Box>
    </CreateTaskProvider>
  )
}
