import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  // createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { FragmentEditPage } from '@/pages/FragmentEditPage.tsx';
import { FragmentPage } from '@/pages/FragmentPage.tsx';
import { HelpPage } from '@/pages/HelpPage.tsx';
import { SourceAddPage } from '@/pages/SourceAddPage.tsx';
import { SourceEditPage } from '@/pages/SourceEditPage.tsx';
import { SourcePage } from '@/pages/SourcePage.tsx';
import { SourcesPage } from '@/pages/SourcesPage.tsx';
import { TermPage } from '@/pages/TermPage.tsx';
import { TermsPage } from '@/pages/TermsPage.tsx';

import { PageLayout } from './PageLayout.tsx';

const elements = createRoutesFromElements(
  <Route element={<PageLayout />}>
    <Route path="/" element={<HelpPage />} />

    <Route path="/sources" element={<SourcesPage />} />
    <Route path="/sources/new" element={<SourceAddPage />} />

    <Route path="/sources/:sourceId" element={<SourcePage />} />
    <Route path="/sources/:sourceId/edit" element={<SourceEditPage />} />
    {/*<Route path="/sources/:sourceId/terms" element={<SourcePage />} />*/}

    <Route path="/sources/:sourceId/fragments/:fragmentId" element={<FragmentPage />} />
    <Route path="/sources/:sourceId/fragments/:fragmentId/edit" element={<FragmentEditPage />} />
    {/*<Route path="/sources/:sourceId/fragments/:fragmentId/terms" element={<FragmentEditPage />} />*/}

    <Route path="/terms" element={<TermsPage />} />
    <Route path="/terms/:termId" element={<TermPage />} />
  </Route>,
);

const client = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={createHashRouter(elements)} />
    </QueryClientProvider>
  );
}
