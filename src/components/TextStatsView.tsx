import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { PersonalStatsView } from '@/components/PersonalStats.tsx';
import { TextStatsPercentages } from '@/components/TextStatsPercentage.tsx';
import { PersonalStatsStore } from '@/stores/PersonalStatsStore.ts';
import { TextStatsStore } from '@/stores/TextStatsStore.ts';
import { Numbers } from '@/utils/numbers.ts';

interface TextStatsViewProps extends PropsWithChildren {
  path?: string;
  stats: Lexi.TextStats;
  hidePercentages?: boolean;
}

export const TextStatsView = observer((props: TextStatsViewProps) => {
  const stats = useMemo(() => TextStatsStore.of(props.stats), [props.stats]);
  const personal = useMemo(() => PersonalStatsStore.of(stats.uniqueWords), [stats.uniqueWords]);

  return (
    <>
      <div
        className={cx('lexi-text-stats-view flex items-center gap-2', {
          // 'bg-emerald-50': true,
          'grad bg-gradient-to-l from-amber-100 to-50% pb-1': !personal.of['unidentified']?.length,
        })}
      >
        {props.children}
        <div className="lexi-cell" title="Paragraphs">
          {Numbers.format(stats.paragraphCount) || '...'}
        </div>
        <div className="lexi-cell" title="Sentences">
          {Numbers.format(stats.sentenceCount) || '...'}
        </div>
        <div className="lexi-cell w-14" title="Total words">
          {Numbers.format(stats.wordCount) || '...'}
        </div>
        {props.path ? (
          <Link className="lexi-cell font-semibold" to={`${props.path}/terms`}>
            {Numbers.format(stats.uniqueWordCount) || '...'}
          </Link>
        ) : (
          <div className="lexi-cell font-semibold">
            {Numbers.format(stats.uniqueWordCount) || '...'}
          </div>
        )}
        {/*<div className="lexi-cell font-semibold" title="Unique words"></div>*/}

        <PersonalStatsView stats={personal} />
      </div>
      {!props.hidePercentages && <TextStatsPercentages stats={personal} />}
    </>
  );
});
