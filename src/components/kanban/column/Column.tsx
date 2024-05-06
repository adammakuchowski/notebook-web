import {DroppableProvided, DroppableStateSnapshot} from 'react-beautiful-dnd'
import classes from './Column.module.css'
import {ColumnType, TaskType} from '../types'
import {Task} from '../task'
import {StrictModeDroppable} from '../strictModeDroppable/StrictModeDroppable'

type ColumnProps = {
  column: ColumnType
  tasks: TaskType[]
}

export const Column = ({column, tasks}: ColumnProps): JSX.Element => {
  return (
    // TODO: change tags
    <div className={classes.columnContainer}>
      <h3 className={classes.title}>{column.title}</h3>
      <StrictModeDroppable droppableId={column.id}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <div
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
          </div>
        )}
      </StrictModeDroppable>
    </div>
  )
}
