import {
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  Draggable,
} from 'react-beautiful-dnd'
import {useTranslation} from 'react-i18next'
import {Box, Title} from '@mantine/core'
import classes from './Column.module.css'
import {Task} from '../task'
import {ColumnProps} from '../types'
import {StrictModeDroppable} from '../strictModeDroppable'
import {iconMapper} from 'utils'

export const Column = ({column, tasks, index}: ColumnProps): JSX.Element => {
  const {t} = useTranslation()

  const {
    icons: {iconRight},
  } = column

  const IconRight = iconMapper[iconRight]

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided: DraggableProvided) => (
        <Box
          className={classes.columnContainer}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <Title
            order={4}
            className={classes.title}
            {...provided.dragHandleProps}
          >
            {t(`kanban.column.title.${column.title}`)}
            <IconRight stroke={2} />
          </Title>
          <StrictModeDroppable droppableId={column.id} type="task">
            {(
              provided: DroppableProvided,
              snapshot: DroppableStateSnapshot,
            ) => (
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
      )}
    </Draggable>
  )
}
