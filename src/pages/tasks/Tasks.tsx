import {useTranslation} from 'react-i18next'
import {Box} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import classes from './Tasks.module.css'
import {Subpage} from 'layouts'
import {TasksPanel} from 'features'
import {useGetKanbanTasks} from 'hooks'
import {CreateTaskModal} from 'features/tasks'

export const Tasks = (): JSX.Element => {
  const {t} = useTranslation()
  const [opened, {open, close}] = useDisclosure(false)

  const {isPending, isError, data} = useGetKanbanTasks()

  return (
    <Box className={classes.pageContainer}>
      <Subpage
        title={t('tasks.title')}
        actionButton
        actionButtonDisabled={isError}
        actionButtonTitle={t('tasks.actionButton')}
        actionButtonCallback={open}
      >
        <Box className={classes.tasksContainer}>
          <TasksPanel
            kanbanTasksData={data?.data}
            isPending={isPending}
            isError={isError}
          />
        </Box>
      </Subpage>
      <CreateTaskModal opened={opened} close={close}/>
    </Box>
  )
}
