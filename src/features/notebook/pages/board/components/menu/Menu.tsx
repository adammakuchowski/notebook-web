import {
  Container,
  Flex
} from '@mantine/core'

import {MenuHeader} from './header/header'
import {SearchBar} from './searchBar/SearchBar'
import styled from './Menu.module.css'
import {Tasks} from './tasks/Tasks'

export const Menu = (): JSX.Element => {
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
      <Container
        classNames={{
          root: styled.dash
        }}
        px={0}
        miw={'100%'}
        pb={20}
      >
        <MenuHeader />
        <SearchBar />
      </Container>

      <Container
        classNames={{root: styled.dash}}
        px={0}
        miw={'100%'}
        pb={20}>
        <Tasks/>
      </Container>

      {/* <Container px={0} miw={'100%'}>
          LISTS
        </Container>

        <Container px={0} miw={'100%'}>
          TAGS
        </Container> */}

      <Flex bg={'blue'}>

      </Flex>
    </Flex>
  )
}
