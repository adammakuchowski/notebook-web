import {Input} from '@mantine/core'
import {IconSearch} from '@tabler/icons-react'

import styled from './SearchBar.module.css'

export const SearchBar = (): JSX.Element => {
  return (
    <Input
      classNames={{
        input: styled.input,
        wrapper: styled.wrapper
      }}
      placeholder='Search'
      variant='filled'
      leftSection={<IconSearch size={16} />}
    />
  )
}
