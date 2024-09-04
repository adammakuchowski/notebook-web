import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd'
import {useTranslation} from 'react-i18next'
import {Box, Tooltip} from '@mantine/core'
import {IconGridDots} from '@tabler/icons-react'
import {useKanbanTaskContext} from 'contexts'
import classes from './Task.module.css'
import {TaskProps} from '../types'

const priorityPalette: Record<string, string> = {
  low: '#D7EAFA',
  medium: '#FFFF9D',
  high: '#FFC791',
  highest: '#FF6E6E',
}

const PriorityDot = ({priority}: {priority: string}): JSX.Element => {
  const {t} = useTranslation()

  return (
    <Tooltip
      label={`${t(`priority.title`)}: ${t(`priority.${priority}`)}`}
      withArrow
    >
      <Box
        className={classes.priority}
        style={{backgroundColor: priorityPalette?.[priority]}}
      />
    </Tooltip>
  )
}

export const Task = ({task, index}: TaskProps): JSX.Element => {
  const {openTaskDetailsModal, setTask} = useKanbanTaskContext()

  const onTaskDetailsOpen = (): void => {
    setTask(task)
    openTaskDetailsModal()
  }

  return (
    <Draggable draggableId={task._id} index={index} key={task._id}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <Box
          className={
            snapshot.isDragging
              ? classes.taskDraggingContainer
              : classes.taskContainer
          }
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onClick={onTaskDetailsOpen}
        >
          <Box className={classes.taskTitleContainer}>
            <PriorityDot priority={task.priority} />
            {task.title}
          </Box>

          <Box style={{display: 'flex'}}>
            <IconGridDots stroke={2} />
          </Box>
        </Box>
      )}
    </Draggable>
  )
}
