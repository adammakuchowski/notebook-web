import {createContext, useState, useContext} from 'react'
import {useDisclosure} from '@mantine/hooks'
import {ColumnType} from 'types'
import {ManageTaskContextType} from './types'

const ManageTaskContext = createContext<ManageTaskContextType | undefined>(
  undefined,
)

export const ManageTaskProvider = (Component: () => JSX.Element) => () => {
  const [column, setColumn] = useState<ColumnType>({
    id: '',
    title: '',
    taskIds: []
  })
  
  const [
    manageTaskModalOpened,
    {open: openManageTaskModal, close: closeManageTaskModal},
  ] = useDisclosure(false)

  return (
    <ManageTaskContext.Provider
      value={{
        column,
        setColumn,
        manageTaskModalOpened,
        openManageTaskModal,
        closeManageTaskModal,
      }}
    >
      <Component />
    </ManageTaskContext.Provider>
  )
}

export const useManageTaskContext = (): ManageTaskContextType => {
  const context = useContext(ManageTaskContext)
  if (!context) {
    throw new Error(
      'useManageTaskContext must be used within a ManageTaskProvider',
    )
  }

  return context
}
