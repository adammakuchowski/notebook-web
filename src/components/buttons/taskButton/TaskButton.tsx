import {Button, Flex} from '@mantine/core'
import {useNavigate} from 'react-router-dom'

import {AlertIconCount} from '../../icons/alertIconCount/AlertIconCount'
import styled from './TaskButton.module.css'

type TaskButtonProps = {
  taskName: string;
  icon: JSX.Element;
  alertCount?: number;
}

export const TaskButton = ({taskName, alertCount, icon}: TaskButtonProps): JSX.Element => {
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate('/board/upcoming')
  }

  return (
    <Button
      classNames={{
        root: styled.root
      }}
      variant="subtle"
      justify='space-between'
      rightSection={<AlertIconCount alertCount={alertCount} />}
      px={0}
      color='#000000'
      onClick={handleClick}
    >
      <Flex gap={10} px={10}>
        {icon}
        {taskName}
      </Flex>
    </Button>
  )
}
