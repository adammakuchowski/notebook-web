import {DroppableProvided, DroppableStateSnapshot} from 'react-beautiful-dnd'
import {Box, Title} from '@mantine/core'
import classes from './Column.module.css'
import {ColumnType, TaskType} from '../types'
import {Task} from '../task'
import {StrictModeDroppable} from '../strictModeDroppable/StrictModeDroppable'

type ColumnProps = {
  column: ColumnType
  tasks: TaskType[]
}

export const Column = ({column, tasks}: ColumnProps): JSX.Element => {
  const {t} = useTranslation()

  return (
    <Box className={classes.columnContainer}>
      <Title order={4} className={classes.title}>{column.title}</Title>
      <StrictModeDroppable droppableId={column.id}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={
              snapshot.isDraggingOver
                ? classes.activeTaskList
                : classes.taskList
            }
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </StrictModeDroppable>
    </Box>
  )
}
