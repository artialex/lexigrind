import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { BackLink } from '@/modules/ui/components/BackLink.tsx';
import { LoadingState } from '@/modules/ui/components/LoadingState.tsx';
import { Toolbar } from '@/modules/ui/components/Toolbar.tsx';

import { SourceView } from '../components/SourceView.tsx';
import { useSourceQuery } from '../sources.queries.ts';

export const SourcePage = observer(() => {
  const params = useParams();

  const { data: source, isLoading } = useSourceQuery(params.sourceId!);

  if (!source || isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <Toolbar>
        <BackLink to="/sources" text="Back to all books" />
        <h1 className="">{source.title}</h1>
      </Toolbar>
      <SourceView source={source} />
    </>
  );
});
