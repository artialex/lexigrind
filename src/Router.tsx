import { Route } from 'react-router-dom';

import { PageLayout } from '@/PageLayout.tsx';
import { HelpPage } from '@/modules/help/pages/HelpPage.tsx';
import { NotesRoutes } from '@/modules/notes/NotesRoutes.tsx';
import { ReviewRoutes } from '@/modules/review/ReviewRoutes.tsx';
import { SourcesRoutes } from '@/modules/sources/SourcesRoutes.tsx';
import { TermsRoutes } from '@/modules/terms/TermsRoutes.tsx';

export const Router = (
  <Route element={<PageLayout />}>
    <Route path="/" element={<HelpPage />} />
    <Route path="/sources/*" element={<SourcesRoutes />} />
    <Route path="/terms/*" element={<TermsRoutes />} />
    <Route path="/notes/*" element={<NotesRoutes />} />
    <Route path="/review/*" element={<ReviewRoutes />} />
  </Route>
);
