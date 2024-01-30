import {Center} from '@mantine/core'

import styled from './AlertIconCount.module.css'

type AlertIconCountProps = {
  alertCount?: number;
}

export const AlertIconCount = ({alertCount}: AlertIconCountProps): JSX.Element | null => {
  if (!alertCount) {
    return null
  }

  return (
    <Center
      classNames={{
        root: styled.container
      }}
      bg={'gray.5'}
      w={20}
      h={20}
      px={10}
      c={'gray.8'}
    >
      {alertCount}
    </Center >
  )
}
