import {Box, Loader} from '@mantine/core'
import {IconError404} from '@tabler/icons-react'

import classes from './TasksPanel.module.css'
import {Kanban} from 'components'
import {withCenterPosition} from 'hocs/withCenterPosition'
import {TasksPanelProps} from './types'

const CenterPositionLoader = withCenterPosition(Loader)
const CenterPositionError = withCenterPosition(IconError404)

export const TasksPanel = ({
  kanbanTasksData,
  isPending,
  isError,
}: TasksPanelProps): JSX.Element => {
  if (isPending) {
    return <CenterPositionLoader />
  }

  if (!kanbanTasksData || isError) {
    return <CenterPositionError />
  }

  return (
    <Box className={classes.tasksPanelContainer}>
      <Kanban initData={kanbanTasksData} />
    </Box>
  )
}
