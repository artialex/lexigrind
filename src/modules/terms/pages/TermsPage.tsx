import { TermsGrid } from '@/modules/terms/components/TermsGrid.tsx';
import { TermsToolbar } from '@/modules/terms/components/TermsToolbar.tsx';

export const TermsPage = () => {
  return (
    <>
      <TermsToolbar />
      <TermsGrid />
    </>
  );
};
