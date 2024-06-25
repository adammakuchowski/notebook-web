import {DroppableProvided, DroppableStateSnapshot} from 'react-beautiful-dnd'
import {useTranslation} from 'react-i18next'
import {Box, Title} from '@mantine/core'
import classes from './Column.module.css'
import {Task} from '../task'
import {ColumnProps} from '../types'
import {StrictModeDroppable} from '../strictModeDroppable/StrictModeDroppable'
import {iconMapper} from 'utils'

export const Column = ({column, tasks}: ColumnProps): JSX.Element => {
  const {t} = useTranslation()

  const {icons: {iconLeft, iconRight}} = column

  const IconLeft = iconMapper[iconLeft]
  const IconRight = iconMapper[iconRight]

  return (
    <Box className={classes.columnContainer}>
      <Title order={4} className={classes.title}>
        <Box className={classes.icon} style={{backgroundColor: column.color}}>
          <IconLeft stroke={2} />
        </Box>
        {t(`kanban.column.title.${column.title}`)}
        <IconRight stroke={2} />
      </Title>
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
