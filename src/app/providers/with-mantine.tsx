import '@mantine/core/styles.css'
import {MantineProvider} from '@mantine/core'

export const withMantine = (Component: () => JSX.Element) => () => (
  <MantineProvider>
    <Component />
  </MantineProvider>
)
