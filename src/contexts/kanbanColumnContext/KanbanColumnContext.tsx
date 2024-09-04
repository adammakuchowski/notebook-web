import {createContext, useContext, useState} from 'react'
import {useDisclosure} from '@mantine/hooks'
import {ColumnType} from 'types'
import {KanbanColumnContextType} from './types'

const KanbanColumnContext = createContext<KanbanColumnContextType | undefined>(
  undefined,
)

export const KanbanColumnProvider = (Component: () => JSX.Element) => () => {
  const [column, setColumn] = useState<ColumnType | undefined>()

  const [
    manageColumnModalOpened,
    {open: openManageColumnModal, close: closeManageColumnModal},
  ] = useDisclosure(false)

  const [
    deleteColumnModalOpened,
    {open: openDeleteColumnModal, close: closeDeleteColumnModal},
  ] = useDisclosure(false)
  
  return (
    <KanbanColumnContext.Provider
      value={{
        column,
        setColumn,
        manageColumnModalOpened,
        openManageColumnModal,
        closeManageColumnModal,
        deleteColumnModalOpened,
        openDeleteColumnModal,
        closeDeleteColumnModal
      }}
    >
      <Component/>
    </KanbanColumnContext.Provider>
  )
}

export const useKanbanColumnContext = (): KanbanColumnContextType => {
  const context = useContext(KanbanColumnContext)
  if (!context) {
    throw new Error(
      'useKanbanColumnContext must be used within a KanbanColumnProvider',
    )
  }

  return context
}
