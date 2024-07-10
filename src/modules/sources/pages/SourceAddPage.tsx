import { useNavigate } from 'react-router-dom';

import { SourceForm } from '../forms/SourceForm.tsx';
import { useAddSourceMutation } from '../sources.queries.ts';

export function SourceAddPage() {
  const navigate = useNavigate();
  const mutation = useAddSourceMutation();

  const handleSubmit = async (values: Lexi.Source) => {
    mutation.mutate(values);

    navigate('/sources');
  };

  return <SourceForm onSubmit={handleSubmit} titleText="Add New Source" ctaText="Save" />;
}
