import { useQuery } from '@tanstack/react-query';

import { termsRepo } from '@/modules/terms/terms.repo.ts';

export function useTermsQuery(ids?: string[]) {
  return useQuery({
    queryKey: ['terms'],
    queryFn: () => termsRepo.retrieveMany(ids),
  });
}
