import { Route, Routes } from 'react-router-dom';

import { TermsLevelPage } from '@/modules/terms/pages/TermsLevelPage.tsx';

import { TermPage } from './pages/TermPage.tsx';
import { TermsIgnoredPage } from './pages/TermsIgnoredPage.tsx';
import { TermsPage } from './pages/TermsPage.tsx';

export const TermsRoutes = () => (
  <Routes>
    <Route path="/" element={<TermsPage />} />
    <Route path="/ignored" element={<TermsIgnoredPage />} />
    <Route path="/:level" element={<TermsLevelPage />} />
    <Route path="/term/:termId" element={<TermPage />} />
  </Routes>
);
