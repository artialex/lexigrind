import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { TermView } from '@/modules/terms/components/TermView.tsx';

export const TermPage = observer(() => {
  const params = useParams<Lexi.TermsRouterParams>();

  if (!params.termId) {
    return <div>Loading</div>;
  }

  return (
    <div className="m-4 flex gap-4">
      <TermView term={params.termId} />
    </div>
  );
});
