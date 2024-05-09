import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd'
import {ActionIcon} from '@mantine/core'
import {IconArrowsMaximize} from '@tabler/icons-react'
import classes from './Task.module.css'
import {TaskProps} from './types'

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
      // TODO: change tags
      <div
        // TODO: find another way
        className={
          snapshot.isDragging
            ? classes.taskDraggingContainer
            : classes.taskContainer
        }
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <TaskDetailsButton />
        {task.title}
      </div>
    )}
  </Draggable>
)
