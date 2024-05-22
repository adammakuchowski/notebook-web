import {Box, Loader} from '@mantine/core'
import {IconError404} from '@tabler/icons-react'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {taskApi} from 'api/index'
import classes from './TasksPanel.module.css'
import {Kanban} from 'components'
import {withCenterPosition} from 'hocs/withCenterPosition'
import {TasksPanelProps} from './types'

const CenterPositionLoader = withCenterPosition(Loader)
const CenterPositionError = withCenterPosition(IconError404)

export const TasksPanel = ({
  kanbanTasksData,
  isPending,
  isError,
}: TasksPanelProps): JSX.Element => {
  const queryClient = useQueryClient()

  const {mutate} = useMutation({
    mutationFn: taskApi.updateKanbanTasks,
    onSuccess: (response) => {
      if (!response || response.status !== 200) {
        throw new Error('Error while update kanban tasks')
      }

      queryClient.invalidateQueries({queryKey: ['kanbanTasks']})

      console.log('response', response)
    },
    onError: () => {
      // TODO: init login error notification
    },
  })

  if (isPending) {
    return <CenterPositionLoader />
  }

  if (!kanbanTasksData || isError) {
    return <CenterPositionError />
  }

  return (
    <Box className={classes.tasksPanelContainer}>
      <Kanban initData={kanbanTasksData} updateKanban={mutate} />
    </Box>
  )
}
