import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { BackLink } from '@/components/BackLink.tsx';
import { SourceTermsView } from '@/components/SourceTermsView.tsx';
import { Subheader } from '@/components/Subheader.tsx';
import { useSourceQuery } from '@/queries/sources.api.ts';

export const SourceTermsPage = observer(() => {
  const params = useParams();

  const { data: source, isLoading } = useSourceQuery(params.sourceId!);

  if (!source || isLoading) {
    return <div className="m-4">Loading...</div>;
  }

  return (
    <div>
      <Subheader>
        <BackLink to="/sources" text="Back to all books" />
        <div className="text-sm">Identified terms inside a source "{source.title}"</div>
      </Subheader>
      <div className="flex">
        <SourceTermsView words={source.stats.uniqueWords} />
      </div>
    </div>
  );
});
