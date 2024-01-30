import {Layout} from '../layout/Layout'
import {Router} from '../router/Router'

export const App = (): JSX.Element => {
  return (
      <Layout>
        <Router />
      </Layout>
  )
}
