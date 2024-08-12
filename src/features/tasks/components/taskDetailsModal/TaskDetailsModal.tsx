import {useTranslation} from 'react-i18next'
import {Box, Loader, Modal} from '@mantine/core'
import {useTaskDetailsContext} from 'contexts'
import {useGetTaskDetails} from 'hooks'
import classes from './TaskDetailsModal.module.css'

export const TaskDetailsModal = (): JSX.Element => {
  const {t} = useTranslation()

  const {taskId, taskDetailsModalOpened, closeTaskDetailsModal} =
    useTaskDetailsContext()

  const {isPending, isError, data} = useGetTaskDetails(taskId)

  return (
    <Modal
      opened={taskDetailsModalOpened}
      onClose={closeTaskDetailsModal}
      title={t('tasks.taskDetailsModal.title')}
      size={'lg'}
    >
      {isPending ? (
        <Box className={classes.loaderContainer}>
          <Loader />
        </Box>
      ) : (
        <Box className={classes.taskDetailsContainer}>123</Box>
      )}
    </Modal>
  )
}
