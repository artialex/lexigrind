import { uniq } from 'lodash';
import { useParams } from 'react-router-dom';

import { useFragmentQuery, useSourceQuery } from '@/modules/sources/sources.queries.ts';
import { TermsGrid } from '@/modules/terms/components/TermsGrid.tsx';
import { BackLink } from '@/modules/ui/components/BackLink.tsx';
import { LoadingState } from '@/modules/ui/components/LoadingState.tsx';
import { Toolbar } from '@/modules/ui/components/Toolbar.tsx';

export const FragmentTermsPage = () => {
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
        <div className="text-sm">Identified terms inside a source "{source.data.title}"</div>
      </Toolbar>
      {/* FIXME: they should already be unique */}
      <TermsGrid ids={uniq(fragment.data.stats.uniqueWords)} />
    </>
  );
};
