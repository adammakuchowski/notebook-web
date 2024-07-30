import {createContext, useContext} from 'react'
import {useDisclosure} from '@mantine/hooks'
import {DeleteColumnContextType} from './types'

const DeleteColumnContext = createContext<DeleteColumnContextType | undefined>(
  undefined,
)

export const DeleteColumnProvider = (Component: () => JSX.Element) => () => {
  const [
    deleteColumnModalOpened,
    {open: openDeleteColumnModal, close: closeDeleteColumnModal},
  ] = useDisclosure(false)

  return (
    <DeleteColumnContext.Provider
      value={{
        deleteColumnModalOpened,
        openDeleteColumnModal,
        closeDeleteColumnModal
      }}
    >
      <Component/>
    </DeleteColumnContext.Provider>
  )
}

export const useDeleteColumnContext = (): DeleteColumnContextType => {
  const context = useContext(DeleteColumnContext)
  if (!context) {
    throw new Error(
      'useDeleteColumnContext must be used within a DeleteColumnProvider',
    )
  }

  return context
}
