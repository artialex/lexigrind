import { Route, Routes } from 'react-router-dom';

import { FragmentTermsLevelPage } from '@/modules/sources/pages/FragmentTermsLevelPage.tsx';
import { SourceTermsLevelPage } from '@/modules/sources/pages/SourceTermsLevelPage.tsx';

import { FragmentEditPage } from './pages/FragmentEditPage.tsx';
import { FragmentPage } from './pages/FragmentPage.tsx';
import { FragmentTermsPage } from './pages/FragmentTermsPage.tsx';
import { SourceAddPage } from './pages/SourceAddPage.tsx';
import { SourceEditPage } from './pages/SourceEditPage.tsx';
import { SourcePage } from './pages/SourcePage.tsx';
import { SourceTermsPage } from './pages/SourceTermsPage.tsx';
import { SourcesPage } from './pages/SourcesPage.tsx';

export const SourcesRoutes = () => (
  <Routes>
    <Route path="/" element={<SourcesPage />} />
    <Route path="/new" element={<SourceAddPage />} />

    {/* Source */}
    <Route path="/:sourceId" element={<SourcePage />} />
    <Route path="/:sourceId/edit" element={<SourceEditPage />} />
    <Route path="/:sourceId/terms/" element={<SourceTermsPage />} />
    <Route path="/:sourceId/terms/:level" element={<SourceTermsLevelPage />} />

    {/* Fragment */}
    <Route path="/:sourceId/fragments/:fragmentId" element={<FragmentPage />} />
    <Route path="/:sourceId/fragments/:fragmentId/edit" element={<FragmentEditPage />} />
    <Route path="/:sourceId/fragments/:fragmentId/terms" element={<FragmentTermsPage />} />
    <Route
      path="/:sourceId/fragments/:fragmentId/terms/:level"
      element={<FragmentTermsLevelPage />}
    />
  </Routes>
);
