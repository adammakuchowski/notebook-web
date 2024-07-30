import {useTranslation} from 'react-i18next'
import compose from 'compose-function'
import {Box} from '@mantine/core'
import classes from './Tasks.module.css'
import {Subpage} from 'layouts'
import {TasksPanel, CreateTaskModal, DeleteColumnModal} from 'features'
import {useGetKanbanTasks} from 'hooks'
import {CreateTaskProvider, DeleteColumnProvider} from 'contexts'

export const TasksPage = (): JSX.Element => {
  const {t} = useTranslation()
  const {isPending, isError, data} = useGetKanbanTasks()

  return (
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
      <DeleteColumnModal />
    </Box>
  )
}

export const Tasks = compose(CreateTaskProvider, DeleteColumnProvider)(TasksPage)
