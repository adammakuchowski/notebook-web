import {useTranslation} from 'react-i18next'
import {Box, Button, Flex, Modal, Text, Title} from '@mantine/core'
import {useDeleteColumn} from 'hooks'
import {useDeleteColumnContext} from 'contexts'

export const DeleteColumnModal = (): JSX.Element => {
  const {t} = useTranslation()
  const {mutate, isPending} = useDeleteColumn()

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
