import '@mantine/core/styles.css'
import {MantineProvider} from '@mantine/core'

export const withMantine = (component: () => JSX.Element) => () => (
  <MantineProvider>
    {component()}
  </MantineProvider>
)
