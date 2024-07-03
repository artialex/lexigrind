import { NotesToolbar } from '@/components/NotesToolbar.tsx';
import { NotesView } from '@/components/NotesView.tsx';

export const NotesPage = () => {
  return (
    <div>
      <NotesToolbar />

      <div className="m-4">
        <NotesView />
      </div>
    </div>
  );
};
