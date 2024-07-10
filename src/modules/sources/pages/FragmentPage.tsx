import { useParams } from 'react-router-dom';

import { FragmentView } from '@/modules/reading/components/FragmentView.tsx';
import { useFragmentQuery } from '@/modules/sources/sources.queries.ts';

export const FragmentPage = () => {
  const params = useParams();

  const { data: fragment, isLoading } = useFragmentQuery(params.sourceId!, params.fragmentId!);

  if (!fragment || isLoading) {
    return <div className="m-4">Loading...</div>;
  }

  return <FragmentView fragment={fragment} />;
};
