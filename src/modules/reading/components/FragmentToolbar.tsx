import { useParams } from 'react-router-dom';

import { TextStatsView } from '@/modules/stats/components/TextStatsView.tsx';
import { BackLink } from '@/modules/ui/components/BackLink.tsx';
import { Toolbar } from '@/modules/ui/components/Toolbar.tsx';

export const FragmentToolbar = ({ fragment }: { fragment: Lexi.Fragment }) => {
  const params = useParams<any>();

  return (
    <Toolbar>
      <BackLink to={`/sources/${params.sourceId}`} text="Back to all chapters" />
      <h1 className="inline truncate whitespace-nowrap text-center">{fragment.title}</h1>
      {/*
      <div className="mr-auto flex gap-3">
        <button className="lexi-button lexi-word-0 px-1" title="Mark as Known [0, W]">
          <Edit size="14" />
        </button>
        <button className="lexi-button lexi-word-1 px-1" title="Mark as Level 1 [1]">
          <Edit size="14" />
        </button>
        <button className="lexi-button lexi-word-2 px-1" title="Mark as Level 2 [2]">
          <Edit size="14" />
        </button>
        <button className="lexi-button lexi-word-3 px-1" title="Mark as Level 3 [3]">
          <Edit size="14" />
        </button>
        <button className="lexi-button lexi-word-4 px-1" title="Mark as Level 4 [4]">
          <Edit size="14" />
        </button>
        <button className="lexi-button lexi-word-5 px-1" title="Mark as Level 5 [5]">
          <Edit size="14" />
        </button>
      </div>
      */}
      <div className="ml-auto">
        <TextStatsView
          stats={fragment.stats}
          hidePercentages
          path={`/sources/${params.sourceId}/fragments/${params.fragmentId}`}
        />
      </div>
      {/*
        <button className="lexi-button lexi-word-0 px-1">
        <Edit3 size="14" />
      </button>
      <button className="lexi-button lexi-word-1 px-1">
        <Edit3 size="14" />
      </button>
      <button className="lexi-button lexi-word-2 px-1">
        <Edit3 size="14" />
      </button>
      <button className="lexi-button lexi-word-3 px-1">
        <Edit3 size="14" />
      </button>
      <button className="lexi-button lexi-word-4 px-1">
        <Edit3 size="14" />
      </button>
      <button className="lexi-button lexi-word-5 px-1">
        <Edit3 size="14" />
      </button>*/}
    </Toolbar>
  );
};
