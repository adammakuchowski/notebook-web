import {Container, Flex} from '@mantine/core'

import {MenuHeader} from './header/header'
import {SearchBar} from './searchBar/SearchBar'
import classes from './Menu.module.css'

export const Menu = (): JSX.Element => {
  return (
    <Flex
      classNames={{
        root: classes.root
      }}
      mih={50}
      gap='md'
      justify='flex-start'
      align='center'
      direction='column'
      wrap='nowrap'
    >
      <MenuHeader />
      <Container size='xs'>
        <SearchBar />
      </Container>
    </Flex>

  )
}
