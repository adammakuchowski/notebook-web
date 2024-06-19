import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd'
import {useTranslation} from 'react-i18next'
import {ActionIcon, Box, Tooltip} from '@mantine/core'
import {IconArrowsMaximize} from '@tabler/icons-react'
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
    <Tooltip label={`${t(`kanban.priority.title`)}: ${t(`kanban.priority.${priority}`)}`} withArrow>
      <Box
        className={classes.priority}
        style={{backgroundColor: priorityPalette?.[priority]}}
      />
    </Tooltip>
  )
}

const TaskDetailsButton = (): JSX.Element => {
  const openTaskDetails = (): void => {
    // TODO
    console.log(123)
  }

  return (
    <ActionIcon variant="light" aria-label="Settings" onClick={openTaskDetails}>
      <IconArrowsMaximize style={{width: '70%', height: '70%'}} stroke={1.5} />
    </ActionIcon>
  )
}

export const Task = ({task, index}: TaskProps): JSX.Element => (
  <Draggable draggableId={task.id} index={index} key={task.id}>
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
      >
        <Box className={classes.taskTitleContainer}>
          <TaskDetailsButton />
          {task.title}
        </Box>

        <Box style={{display: 'flex'}}>
          <PriorityDot priority={task.priority} />
        </Box>
      </Box>
    )}
  </Draggable>
)
