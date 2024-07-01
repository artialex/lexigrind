import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createHashRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { Router } from '@/Router.tsx';

const elements = createRoutesFromElements(Router);

const client = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={createHashRouter(elements)} />
    </QueryClientProvider>
  );
}
