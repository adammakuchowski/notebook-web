import {t} from 'i18next'
import {Box, Title, Menu, ActionIcon} from '@mantine/core'
import {IconDots, IconTrash} from '@tabler/icons-react'
import classes from './ColumnHeader.module.css'
import {ColumnHeaderProps} from './types'

export const ColumnHeader = ({
  provided,
  column,
}: ColumnHeaderProps): JSX.Element => {
  return (
    <Box className={classes.columnHeader}>
      <Title order={4} className={classes.title} {...provided.dragHandleProps}>
        {t(`kanban.column.columnHeader.title.${column.title}`)}
      </Title>
      <Menu shadow='md' width={200}>
        <Menu.Target>
          <ActionIcon variant='transparent' className={classes.titleButton}>
            <IconDots stroke={2} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>
            {t(`kanban.column.columnHeader.menu.title`)}
          </Menu.Label>
          <Menu.Item
            color='red'
            leftSection={<IconTrash style={{width: 14, height: 14}} />}
          >
            {t(`kanban.column.columnHeader.menu.deleteColumn`)}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  )
}
