import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { notesRepo } from './notes.repo';

export function useNoteQuery(id: string) {
  return useQuery({
    queryKey: ['notes', id],
    queryFn: () => notesRepo.retrieve(id),
  });
}

export function useNotesQuery() {
  return useQuery({
    queryKey: ['notes'],
    queryFn: () => notesRepo.retrieveMany(),
  });
}

export function useAddNoteMutation() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (note: Lexi.SharedNote) => notesRepo.upsert(note),
    onSuccess: () => {
      void client.invalidateQueries({ queryKey: ['notes'] });
    },
  });
}
