import React from 'react'
import ReactDOM from 'react-dom/client'

import './i18n'
import App from './app/index.tsx'
import '../src/app/index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Element root must exist')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
