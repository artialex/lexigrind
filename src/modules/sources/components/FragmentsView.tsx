import { observer } from 'mobx-react-lite';
import { Menu } from 'react-feather';
import { Link, useParams } from 'react-router-dom';

import { TextStatsView } from '@/modules/stats/components/TextStatsView.tsx';

interface FragmentsViewProps {
  fragments: Lexi.Fragment[];
}

export const FragmentsView = observer<FragmentsViewProps>(({ fragments }) => {
  const params = useParams();

  if (fragments.length === 0) {
    return <div>No fragments</div>;
  }

  return (
    <div className="m-4 pb-20">
      {fragments.map((fragment) => (
        <div key={fragment._id} className="pb-2">
          <div className="my-1 flex items-center gap-2">
            {/*<Star className="basis-[24px]" size="16" />*/}
            <Link
              to={`/sources/${params.sourceId}/fragments/${fragment._id}`}
              className="font-caps basis-full truncate text-blue-500 transition hover:text-blue-400"
            >
              {fragment.title}
            </Link>
            <Link
              className="lexi-button px-1"
              to={`/sources/${params.sourceId}/fragments/${fragment._id}/edit`}
            >
              <Menu size="16" />
            </Link>
          </div>
          <TextStatsView
            stats={fragment.stats}
            path={`/sources/${params.sourceId}/fragments/${fragment._id}`}
          />
        </div>
      ))}
    </div>
  );
});
