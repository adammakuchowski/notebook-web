import {useTranslation} from 'react-i18next'
import moment from 'moment'
import {Box, Loader, Modal, Title, Text, Flex, Button} from '@mantine/core'
import {useManageTaskContext, useTaskDetailsContext} from 'contexts'
import {useGetTaskDetails} from 'hooks'
import classes from './TaskDetailsModal.module.css'

export const TaskDetailsModal = (): JSX.Element => {
  const {t} = useTranslation()
  const {openManageTaskModal, setTask} = useManageTaskContext()
  const {task, taskDetailsModalOpened, closeTaskDetailsModal} =
    useTaskDetailsContext()

  const {isPending, data} = useGetTaskDetails(task?._id)
  const hasTime = moment(data?.data.eventDate).format('HH:mm:ss') !== '00:00:00'

  const onTaskEdit = (): void => {
    setTask(data?.data)
    closeTaskDetailsModal()
    openManageTaskModal()
  }

  return (
    <Modal
      withCloseButton={false}
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
            <Button onClick={closeTaskDetailsModal}>
              {t('general.close')}
            </Button>
            <Button onClick={onTaskEdit}>{t('general.edit')}</Button>
          </Box>
        </Box>
      )}
    </Modal>
  )
}
