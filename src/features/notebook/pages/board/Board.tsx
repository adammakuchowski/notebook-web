import {Flex} from '@mantine/core'

import {Header} from './components/header/Header'
import styled from './Board.module.css'

export const Board = (): JSX.Element => {
  return (
    <Flex
      classNames={{
        root: styled.root
      }}
      mih={50}
      gap='md'
      bg={'pink.1'}
      justify='flex-start'
      align='flex-start'
      direction='row'
      wrap='wrap'
    >
      <Header />
    </Flex>
  )
}
