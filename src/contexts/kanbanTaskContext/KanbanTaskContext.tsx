import {createContext, useState, useContext} from 'react'
import {useDisclosure} from '@mantine/hooks'
import {ColumnType, Task} from 'types'
import {KanbanTaskContextType} from './types'

const KanbanTaskContext = createContext<KanbanTaskContextType | undefined>(
  undefined,
)

export const KanbanTaskProvider = (Component: () => JSX.Element) => () => {
  const [task, setTask] = useState<Task | undefined>()
  const [column, setColumn] = useState<ColumnType | undefined>()

  const [
    manageTaskModalOpened,
    {open: openManageTaskModal, close: closeManageTaskModal},
  ] = useDisclosure(false)

  const [
    taskDetailsModalOpened,
    {open: openTaskDetailsModal, close: closeTaskDetailsModal},
  ] = useDisclosure(false)

  return (
    <KanbanTaskContext.Provider
      value={{
        column,
        setColumn,
        task,
        setTask,
        manageTaskModalOpened,
        openManageTaskModal,
        closeManageTaskModal,
        taskDetailsModalOpened,
        openTaskDetailsModal,
        closeTaskDetailsModal,
      }}
    >
      <Component />
    </KanbanTaskContext.Provider>
  )
}

export const useKanbanTaskContext = (): KanbanTaskContextType => {
  const context = useContext(KanbanTaskContext)
  if (!context) {
    throw new Error(
      'useKanbanTaskContext must be used within a KanbanTaskProvider',
    )
  }

  return context
}
