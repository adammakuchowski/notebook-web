import '@mantine/core/styles.css'
import {MantineProvider} from '@mantine/core'

export const withMantineCore = (Component: () => JSX.Element) => () => (
  <MantineProvider>
    <Component />
  </MantineProvider>
)
