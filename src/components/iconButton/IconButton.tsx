import {Button} from '@mantine/core'
import classes from './IconButton.module.css'
import {IconButtonProps} from './types'

export const IconButton = ({
  label,
  Icon,
  action,
}: IconButtonProps): JSX.Element => {
  return (
    <Button
      justify='space-between'
      className={classes.iconWrapper}
      leftSection={
        <span className={classes.leftSection}>
          <Icon size='1.7rem' stroke={1.5} />
          <p>{label}</p>
        </span>
      }
      rightSection={<span />}
      variant='filled'
      onClick={action}
    >
      <span />
    </Button>
  )
}
