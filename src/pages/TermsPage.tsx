import { observer } from 'mobx-react-lite';

import { TermsGrid } from '@/components/TermsGrid.tsx';
import { TermsToolbar } from '@/components/TermsToolbar.tsx';
import { terms } from '@/stores/TermsStore.ts';

export const TermsPage = observer(() => {
  return (
    <div>
      <TermsToolbar />
      <div className="flex">
        <TermsGrid terms={terms} />
      </div>
    </div>
  );
});
