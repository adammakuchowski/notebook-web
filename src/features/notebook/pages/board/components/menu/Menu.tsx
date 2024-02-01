import {Container, Flex} from '@mantine/core'

import {MenuHeader} from './header/header'
import {SearchBar} from './searchBar/SearchBar'
import styled from './Menu.module.css'

import {
  IconArrowsRight,
  IconListCheck,
  IconCalendarMonth,
  IconNote
} from '@tabler/icons-react'
import {TaskButton} from '../../../../../../components/buttons/taskButton/TaskButton'

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
        <Flex direction='column' gap={10}>
          <TaskButton taskName='Upcoming' icon={<IconArrowsRight size={14} />} />
          <TaskButton taskName='Today' alertCount={4} icon={<IconListCheck size={14} />}/>
          <TaskButton taskName='Calendar' icon={<IconCalendarMonth size={14} />}/>
          <TaskButton taskName='Note' alertCount={2} icon={<IconNote size={14} />}/>
        </Flex>
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
