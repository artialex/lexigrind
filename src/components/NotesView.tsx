import { Menu } from 'react-feather';
import { Link } from 'react-router-dom';

import { useNotesQuery } from '@/queries/notes.api.ts';

export const NotesView = () => {
  const { data, isLoading } = useNotesQuery();

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  if (data.items?.length === 0) {
    return <div>No sources added</div>;
  }

  return (
    <ul>
      {data.items.map((note) => (
        <li key={note._id} className=" my-1 flex items-center justify-between gap-2 pb-2">
          <h2>{note.title}</h2>
          <p>{note.text}</p>
          <Link className="lexi-button px-1" to={`/notes/${note._id}/edit`}>
            <Menu size="16" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
