import { useNavigate } from 'react-router-dom';

import { NoteForm } from '../forms/NoteForm.tsx';
import { useAddNoteMutation } from '../notes.queries.ts';

export const NoteAddPage = () => {
  const navigate = useNavigate();
  const mutation = useAddNoteMutation();

  return (
    <NoteForm
      onSubmit={(values) => {
        mutation.mutate(values);
        navigate('/notes');
      }}
      titleText="Create note"
      ctaText="Create"
    />
  );
};
