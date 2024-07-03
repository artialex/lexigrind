import { useNavigate } from 'react-router-dom';

import { NoteForm } from '@/components/NoteForm.tsx';
import { useAddNoteMutation } from '@/queries/notes.api.ts';

export const NoteAddPage = () => {
  const navigate = useNavigate();
  const mutation = useAddNoteMutation();

  return (
    <NoteForm
      onSubmit={(values) => {
        mutation.mutate(values);
        navigate('/notes');
      }}
    />
  );
};
