import React from 'react'
import ReactDOM from 'react-dom/client'
import {MantineProvider} from '@mantine/core'
import '@mantine/core/styles.css'

import {App} from './app/App.tsx'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Element root must exist')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
