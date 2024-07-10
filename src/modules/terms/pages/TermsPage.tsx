// import { observer } from 'mobx-react-lite';
import { TermsGrid } from '@/modules/terms/components/TermsGrid.tsx';
import { TermsToolbar } from '@/modules/terms/components/TermsToolbar.tsx';

// import { terms } from '@/modules/terms/stores/TermsStore.ts';

export const TermsPage = () => {
  return (
    <div>
      <TermsToolbar />
      <div className="flex">
        <TermsGrid />
      </div>
    </div>
  );
};
