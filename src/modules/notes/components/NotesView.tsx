import { Menu } from 'react-feather';
import { Link } from 'react-router-dom';

import { LoadingState } from '@/modules/ui/components/LoadingState.tsx';

import { useNotesQuery } from '../notes.queries';

export const NotesView = () => {
  const { data, isLoading } = useNotesQuery();

  if (!data || isLoading) {
    return <LoadingState />;
  }

  if (data.items?.length === 0) {
    return <div>No sources added</div>;
  }

  return (
    <ul className="grid grid-cols-3 gap-2 overflow-y-auto p-4">
      {data.items.map((note) => (
        <li key={note._id} className="flex items-start justify-between rounded border p-2">
          <div className="overflow-hidden">
            <h2 className="font-caps mb-1 font-bold">{note.title}</h2>
            <pre className="truncate whitespace-pre-wrap font-sans">{note.text}</pre>
          </div>
          <Link className="lexi-button px-1" to={`/notes/${note._id}/edit`}>
            <Menu size="16" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
