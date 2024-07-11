import { uniq } from 'lodash';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { TermList } from '@/modules/terms/components/TermList.tsx';
import { BackLink } from '@/modules/ui/components/BackLink.tsx';
import { LoadingState } from '@/modules/ui/components/LoadingState.tsx';
import { Toolbar } from '@/modules/ui/components/Toolbar.tsx';

import { useFragmentQuery, useSourceQuery } from '../sources.queries.ts';

export const FragmentTermsLevelPage = observer(() => {
  const params = useParams();
  const source = useSourceQuery(params.sourceId!);
  const fragment = useFragmentQuery(params.sourceId!, params.fragmentId!);

  if (!source.data || !fragment.data || source.isLoading || fragment.isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <Toolbar>
        <BackLink to={`/sources/${source.data._id}`} text="Back to all fragments" />
        <div className="text-sm">
          Terms of level {params.level} inside a fragment {fragment.data.title} of source "
          {source.data.title}"
        </div>
      </Toolbar>
      <TermList ids={uniq(fragment.data.stats.uniqueWords)} />
    </>
  );
});
