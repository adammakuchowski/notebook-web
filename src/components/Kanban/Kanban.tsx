import {useState} from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import classes from './Kanban.module.css'
import {Column} from './Column'
import {KanbanProps} from './types'

export const Kanban = ({initData}: KanbanProps): JSX.Element => {
  const [data] = useState(initData)

  const onDragEnd = (): void => {
    console.log(123)
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
