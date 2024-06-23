import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';

import { useEditSourceMutation, useSourceQuery } from '@/queries/sources.api.ts';

import { SourceForm } from '../components/SourceForm.tsx';

export const SourceEditPage = observer(() => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: source, isLoading } = useSourceQuery(params.sourceId!);

  const mutation = useEditSourceMutation(params.sourceId!);

  const handleSubmit = async (source: Lexi.Source) => {
    mutation.mutate(source);
    navigate('/sources');
  };

  if (!source || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SourceForm source={source} onSubmit={handleSubmit} titleText="Edit Source" ctaText="Update" />
  );
});
