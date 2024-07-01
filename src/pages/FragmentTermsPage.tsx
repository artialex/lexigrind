import { useParams } from 'react-router-dom';

import { BackLink } from '@/components/BackLink.tsx';
import { FragmentTermsView } from '@/components/FragmentTermsView.tsx';
import { Subheader } from '@/components/Subheader.tsx';
import { useFragmentQuery, useSourceQuery } from '@/queries/sources.api.ts';

export const FragmentTermsPage = () => {
  const params = useParams();
  const source = useSourceQuery(params.sourceId!);
  const fragment = useFragmentQuery(params.sourceId!, params.fragmentId!);

  if (!source.data || !fragment.data || source.isLoading || fragment.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Subheader>
        <BackLink to="/sources" text="Back to all books" />
        <div className="text-sm">Identified terms inside a source "{source.data.title}"</div>
      </Subheader>
      <div className="flex">
        <FragmentTermsView words={fragment.data.stats.uniqueWords} />
      </div>
    </div>
  );
};
