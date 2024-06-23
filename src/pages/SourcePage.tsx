import { observer } from 'mobx-react-lite';
import { ArrowLeft } from 'react-feather';
import { Link, useParams } from 'react-router-dom';

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
        <Link className="flex items-center gap-2 text-sm" to="/sources">
          <ArrowLeft size="16" />
          Back to all books
        </Link>
        <h1 className="">{source.title}</h1>
      </Subheader>
      <div className="m-4">
        <SourceView source={source} />
      </div>
    </div>
  );
});
