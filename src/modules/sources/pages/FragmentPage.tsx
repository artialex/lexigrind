import { useParams } from 'react-router-dom';

import { FragmentView } from '@/modules/reading/components/FragmentView.tsx';
import { useFragmentQuery } from '@/modules/sources/sources.queries.ts';
import { LoadingState } from '@/modules/ui/components/LoadingState.tsx';

export const FragmentPage = () => {
  const params = useParams();

  const { data: fragment, isLoading } = useFragmentQuery(params.sourceId!, params.fragmentId!);

  if (false || !fragment || isLoading) {
    return <LoadingState />;
  }

  return <FragmentView fragment={fragment} />;
};
