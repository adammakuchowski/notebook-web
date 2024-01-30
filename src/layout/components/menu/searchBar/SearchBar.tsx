import {Input} from '@mantine/core'
import {IconSearch} from '@tabler/icons-react'

export const SearchBar = (): JSX.Element => {
  return (
    <Input
      placeholder='Search'
      variant='filled'
      leftSection={<IconSearch size={16} />}
    />
  )
}
