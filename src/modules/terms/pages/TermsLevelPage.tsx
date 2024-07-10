import { TermList } from '@/modules/terms/components/TermList.tsx';
import { TermsToolbar } from '@/modules/terms/components/TermsToolbar.tsx';
import { useTermsQuery } from '@/modules/terms/terms.queries.ts';

export const TermsLevelPage = () => {
  const { data, isLoading } = useTermsQuery();

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TermsToolbar />
      <TermList />
    </div>
  );
};
