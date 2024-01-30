import {Flex} from '@mantine/core'

import {Header} from './components/header/Header'
import classes from './Board.module.css'

export const Board = (): JSX.Element => {
  return (
    <Flex
      classNames={{
        root: classes.root
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
