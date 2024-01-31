import {Button, Flex} from '@mantine/core'
import {IconPhoto} from '@tabler/icons-react'

import {AlertIconCount} from '../../icons/alertIconCount/AlertIconCount'

type TaskButtonProps = {
  taskName: string;
  alertCount?: number;
}

export const TaskButton = ({taskName, alertCount}: TaskButtonProps): JSX.Element => {
  return (
    <Button
      variant="light"
      justify='space-between'
      rightSection={<AlertIconCount alertCount={alertCount} />}
      px={10}
    >
      <Flex gap={10}>
        <IconPhoto size={14} />
        {taskName}
      </Flex>
    </Button>
  )
}
