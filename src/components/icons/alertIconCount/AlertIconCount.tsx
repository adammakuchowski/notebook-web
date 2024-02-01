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
        root: styled.root
      }}
      bg={'gray.5'}
      w={30}
      h={20}
      px={10}
      c={'gray.8'}
    >
      {alertCount}
    </Center >
  )
}
