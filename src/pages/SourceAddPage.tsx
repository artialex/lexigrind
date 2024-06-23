import { useNavigate } from 'react-router-dom';

import { useAddSourceMutation } from '@/queries/sources.api.ts';

import { SourceForm } from '../components/SourceForm.tsx';

export function SourceAddPage() {
  const navigate = useNavigate();
  const mutation = useAddSourceMutation();

  const handleSubmit = async (values: Lexi.Source) => {
    mutation.mutate(values);

    navigate('/sources');
  };

  return <SourceForm onSubmit={handleSubmit} titleText="Add New Source" ctaText="Save" />;
}
