import {useDisclosure} from '@mantine/hooks'
import {FC, ReactNode, createContext, useState, useContext} from 'react'

interface CreateTaskContextType {
  columnId: string
  setColumnId: (newColumnId: string) => void
  createTaskModalOpened: boolean
  openCreateTaskModal: () => void
  closeCreateTaskModal: () => void
}

const CreateTaskContext = createContext<CreateTaskContextType | undefined>(
  undefined,
)

interface CreateTaskProviderProps {
  children: ReactNode
}

export const CreateTaskProvider: FC<CreateTaskProviderProps> = ({children}) => {
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
      {children}
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
