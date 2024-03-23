import {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Loader} from '@mantine/core'

export const withRouter = (component: () => JSX.Element) => () => (
  <BrowserRouter>
    <Suspense fallback={<Loader color='blue' />}>
      {component()}
    </Suspense>
  </BrowserRouter>
)
