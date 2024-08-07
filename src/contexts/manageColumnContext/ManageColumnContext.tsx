import {createContext, useContext, useState} from 'react'
import {useDisclosure} from '@mantine/hooks'
import {ColumnType} from 'types'
import {ManageColumnContextType} from './types'

const ManageColumnContext = createContext<ManageColumnContextType | undefined>(
  undefined,
)

export const ManageColumnProvider = (Component: () => JSX.Element) => () => {
  const [column, setColumn] = useState<ColumnType | undefined>()

  const [
    manageColumnModalOpened,
    {open: openManageColumnModal, close: closeManageColumnModal},
  ] = useDisclosure(false)
  
  return (
    <ManageColumnContext.Provider
      value={{
        column,
        setColumn,
        manageColumnModalOpened,
        openManageColumnModal,
        closeManageColumnModal
      }}
    >
      <Component/>
    </ManageColumnContext.Provider>
  )
}

export const useManageColumnContext = (): ManageColumnContextType => {
  const context = useContext(ManageColumnContext)
  if (!context) {
    throw new Error(
      'useManageColumnContext must be used within a ManageColumnProvider',
    )
  }

  return context
}
