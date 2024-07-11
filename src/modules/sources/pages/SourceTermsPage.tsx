import { uniq } from 'lodash';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { TermsGrid } from '@/modules/terms/components/TermsGrid.tsx';
import { BackLink } from '@/modules/ui/components/BackLink.tsx';
import { LoadingState } from '@/modules/ui/components/LoadingState.tsx';
import { Toolbar } from '@/modules/ui/components/Toolbar.tsx';

import { useSourceQuery } from '../sources.queries.ts';

export const SourceTermsPage = observer(() => {
  const params = useParams();

  const { data, isLoading } = useSourceQuery(params.sourceId!);

  if (!data || isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <Toolbar>
        <BackLink to="/sources" text="Back to all books" />
        <div className="text-sm">Identified terms inside a source "{data.title}"</div>
      </Toolbar>
      {/* FIXME: they should already be unique */}
      <TermsGrid ids={uniq(data.stats.uniqueWords)} />
    </>
  );
});
