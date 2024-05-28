import {Box} from '@mantine/core'
import {CenterPositionError, CenterPositionLoader, Kanban} from 'components'
import {useUpdateKanbanTasks} from 'hooks'
import classes from './TasksPanel.module.css'
import {TasksPanelProps} from './types'

export const TasksPanel = ({
  kanbanTasksData,
  isPending,
  isError,
}: TasksPanelProps): JSX.Element => {
  const {mutate} = useUpdateKanbanTasks()

  if (isPending) {
    return <CenterPositionLoader />
  }

  if (!kanbanTasksData || isError) {
    return <CenterPositionError />
  }

  return (
    <Box className={classes.tasksPanelContainer}>
      <Kanban initData={kanbanTasksData} updateKanban={mutate} />
    </Box>
  )
}
