import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { TermView } from '@/modules/terms/components/TermView.tsx';
import { LoadingState } from '@/modules/ui/components/LoadingState.tsx';

export const TermPage = observer(() => {
  const params = useParams<Lexi.TermsRouterParams>();

  if (!params.termId) {
    return <LoadingState />;
  }

  return <TermView term={params.termId} />;
});
