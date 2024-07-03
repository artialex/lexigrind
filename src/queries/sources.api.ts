import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  addSource,
  editSource,
  getFragment,
  getSource,
  getSources,
} from '@/persistence/sources.pouch';

export const LIMIT = 8;

export function useSourcesQuery(page: string) {
  return useQuery({
    queryKey: ['sources', page],
    queryFn: () =>
      getSources({
        limit: LIMIT,
        skip: Number(page) * LIMIT,
      }),
  });
}

export function useSourceQuery(sourceId: string) {
  return useQuery({
    queryKey: ['sources', sourceId],
    queryFn: () => getSource(sourceId),
  });
}

export function useFragmentQuery(sourceId: string, fragmentId: string) {
  return useQuery({
    queryKey: ['source', sourceId, 'fragment', fragmentId],
    queryFn: () => getFragment(sourceId, fragmentId),
  });
}

export function useAddSourceMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (source: Lexi.Source) => addSource(source),
    onSuccess: () => {
      void client.invalidateQueries({ queryKey: ['sources'] });
    },
  });
}

export function useEditSourceMutation(sourceId: string) {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (source: Lexi.Source) => editSource(sourceId, source),
    onSuccess: (_, variables) => {
      void client.setQueryData(['sources', sourceId], variables);
      void client.invalidateQueries({ queryKey: ['sources'] });
    },
  });
}
