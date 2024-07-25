import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { PersonalStatsStore } from '@/modules/stats/PersonalStatsStore.ts';
import { TextStatsStore } from '@/modules/stats/TextStatsStore.ts';

interface SourceCardProps {
  source: Lexi.Source;
}

export const SourceCard = ({ source }: SourceCardProps) => {
  const stats = useMemo(() => TextStatsStore.of(source.stats), [source.stats]);
  const personal = useMemo(() => PersonalStatsStore.of(stats.uniqueWords), [stats.uniqueWords]);

  return (
    <div className="lexi-card flex w-full basis-1/4 border border-stone-200 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="flex w-12 flex-col items-end bg-stone-300 p-2 text-xs text-stone-900">
        {/*<Menu size="14" className="mb-auto self-center" />*/}
        <div className="mt-auto ">{source.fragments.length}</div>
        <div>{source.stats.wordCount}</div>
        <div>{source.stats.uniqueWords.length}</div>
        <div>{personal.of['unidentified']?.length}</div>
      </div>
      <div className="min-w-0 flex-grow px-4 py-2">
        <Link
          to={`/sources/${source._id}`}
          className="font-caps mb-2 truncate text-lg font-semibold text-stone-900"
        >
          {source.title}
        </Link>
        <div className="flex justify-between text-sm">
          <span>R. Yarros</span>
          <span className="text-sm font-semibold underline">Fantasy</span>
        </div>
        <hr className="my-2 h-0 border border-stone-200" />
        <ul className="flex w-full gap-1">
          <li className="lexi-word-0 basis-1/6 rounded border border-stone-200 px-1 text-right ">
            {personal.of['0']?.length}
          </li>
          <li className="lexi-word-1 basis-1/6 rounded border border-stone-200 px-1 text-right ">
            {personal.of['1']?.length}
          </li>
          <li className="lexi-word-2 basis-1/6 rounded border border-stone-200 px-1 text-right ">
            {personal.of['2']?.length}
          </li>
          <li className="lexi-word-3 basis-1/6 rounded border border-stone-200 px-1 text-right ">
            {personal.of['3']?.length}
          </li>
          <li className="lexi-word-4 basis-1/6 rounded border border-stone-200 px-1 text-right ">
            {personal.of['4']?.length}
          </li>
          <li className="lexi-word-5 basis-1/6 rounded border border-stone-200 px-1 text-right ">
            {personal.of['5']?.length}
          </li>
        </ul>
      </div>
    </div>
  );
};
