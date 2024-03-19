import '@mantine/core/styles.css'
import {MantineProvider} from '@mantine/core'

export const withMantine = (component: () => React.ReactNode) => () => (
  <MantineProvider>
    {component()}
  </MantineProvider>
)
