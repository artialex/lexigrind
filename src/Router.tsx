import { Route } from 'react-router-dom';

import { PageLayout } from '@/layouts/PageLayout.tsx';
import { FragmentEditPage } from '@/pages/FragmentEditPage.tsx';
import { FragmentPage } from '@/pages/FragmentPage.tsx';
import { FragmentTermsPage } from '@/pages/FragmentTermsPage.tsx';
import { HelpPage } from '@/pages/HelpPage.tsx';
import { SourceAddPage } from '@/pages/SourceAddPage.tsx';
import { SourceEditPage } from '@/pages/SourceEditPage.tsx';
import { SourcePage } from '@/pages/SourcePage.tsx';
import { SourceTermsPage } from '@/pages/SourceTermsPage.tsx';
import { SourcesPage } from '@/pages/SourcesPage.tsx';
import { TermPage } from '@/pages/TermPage.tsx';
import { TermsIgnoredPage } from '@/pages/TermsIgnoredPage.tsx';
import { TermsPage } from '@/pages/TermsPage.tsx';

export const Router = (
  <Route element={<PageLayout />}>
    <Route path="/" element={<HelpPage />} />

    <Route path="/sources" element={<SourcesPage />} />
    <Route path="/sources/new" element={<SourceAddPage />} />

    {/* Source */}
    <Route path="/sources/:sourceId" element={<SourcePage />} />
    <Route path="/sources/:sourceId/edit" element={<SourceEditPage />} />
    <Route path="/sources/:sourceId/terms" element={<SourceTermsPage />} />
    <Route path="/sources/:sourceId/terms/:level" element={<SourceTermsPage />} />

    {/* Fragment */}
    <Route path="/sources/:sourceId/fragments/:fragmentId" element={<FragmentPage />} />
    <Route path="/sources/:sourceId/fragments/:fragmentId/edit" element={<FragmentEditPage />} />
    <Route path="/sources/:sourceId/fragments/:fragmentId/terms" element={<FragmentTermsPage />} />
    <Route
      path="/sources/:sourceId/fragments/:fragmentId/terms/:level"
      element={<FragmentTermsPage />}
    />

    <Route path="/terms" element={<TermsPage />} />
    <Route path="/terms/ignored" element={<TermsIgnoredPage />} />
    <Route path="/terms/term/:termId" element={<TermPage />} />
  </Route>
);

/*
# Routes

| Description            | route                                            |
| ---------------------- | ------------------------------------------------ |
| Main page              | `/`                                              |
| All books page         | `/books`                                         |
| Create new book        | `/books/new/`                                    |
| Book page              | `/books/:bookId/`                                |
| Edit book              | `/books/:bookId/edit/`                           |
| Edit book              | `/books/:bookId/terms/`                          |
| Edit book              | `/books/:bookId/terms/:level`                    |
| Chapter page           | `/books/:bookId/chapter/:chapterId/`             |
| Edit chapter           | `/books/:bookId/chapter/:chapterId/edit`         |
| Chapter terms          | `/books/:bookId/chapter/:chapterId/terms`        |
| Chapter terms by level | `/books/:bookId/chapter/:chapterId/terms/:level` |
| All terms              | `/terms`                                         |
| Term page              | `/terms/:termId`                                 |

 */
