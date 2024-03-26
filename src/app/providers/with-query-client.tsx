import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

export const withQueryClient = (Component: () => JSX.Element) => () => (
  <QueryClientProvider client={queryClient}>
    <Component />
  </QueryClientProvider>
)
