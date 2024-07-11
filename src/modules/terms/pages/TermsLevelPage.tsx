import { TermList } from '@/modules/terms/components/TermList.tsx';
import { TermsToolbar } from '@/modules/terms/components/TermsToolbar.tsx';
import { useTermsQuery } from '@/modules/terms/terms.queries.ts';
import { LoadingState } from '@/modules/ui/components/LoadingState.tsx';

export const TermsLevelPage = () => {
  const { data, isLoading } = useTermsQuery();

  if (!data || isLoading) {
    return <LoadingState />;
  }

  return (
    <div>
      <TermsToolbar />
      <TermList />
    </div>
  );
};
