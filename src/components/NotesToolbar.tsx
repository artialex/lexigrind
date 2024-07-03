import { Plus } from 'react-feather';
import { Link } from 'react-router-dom';

import { Subheader } from '@/components/Subheader.tsx';

export const NotesToolbar = () => {
  return (
    <Subheader>
      <Link className="lexi-button" to="/notes/new">
        <Plus size="14" />
        Add new note
      </Link>
    </Subheader>
  );
};
