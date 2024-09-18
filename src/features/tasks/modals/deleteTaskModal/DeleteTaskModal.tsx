import {useTranslation} from 'react-i18next'
import {Box, Button, Flex, Modal, Text, Title} from '@mantine/core'
import {useDeleteTask} from 'hooks'
import {useKanbanTaskContext} from 'contexts'
import classes from './DeleteTaskModal.module.css'

export const DeleteTaskModal = (): JSX.Element => {
  const {t} = useTranslation()
  const {mutate, isPending} = useDeleteTask()

  const {deleteTaskModalOpened, closeDeleteTaskModal, task, setTask} =
    useKanbanTaskContext()

  const onDeleteColumn = (): void => {
    mutate({taskId: task?._id}, {onSuccess: closeDeleteTaskModal})
    setTask()
  }

  return (
    <Modal
      title={<Title order={5}>{t('tasks.deleteTaskModal.modalTitle')}</Title>}
      size={'lg'}
      closeOnClickOutside={false}
      opened={deleteTaskModalOpened}
      onClose={closeDeleteTaskModal}
    >
      <Box className={classes.infoContainer}>
        <Flex>
          <Text>{t('tasks.deleteTaskModal.info')}</Text>
        </Flex>
      </Box>
      <Box className={classes.buttonsContainer}>
        <Button onClick={closeDeleteTaskModal}>{t('general.cancel')}</Button>
        <Button color="red" onClick={onDeleteColumn} loading={isPending}>
          {t('general.delete')}
        </Button>
      </Box>
    </Modal>
  )
}
