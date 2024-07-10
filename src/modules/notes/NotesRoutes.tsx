import { Route, Routes } from 'react-router-dom';

import { NoteAddPage } from './pages/NoteAddPage.tsx';
import { NoteEditPage } from './pages/NoteEditPage';
import { NotePage } from './pages/NotePage.tsx';
import { NotesPage } from './pages/NotesPage.tsx';

export const NotesRoutes = () => (
  <Routes>
    <Route path="/" element={<NotesPage />} />
    <Route path="/new" element={<NoteAddPage />} />
    <Route path="/:noteId" element={<NotePage />} />
    <Route path="/:noteId/edit" element={<NoteEditPage />} />
  </Routes>
);
