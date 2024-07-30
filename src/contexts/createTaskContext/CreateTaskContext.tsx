import {createContext, useState, useContext} from 'react'
import {useDisclosure} from '@mantine/hooks'
import {CreateTaskContextType} from './types'

const CreateTaskContext = createContext<CreateTaskContextType | undefined>(
  undefined,
)

export const CreateTaskProvider = (Component: () => JSX.Element) => () => {
  const [columnId, setColumnId] = useState<string>('')
  const [
    createTaskModalOpened,
    {open: openCreateTaskModal, close: closeCreateTaskModal},
  ] = useDisclosure(false)

  return (
    <CreateTaskContext.Provider
      value={{
        columnId,
        setColumnId,
        createTaskModalOpened,
        openCreateTaskModal,
        closeCreateTaskModal,
      }}
    >
      <Component />
    </CreateTaskContext.Provider>
  )
}

export const useCreateTaskContext = (): CreateTaskContextType => {
  const context = useContext(CreateTaskContext)
  if (!context) {
    throw new Error(
      'useCreateTaskContext must be used within a CreateTaskProvider',
    )
  }

  return context
}
