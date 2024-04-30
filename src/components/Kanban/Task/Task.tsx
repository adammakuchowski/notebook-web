import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot
} from 'react-beautiful-dnd'
import classes from './Task.module.css'
import {TaskType} from '../types'

type TaskProps = {
  task: TaskType;
  index: number;
}

export const Task = ({task, index}: TaskProps): JSX.Element => {
  return (
        <Draggable
            draggableId={task.id}
            index={index}
            key={task.id}
        >
            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                <div
                    // TODO: find another way
                    className={snapshot.isDragging ? classes.taskDraggingContainer : classes.taskContainer}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {task.content}
                </div>
            )}
        </Draggable>
  )
}
