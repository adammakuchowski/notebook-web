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

    const startColumn = data.columns[source.droppableId]
    const finishColumn = data.columns[destination.droppableId]

    if (startColumn === finishColumn) {
      const newTaskIds = [...startColumn.taskIds]
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...startColumn,
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

      return
    }

    const startTaskIds = [...startColumn.taskIds]
    startTaskIds.splice(source.index, 1)

    const newStart = {
      ...startColumn,
      taskIds: startTaskIds
    }

    const finishTaskIds = [...finishColumn.taskIds]
    finishTaskIds.splice(destination.index, 0, draggableId)

    const newFinish = {
      ...finishColumn,
      taskIds: finishTaskIds
    }

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }

    setData(newState)
  }

  // TODO: change tags
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
