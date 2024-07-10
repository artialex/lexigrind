import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { sourcesRepo } from './sources.repo.ts';

export const LIMIT = 8;

export function useSourcesQuery(page: string) {
  return useQuery({
    queryKey: ['sources', page],
    queryFn: () => sourcesRepo.retrieveMany(),
    // getSources({
    //   limit: LIMIT,
    //   skip: Number(page) * LIMIT,
    // }),
  });
}

export function useSourceQuery(sourceId: string) {
  return useQuery({
    queryKey: ['sources', sourceId],
    queryFn: () => sourcesRepo.retrieve(sourceId),
  });
}

export function useFragmentQuery(sourceId: string, fragmentId: string) {
  return useQuery({
    queryKey: ['source', sourceId, 'fragment', fragmentId],
    queryFn: () => sourcesRepo.retrieveFragment(sourceId, fragmentId),
  });
}

export function useAddSourceMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (source: Lexi.Source) => sourcesRepo.upsert(source),
    onSuccess: () => {
      void client.invalidateQueries({ queryKey: ['sources'] });
    },
  });
}

export function useEditSourceMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (source: Lexi.Source) => sourcesRepo.upsert(source),
    onSuccess: () => {
      void client.invalidateQueries({ queryKey: ['sources'] });
    },
  });
}
