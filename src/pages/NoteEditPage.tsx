import { useNavigate, useParams } from 'react-router-dom';

import { NoteForm } from '@/components/NoteForm.tsx';
import { useAddNoteMutation, useNoteQuery } from '@/queries/notes.api.ts';

export const NoteEditPage = () => {
  const params = useParams<{ noteId: string }>();
  const navigate = useNavigate();

  const { data, isLoading } = useNoteQuery(params.noteId!);
  const mutation = useAddNoteMutation();

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <NoteForm
      values={data}
      onSubmit={(values) => {
        mutation.mutate(values);
        navigate('/notes');
      }}
    />
  );
};
