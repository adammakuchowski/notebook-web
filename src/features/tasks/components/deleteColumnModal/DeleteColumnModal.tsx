import {useTranslation} from 'react-i18next'
import {Box, Button, Flex, Modal, Text, Title} from '@mantine/core'
import {useDeleteColumn} from 'hooks'
import {useDeleteColumnContext} from 'contexts'
import classes from './DeleteColumnModal.module.css'

export const DeleteColumnModal = (): JSX.Element => {
  const {t} = useTranslation()
  const {mutate, isPending} = useDeleteColumn()

  const {deleteColumnModalOpened, closeDeleteColumnModal, column} =
    useDeleteColumnContext()

  const onDeleteColumn = (): void => {
    mutate({columnId: column.id}, {onSuccess: closeDeleteColumnModal})
  }

  return (
    <Modal
      opened={deleteColumnModalOpened}
      onClose={closeDeleteColumnModal}
      title={<Title order={5}>{t('tasks.deleteColumnModal.modalTitle')}</Title>}
      size={'lg'}
    >
      <Box className={classes.infoContainer}>
        <Flex>
          <Text>{t('tasks.deleteColumnModal.info')}</Text>
          <Text fw={700} ml={10}>
            {t(`kanban.column.columnHeader.title.${column.title}`, {defaultValue: `${column.title}`})}
          </Text>
        </Flex>
        <Text>{t('tasks.deleteColumnModal.extraInfo')}</Text>
      </Box>
      <Box className={classes.buttonsContainer}>
        <Button onClick={closeDeleteColumnModal}>{t('general.cancel')}</Button>
        <Button color="red" onClick={onDeleteColumn} loading={isPending}>
          {t('general.delete')}
        </Button>
      </Box>
    </Modal>
  )
}
