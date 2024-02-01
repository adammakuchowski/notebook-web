import {ActionIcon, Flex, Title} from '@mantine/core'
import {IconMenu2} from '@tabler/icons-react'

export const MenuHeader = (): JSX.Element => {
  return (
    <Flex
      miw={'100%'}
      justify='space-between'
      align='center'
      direction='row'
      wrap='nowrap'
      pb={15}
    >
      <Title order={2}>Menu</Title>
      <ActionIcon variant='transparent' color='black' aria-label='Settings'>
        <IconMenu2 stroke={2} />
      </ActionIcon>
    </Flex>
  )
}
