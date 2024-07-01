import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { TermView } from '@/components/TermView';

export const TermPage = observer(() => {
  const params = useParams<Lexi.RouterParams>();

  if (!params.termId) {
    return <div>Loading</div>;
  }

  return (
    <div className="m-4 flex gap-4">
      <TermView term={params.termId} />
    </div>
  );
});
