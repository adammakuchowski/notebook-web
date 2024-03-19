import {MantineProvider, createTheme} from '@mantine/core'

const theme = createTheme({
  /** Your theme override here */
})

export const withMantine = (component: () => React.ReactNode) => () => (
  <MantineProvider theme={theme}>
      {component()}
  </MantineProvider>
)
