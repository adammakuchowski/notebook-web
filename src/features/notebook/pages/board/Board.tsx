import {Outlet} from 'react-router-dom'
import {Flex} from '@mantine/core'

import {Menu} from './components/menu/Menu'
import styled from './Board.module.css'

export const Board = (): JSX.Element => {
  return (
    <Flex
      classNames={{
        root: styled.root
      }}
      mih={50}
      justify='flex-start'
      align='flex-start'
      direction='row'
      wrap='nowrap'
      gap={15}
    >
      <Menu />
      <Outlet />
    </Flex>
  )
}
