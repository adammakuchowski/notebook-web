import {useState} from 'react'
import {DragDropContext, DropResult} from 'react-beautiful-dnd'
import classes from './Kanban.module.css'
import {Column} from './Column'
import {KanbanProps} from './types'

export const Kanban = ({initData}: KanbanProps): JSX.Element => {
  const [data, setData] = useState(initData)

  const onDragEnd = (result: DropResult): void => {
    const {destination, source, draggableId} = result

    if (!destination) {
      return
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return
    }

    const column = data.columns[source.droppableId]
    const newTaskIds = [...column.taskIds]
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    }

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn
      }
    }

    setData(newState)
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <div className={classes.pageContainer}>
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map(taskId => data.tasks[taskId])

          console.log('column', column)
          console.log('tasks', tasks)

          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </div>
    </DragDropContext>

  )
}
