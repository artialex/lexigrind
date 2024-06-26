import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { BackLink } from '@/components/BackLink.tsx';
import { SourceView } from '@/components/SourceView.tsx';
import { Subheader } from '@/components/Subheader.tsx';
import { useSourceQuery } from '@/queries/sources.api.ts';

export const SourcePage = observer(() => {
  const params = useParams();

  const { data: source, isLoading } = useSourceQuery(params.sourceId!);

  if (!source || isLoading) {
    return <div className="m-4">Loading...</div>;
  }

  return (
    <div>
      <Subheader>
        <BackLink to="/sources" text="Back to all books" />
        <h1 className="">{source.title}</h1>
      </Subheader>
      <div className="m-4">
        <SourceView source={source} />
      </div>
    </div>
  );
});
