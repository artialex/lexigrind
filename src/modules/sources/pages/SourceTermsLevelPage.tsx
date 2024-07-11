import { uniq } from 'lodash';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { TermList } from '@/modules/terms/components/TermList.tsx';
import { BackLink } from '@/modules/ui/components/BackLink.tsx';
import { LoadingState } from '@/modules/ui/components/LoadingState.tsx';
import { Toolbar } from '@/modules/ui/components/Toolbar.tsx';

import { useSourceQuery } from '../sources.queries.ts';

export const SourceTermsLevelPage = observer(() => {
  const params = useParams();

  const { data, isLoading } = useSourceQuery(params.sourceId!);

  if (!data || isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <Toolbar>
        <BackLink to="/sources" text="Back to all books" />
        <div className="text-sm">
          Terms of level {params.level} inside a source "{data.title}"
        </div>
      </Toolbar>
      <TermList ids={uniq(data.stats.uniqueWords)} />
    </>
  );
});
