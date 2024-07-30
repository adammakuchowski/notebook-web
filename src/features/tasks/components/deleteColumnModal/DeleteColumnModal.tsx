import {useTranslation} from 'react-i18next'
import {Button, Modal} from '@mantine/core'
// import {useDeleteColumnKanbanTasks} from 'hooks'
import {useDeleteColumnContext} from 'contexts'

export const DeleteColumnModal = (): JSX.Element => {
  const {t} = useTranslation()
//   const {mutate, isPending} = useDeleteColumnKanbanTasks()

  const {deleteColumnModalOpened, closeDeleteColumnModal} = useDeleteColumnContext()

  return (
    <Modal
      opened={deleteColumnModalOpened}
      onClose={closeDeleteColumnModal}
      title={t('tasks.createTaskModal.modalTitle')}
      size={'lg'}
    >
        <Button>Open modal</Button>
        <Button>Open modal</Button>
    </Modal>
  )
}
