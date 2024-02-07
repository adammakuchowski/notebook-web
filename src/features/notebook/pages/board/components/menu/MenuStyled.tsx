import {ReactNode} from 'react'
import {Flex} from '@mantine/core'

import styled from './Menu.module.css'

type ChildrenProps = {
  children: ReactNode
}

export const MenuContainer = ({children}: ChildrenProps): JSX.Element => {
  return (
    <Flex
      classNames={{
        root: styled.menuContainer
      }}
      gap='md'
      justify='flex-start'
      align='center'
      direction='column'
      wrap='nowrap'
      bg={'#ededed'}
    >
      {children}
    </Flex>
  )
}
