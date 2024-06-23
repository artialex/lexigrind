import { ArrowLeft, Edit } from 'react-feather';
import { Link, useParams } from 'react-router-dom';

import { Subheader } from '@/components/Subheader.tsx';
import { TextStatsView } from '@/components/TextStatsView.tsx';

export const FragmentToolbar = ({ fragment }: { fragment: Lexi.Fragment }) => {
  const params = useParams<Lexi.RouterParams>();
  return (
    <Subheader>
      <Link
        to={`/sources/${params.sourceId}`}
        className="flex items-center gap-2 whitespace-nowrap text-sm"
      >
        <ArrowLeft size="16" />
        Back to all chapters
      </Link>
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
        <TextStatsView stats={fragment.stats} />
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
    </Subheader>
  );
};
