import React from 'react'
import ReactDOM from 'react-dom/client'
import {MantineProvider, createTheme} from '@mantine/core'
import '@mantine/core/styles.css'

import {App} from './app/App.tsx'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Element root must exist')
}

// https://mantine.dev/theming/default-props/
const theme = createTheme({
  fontFamily: 'Helvetica'
})

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
