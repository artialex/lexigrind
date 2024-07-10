import { Menu } from 'react-feather';
import { Link } from 'react-router-dom';

import { useNotesQuery } from '../notes.queries';

export const NotesView = () => {
  const { data, isLoading } = useNotesQuery();

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  if (data.items?.length === 0) {
    return <div>No sources added</div>;
  }

  return (
    <ul className="grid grid-cols-3 gap-2">
      {data.items.map((note) => (
        <li key={note._id} className="flex items-start justify-between rounded border p-2">
          <div className="overflow-hidden">
            <h2 className="font-bold">{note.title}</h2>
            <p className="truncate">{note.text}</p>
          </div>
          <Link className="lexi-button px-1" to={`/notes/${note._id}/edit`}>
            <Menu size="16" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
