import {useTranslation} from 'react-i18next'
import compose from 'compose-function'
import {Box} from '@mantine/core'
import {Subpage} from 'layouts'
import {
  TasksPanel,
  ManageTaskModal,
  DeleteColumnModal,
  ManageColumnModal,
  TaskDetailsModal,
} from 'features'
import {useGetKanbanTasks} from 'hooks'
import {
  KanbanColumnProvider,
  KanbanTaskProvider,
  useKanbanColumnContext,
} from 'contexts'
import classes from './Tasks.module.css'
import {useState} from 'react'

export const TasksPage = (): JSX.Element => {
  const {t} = useTranslation()
  const {isPending, isError, data} = useGetKanbanTasks()
  const [actionButtonDisabled, setActionButtonDisabled] = useState(false)
  const {openManageColumnModal} = useKanbanColumnContext()

  return (
    <Box className={classes.pageContainer}>
      <Subpage
        title={t('tasks.title')}
        actionButton
        actionButtonDisabled={actionButtonDisabled}
        actionButtonTitle={t('tasks.actionButton')}
        actionButtonCallback={openManageColumnModal}
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
      <ManageTaskModal />
      <DeleteColumnModal />
      <ManageColumnModal />
      <TaskDetailsModal/>
    </Box>
  )
}

export const Tasks = compose(
  KanbanTaskProvider,
  KanbanColumnProvider,
)(TasksPage)
