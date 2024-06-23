import { Menu, Star } from 'react-feather';
import { Link } from 'react-router-dom';

import { TextStatsView } from '@/components/TextStatsView.tsx';
import { useSourcesQuery } from '@/queries/sources.api.ts';

export const SourcesView = () => {
  const { data, isLoading } = useSourcesQuery('0');

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  if (data.sources.length === 0) {
    return <div>No sources added</div>;
  }

  return (
    <div>
      {data.sources.map((source) => (
        <div key={source.id} className="border-b border-slate-200 pb-2">
          <div className="my-1 flex items-center gap-2">
            <Star className="basis-[24px]" size="16" />
            <Link
              to={`/sources/${source.id}`}
              className="basis-full truncate text-blue-500 transition hover:text-blue-400"
            >
              {source.title}
            </Link>
            <div className="basis-[400px] truncate">{source.author}</div>
            <Link className="lexi-button px-1" to={`/sources/${source.id}/edit`}>
              <Menu size="16" />
            </Link>
          </div>
          <TextStatsView stats={source.stats} />
        </div>
      ))}
    </div>
  );
};
