import {useTranslation} from 'react-i18next'
import compose from 'compose-function'
import {Box} from '@mantine/core'
import {Subpage} from 'layouts'
import {
  TasksPanel,
  CreateTaskModal,
  DeleteColumnModal,
  CreateColumnModal,
} from 'features'
import {useGetKanbanTasks} from 'hooks'
import {
  CreateColumnProvider,
  CreateTaskProvider,
  DeleteColumnProvider,
  useCreateColumnContext,
} from 'contexts'
import classes from './Tasks.module.css'
import {useState} from 'react'

export const TasksPage = (): JSX.Element => {
  const {t} = useTranslation()
  const {isPending, isError, data} = useGetKanbanTasks()
  const [actionButtonDisabled, setActionButtonDisabled] = useState(false)
  const {openCreateColumnModal} = useCreateColumnContext()

  return (
    <Box className={classes.pageContainer}>
      <Subpage
        title={t('tasks.title')}
        actionButton
        actionButtonDisabled={actionButtonDisabled}
        actionButtonTitle={t('tasks.actionButton')}
        actionButtonCallback={openCreateColumnModal}
      >
        <Box className={classes.tasksContainer}>
          <TasksPanel
            kanbanTasksData={data?.data}
            isPending={isPending}
            isError={isError}
            setActionButtonDisabled={setActionButtonDisabled}
          />
        </Box>
      </Subpage>
      <CreateTaskModal />
      <DeleteColumnModal />
      <CreateColumnModal />
    </Box>
  )
}

export const Tasks = compose(
  CreateTaskProvider,
  DeleteColumnProvider,
  CreateColumnProvider,
)(TasksPage)
