import {DroppableProvided} from 'react-beautiful-dnd'
import classes from './Column.module.css'
import {ColumnType, TaskType} from '../types'
import {Task} from '../Task'
import {StrictModeDroppable} from '../StrictModeDroppable/StrictModeDroppable'

type ColumnProps = {
  column: ColumnType;
  tasks: TaskType[];
}

export const Column = ({column, tasks}: ColumnProps): JSX.Element => {
  return (
        <div className={classes.columnContainer}>
            <h3 className={classes.title}>{column.title}</h3>
            <StrictModeDroppable droppableId={column.id}>
                {(provided: DroppableProvided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={classes.taskList}
                    >
                        {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                        {provided.placeholder}
                    </div>
                )}
            </StrictModeDroppable>

        </div>
  )
}
