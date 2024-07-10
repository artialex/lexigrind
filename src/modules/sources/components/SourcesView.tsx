import { Menu } from 'react-feather';
import { Link } from 'react-router-dom';

import { TextStatsView } from '@/modules/stats/components/TextStatsView.tsx';

import { useSourcesQuery } from '../sources.queries.ts';

export const SourcesView = () => {
  const { data, isLoading } = useSourcesQuery('0');

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  if (data?.items?.length === 0) {
    return <div>No sources added</div>;
  }

  return (
    <ul>
      {data.items.map((source) => (
        <li key={source._id} className="pb-2" data-test="source">
          <div className="my-1 flex items-center gap-2">
            {/*<Star className="basis-[24px]" size="16" />*/}
            <Link
              to={`/sources/${source._id}`}
              className="basis-full truncate text-blue-500 transition hover:text-blue-400"
            >
              {source.title}
            </Link>
            <div className="basis-[400px] truncate">{source.author}</div>
            <Link className="lexi-button px-1" to={`/sources/${source._id}/edit`}>
              <Menu size="16" />
            </Link>
          </div>
          <TextStatsView stats={source.stats} path={`/sources/${source._id}`}>
            <div className="lexi-cell" title="Chapters">
              {source.fragments.length || '...'}
            </div>
          </TextStatsView>
        </li>
      ))}
    </ul>
  );
};
