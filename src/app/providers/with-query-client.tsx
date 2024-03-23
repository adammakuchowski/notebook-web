import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

export const withQueryClient = (component: () => JSX.Element) => () => (
  <QueryClientProvider client={queryClient}>
    {component()}
  </QueryClientProvider>
)
