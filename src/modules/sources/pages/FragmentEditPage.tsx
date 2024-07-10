import { useNavigate, useParams } from 'react-router-dom';

import { FragmentForm } from '@/modules/sources/forms/FragmentForm.tsx';
import {
  useEditSourceMutation,
  useFragmentQuery,
  useSourceQuery,
} from '@/modules/sources/sources.queries.ts';

export function FragmentEditPage() {
  const params = useParams<any>();

  const source = useSourceQuery(params.sourceId!);
  const fragment = useFragmentQuery(params.sourceId!, params.fragmentId!);

  const mutation = useEditSourceMutation();
  const navigate = useNavigate();

  const handleSubmit = async (source: Lexi.Source) => {
    mutation.mutate(source);
    navigate(`/sources/${source._id}`);
  };

  if (!source.data || !fragment.data || source.isLoading || fragment.isLoading) {
    return <div>Loading...</div>;
  }

  return <FragmentForm onSubmit={handleSubmit} source={source.data} fragment={fragment.data} />;
}
