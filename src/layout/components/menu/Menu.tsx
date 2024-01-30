import {Button, Container, Flex} from '@mantine/core'

import {MenuHeader} from './header/header'
import {SearchBar} from './searchBar/SearchBar'
import classes from './Menu.module.css'
import {IconPhoto} from '@tabler/icons-react'

export const Menu = (): JSX.Element => {
  return (
    <Flex
      classNames={{
        root: classes.menuContainer
      }}
      gap='md'
      justify='flex-start'
      align='center'
      direction='column'
      wrap='nowrap'
      bg={'#ededed'}
    >
      <Flex
        classNames={{
          root: classes.dash
        }}
        direction='column'
        gap='md'
        w={'100%'}
      >
        <Container
          classNames={{
            root: classes.dash
          }}
          px={0}
          miw={'100%'}
          pb={20}
        >
          <MenuHeader />
          <SearchBar />
        </Container>

        <Container px={0} miw={'100%'}>
          <Flex direction='column' gap={10}>

            <Button leftSection={<IconPhoto size={14} />} variant="light" justify='flex-start'>
              Gallery
            </Button>

            <Button
              variant="light"
              justify='space-between'
              rightSection={<IconPhoto size={14} />}
              px={10}
            >
              <Flex gap={10}>
                <IconPhoto size={14} />
                Gallery
              </Flex>
            </Button>

          </Flex>
        </Container>

        {/* <Container px={0} miw={'100%'}>
          LISTS
        </Container>

        <Container px={0} miw={'100%'}>
          TAGS
        </Container> */}
      </Flex>

      <Flex bg={'blue'}>

      </Flex>
    </Flex>
  )
}
