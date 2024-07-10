import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { meaningfulLevelKeys } from '@/modules/levels/constants.ts';
import { Numbers } from '@/modules/platform.browser/numbers.ts';
import { PersonalStatsStore } from '@/modules/stats/PersonalStatsStore.ts';
import { TextStatsStore } from '@/modules/stats/TextStatsStore.ts';
import { PersonalStatsView } from '@/modules/stats/components/PersonalStats.tsx';
import { TextStatsPercentages } from '@/modules/stats/components/TextStatsPercentage.tsx';

interface TextStatsViewProps extends PropsWithChildren {
  path: string;
  stats: Lexi.TextStats;
  hidePercentages?: boolean;
}

export const TextStatsView = observer((props: TextStatsViewProps) => {
  const stats = useMemo(() => TextStatsStore.of(props.stats), [props.stats]);
  const personal = useMemo(() => PersonalStatsStore.of(stats.uniqueWords), [stats.uniqueWords]);

  const fragmentLevel = useMemo(() => {
    if (personal.of['unidentified']?.length) {
      return 'unidentified';
    }

    let level = '1';

    for (const l of meaningfulLevelKeys) {
      if (personal.of[l]?.length && level < l) {
        level = l;
      }
    }

    return level;
  }, [personal]);

  return (
    <>
      <div
        className={cx('lexi-text-stats-view flex items-center gap-2', {
          'grad bg-gradient-to-l from-fuchsia-100 to-50% pb-1': fragmentLevel === '5',
          'grad bg-gradient-to-l from-rose-100 to-50% pb-1': fragmentLevel === '4',
          'grad bg-gradient-to-l from-amber-100 to-50% pb-1': fragmentLevel === '3',
          'grad bg-gradient-to-l from-sky-100 to-50% pb-1': fragmentLevel === '2',
          'grad bg-gradient-to-l from-emerald-100 to-50% pb-1': fragmentLevel === '1',
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
        <PersonalStatsView stats={personal} path={props.path} />
      </div>
      {!props.hidePercentages && <TextStatsPercentages stats={personal} />}
    </>
  );
});
