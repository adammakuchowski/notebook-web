import {createContext, useContext} from 'react'
import {useDisclosure} from '@mantine/hooks'
import {CreateColumnContextType} from './types'

const CreateColumnContext = createContext<CreateColumnContextType | undefined>(
  undefined,
)

export const CreateColumnProvider = (Component: () => JSX.Element) => () => {
  const [
    createColumnModalOpened,
    {open: openCreateColumnModal, close: closeCreateColumnModal},
  ] = useDisclosure(false)

  return (
    <CreateColumnContext.Provider
      value={{
        createColumnModalOpened,
        openCreateColumnModal,
        closeCreateColumnModal
      }}
    >
      <Component/>
    </CreateColumnContext.Provider>
  )
}

export const useCreateColumnContext = (): CreateColumnContextType => {
  const context = useContext(CreateColumnContext)
  if (!context) {
    throw new Error(
      'useCreateColumnContext must be used within a CreateColumnProvider',
    )
  }

  return context
}
