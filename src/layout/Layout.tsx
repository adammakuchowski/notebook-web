import {Flex} from '@mantine/core'

import {Menu} from './components/menu/Menu'
import styled from './Layout.module.css'
import {LayoutProps} from './types'

export const Layout = ({children}: LayoutProps): JSX.Element => {
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
      {children}
    </Flex>
  )
}
