import {useTranslation} from 'react-i18next'
import moment from 'moment'
import {Box, Loader, Modal, Title, Text, Flex, Button} from '@mantine/core'
import {useKanbanTaskContext} from 'contexts'
import {useGetTaskDetails} from 'hooks'
import classes from './TaskDetailsModal.module.css'
import {IconTrash} from '@tabler/icons-react'

export const TaskDetailsModal = (): JSX.Element => {
  const {t} = useTranslation()
  const {
    task,
    taskDetailsModalOpened,
    closeTaskDetailsModal,
    openManageTaskModal,
    setTask,
    openDeleteTaskModal,
  } = useKanbanTaskContext()

  const {isPending, data} = useGetTaskDetails(task?._id)
  const hasTime = moment(data?.data.eventDate).format('HH:mm:ss') !== '00:00:00'

  const onTaskEdit = (): void => {
    setTask(data?.data)
    closeTaskDetailsModal()
    openManageTaskModal()
  }

  const onTaskDelete = (): void => {
    setTask(data?.data)
    closeTaskDetailsModal()
    openDeleteTaskModal()
  }

  return (
    <Modal
      withCloseButton={true}
      opened={taskDetailsModalOpened}
      onClose={closeTaskDetailsModal}
      title={<Title order={5}>{t('tasks.taskDetailsModal.title')}</Title>}
      size={'lg'}
    >
      {isPending ? (
        <Box className={classes.loaderContainer}>
          <Loader />
        </Box>
      ) : (
        <Box className={classes.taskDetailsContainer}>
          <Flex gap="md">
            <Box className={classes.mainTaskInformation}>
              <Box>
                <Title order={5}>{t('tasks.taskModal.title')}</Title>
                <Text>{data?.data.title}</Text>
              </Box>
              <Box>
                <Title order={5}>{t('tasks.taskModal.description')}</Title>
                <Text>{data?.data.description}</Text>
              </Box>
            </Box>

            <Box className={classes.taskDetails}>
              <Box>
                <Title order={5}>{t('tasks.taskModal.priority')}</Title>
                <Text>{t(`priority.${data?.data.priority}`)}</Text>
              </Box>
              {data?.data.eventDate ? (
                <Box>
                  <Title order={5}>{t('tasks.taskModal.eventDate')}</Title>
                  <Text>
                    {moment(data?.data.eventDate).format(
                      hasTime ? 'DD.MM.YYYY, HH:mm:ss' : 'DD.MM.YYYY',
                    )}
                  </Text>
                </Box>
              ) : null}
            </Box>
          </Flex>

          <Box className={classes.taskDetailsButtonActons}>
            <Button
              onClick={onTaskDelete}
              leftSection={<IconTrash size={14} />}
              color="red"
            >
              {t('general.delete')}
            </Button>
            <Button onClick={onTaskEdit}>{t('general.edit')}</Button>
          </Box>
        </Box>
      )}
    </Modal>
  )
}
