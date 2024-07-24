import {
  DroppableProvided,
  DraggableProvided,
  Draggable,
} from 'react-beautiful-dnd'
import {useTranslation} from 'react-i18next'
import {Box, UnstyledButton} from '@mantine/core'
import {useCreateTaskContext} from 'contexts'
import classes from './Column.module.css'
import {Task} from '../task'
import {ColumnProps} from '../types'
import {StrictModeDroppable} from '../strictModeDroppable'
import {ColumnHeader} from './columnHeader'

export const Column = ({column, tasks, index}: ColumnProps): JSX.Element => {
  const {t} = useTranslation()
  const {openCreateTaskModal, setColumnId} = useCreateTaskContext()

  const onOpenCreateTaskModal = (): void => {
    setColumnId(column.id)
    openCreateTaskModal()
  }

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided: DraggableProvided) => (
        <Box
          className={classes.columnContainer}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <ColumnHeader provided={provided} column={column}/>
          <StrictModeDroppable droppableId={column.id} type='task'>
            {(provided: DroppableProvided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={classes.taskList}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </Box>
            )}
          </StrictModeDroppable>
          <UnstyledButton
            className={classes.addTaskButton}
            onClick={onOpenCreateTaskModal}
          >
            {t('tasks.createTask')}
          </UnstyledButton>
        </Box>
      )}
    </Draggable>
  )
}
