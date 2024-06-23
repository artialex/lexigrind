import { observer } from 'mobx-react-lite';
import { Menu, Star } from 'react-feather';
import { Link, useParams } from 'react-router-dom';

import { TextStatsView } from '@/components/TextStatsView.tsx';

interface FragmentsViewProps {
  fragments: Lexi.Fragment[];
}

export const FragmentsView = observer<FragmentsViewProps>(({ fragments }) => {
  const params = useParams();

  if (fragments.length === 0) {
    return <div>No fragments</div>;
  }

  return (
    <div>
      {fragments.map((fragment) => (
        <div key={fragment.id} className="border-b border-slate-200 pb-2">
          <div className="my-1 flex items-center gap-2">
            <Star className="basis-[24px]" size="16" />
            <Link
              to={`/sources/${params.sourceId}/fragments/${fragment.id}`}
              className="basis-full truncate text-blue-500 transition hover:text-blue-400"
            >
              {fragment.title}
            </Link>
            <Link
              className="lexi-button px-1"
              to={`/sources/${params.sourceId}/fragments/${fragment.id}/edit`}
            >
              <Menu size="16" />
            </Link>
          </div>
          <TextStatsView stats={fragment.stats} />
        </div>
      ))}
    </div>
  );
});
