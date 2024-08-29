import {createContext, useState, useContext} from 'react'
import {useDisclosure} from '@mantine/hooks'
import {TaskDetailsContextType} from './types'
import {Task} from 'types/task'

const TaskDetailsContext = createContext<TaskDetailsContextType | undefined>(
  undefined,
)

export const TaskDetailsProvider = (Component: () => JSX.Element) => () => {
  const [task, setTask] = useState<Task>()
  const [
    taskDetailsModalOpened,
    {open: openTaskDetailsModal, close: closeTaskDetailsModal},
  ] = useDisclosure(false)

  return (
    <TaskDetailsContext.Provider
      value={{
        task,
        setTask,
        taskDetailsModalOpened,
        openTaskDetailsModal,
        closeTaskDetailsModal,
      }}
    >
      <Component />
    </TaskDetailsContext.Provider>
  )
}

export const useTaskDetailsContext = (): TaskDetailsContextType => {
  const context = useContext(TaskDetailsContext)
  if (!context) {
    throw new Error(
      'useTaskDetailsContext must be used within a TaskDetailsProvider',
    )
  }

  return context
}
