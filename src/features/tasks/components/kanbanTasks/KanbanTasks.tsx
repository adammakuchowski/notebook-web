import {useEffect, useState} from 'react'
import {
  DragDropContext,
  DropResult,
  DroppableProvided,
} from 'react-beautiful-dnd'
import {Box} from '@mantine/core'
import {KanbanTasks as KanbanTasksType} from 'types'
import classes from './KanbanTasks.module.css'
import {Column} from './column'
import {KanbanProps} from './types'
import {StrictModeDroppable} from './strictModeDroppable'

export const KanbanTasks = ({
  initData,
  updateKanban,
  setActionButtonDisabled
}: KanbanProps): JSX.Element => {
  const [data, setData] = useState<KanbanTasksType>(initData)

  useEffect(() => {
    setData(initData)
  }, [initData])

  useEffect(() => {
    setActionButtonDisabled(data.columnOrder.length >= 6)
  }, [data.columnOrder])

  const onDragEnd = async (result: DropResult): Promise<void> => {
    const {destination, source, draggableId, type} = result

    if (!destination) {
      return
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return
    }

    if (type === 'column') {
      const newColumnOrder = [...data.columnOrder]
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      const newState = {
        ...data,
        columnOrder: newColumnOrder,
      }

      setData(newState)
      await updateKanban({kanbanTasks: newState})

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
        taskIds: newTaskIds,
      }

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      }

      setData(newState)
      await updateKanban({kanbanTasks: newState})

      return
    }

    const startTaskIds = [...startColumn.taskIds]
    startTaskIds.splice(source.index, 1)

    const newStart = {
      ...startColumn,
      taskIds: startTaskIds,
    }

    const finishTaskIds = [...finishColumn.taskIds]
    finishTaskIds.splice(destination.index, 0, draggableId)

    const newFinish = {
      ...finishColumn,
      taskIds: finishTaskIds,
    }

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }

    setData(newState)
    await updateKanban({kanbanTasks: newState})
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable
        droppableId='all-columns'
        direction='horizontal'
        type='column'
      >
        {(provided: DroppableProvided) => (
          <Box
            className={classes.pageContainer}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {data.columnOrder.map((columnId, index) => {
              const column = data.columns[columnId]
              const tasks = column.taskIds.map((taskId) => data.tasks[taskId])

              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  index={index}
                />
              )
            })}
            {provided.placeholder}
          </Box>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  )
}
