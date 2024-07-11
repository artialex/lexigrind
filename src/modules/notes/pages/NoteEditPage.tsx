import { useNavigate, useParams } from 'react-router-dom';

import { LoadingState } from '@/modules/ui/components/LoadingState.tsx';

import { NoteForm } from '../forms/NoteForm.tsx';
import { useAddNoteMutation, useNoteQuery } from '../notes.queries.ts';

export const NoteEditPage = () => {
  const params = useParams<{ noteId: string }>();
  const navigate = useNavigate();

  const { data, isLoading } = useNoteQuery(params.noteId!);
  const mutation = useAddNoteMutation();

  if (!data || isLoading) {
    return <LoadingState />;
  }

  return (
    <NoteForm
      values={data}
      onSubmit={(values) => {
        mutation.mutate(values);
        navigate('/notes');
      }}
      titleText="Edit note"
      ctaText="Update"
    />
  );
};
