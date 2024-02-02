import {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {Box, NavLink} from '@mantine/core'

import {MenuTaskOption} from './types'
import {menuTaskOptions} from './constants'

export const Tasks = (): JSX.Element => {
  const [active, setActive] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const currentSubpageIndex = menuTaskOptions.findIndex((menuTaskOption: MenuTaskOption): boolean => (
      location.pathname.includes(menuTaskOption.path))
    )

    if (currentSubpageIndex) {
      setActive(currentSubpageIndex)
    }
  }, [location.pathname])

  const handleRedirect = (index: number, path: string): void => {
    setActive(index)
    navigate(path)
  }

  const menuTaskNavLinks = menuTaskOptions.map((
    item: MenuTaskOption,
    index: number
  ): JSX.Element => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      rightSection={<item.rightSection alertCount={0} />}
      leftSection={<item.icon size='1rem' stroke={1.5} />}
      onClick={() => handleRedirect(index, item.path)}
      color='gray'
      defaultOpened={item.defaultOpened}
    />
  ))

  return (
    <Box w={'100%'}>{menuTaskNavLinks}</Box>
  )
}
