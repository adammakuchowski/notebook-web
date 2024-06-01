import {Box, Loader} from '@mantine/core'
import {IconError404} from '@tabler/icons-react'
import {Kanban} from 'components'
import {withCenterPosition} from 'hocs'
import {useUpdateKanbanTasks} from 'hooks'
import classes from './TasksPanel.module.css'
import {TasksPanelProps} from './types'

const CenterPositionLoader = withCenterPosition(Loader)
const CenterPositionError = withCenterPosition(IconError404)

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