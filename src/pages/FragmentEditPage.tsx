import { useNavigate, useParams } from 'react-router-dom';

import { FragmentForm } from '@/components/FragmentForm.tsx';
import { useEditSourceMutation, useFragmentQuery, useSourceQuery } from '@/queries/sources.api.ts';

export function FragmentEditPage() {
  const params = useParams<Lexi.RouterParams>();

  const source = useSourceQuery(params.sourceId!);
  const fragment = useFragmentQuery(params.sourceId!, params.fragmentId!);

  const mutation = useEditSourceMutation(params.sourceId!);
  const navigate = useNavigate();

  const handleSubmit = async (source: Lexi.Source) => {
    mutation.mutate(source);
    navigate(`/sources/${source.id}`);
  };

  if (!source.data || !fragment.data || source.isLoading || fragment.isLoading) {
    return <div>Loading...</div>;
  }

  return <FragmentForm onSubmit={handleSubmit} source={source.data} fragment={fragment.data} />;
}
