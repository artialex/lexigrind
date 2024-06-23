import { useParams } from 'react-router-dom';

import { FragmentView } from '@/components/FragmentView.tsx';
import { useFragmentQuery } from '@/queries/sources.api.ts';

export const FragmentPage = () => {
  const params = useParams();

  const { data: fragment, isLoading } = useFragmentQuery(params.sourceId!, params.fragmentId!);

  if (!fragment || isLoading) {
    return <div className="m-4">Loading...</div>;
  }

  return <FragmentView fragment={fragment} />;
};
