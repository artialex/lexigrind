import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren, useMemo } from 'react';

import { levelKeys } from '@/constants/levels.ts';
import { PersonalStatsStore } from '@/stores/PersonalStatsStore.ts';
import { TextStatsStore } from '@/stores/TextStatsStore.ts';

const Percentages = ({ stats }: { stats: PersonalStatsStore }) => {
  return (
    <div className="z-30 mt-1 h-2 w-full  bg-slate-50">
      {stats.percents.map(({ level, percent }) => (
        <div
          key={level}
          className={cx('inline-block h-full border-t', {
            'border-dashed border-red-500 bg-white': level === 'ignored',
            'border-slate-400 bg-slate-200': level === '0',
            'border-emerald-500 bg-emerald-200': level === '1',
            'border-sky-500 bg-sky-200': level === '2',
            'border-amber-500 bg-amber-200': level === '3',
            'border-rose-500 bg-rose-200': level === '4',
            'border-fuchsia-500 bg-fuchsia-200': level === '5',
          })}
          style={{
            width: `${percent}%`,
          }}
        >
          &nbsp;
        </div>
      ))}
    </div>
  );
};

const PersonalStatsView = observer(({ stats }: { stats: PersonalStatsStore }) => {
  return (
    <>
      {levelKeys.map((level) => (
        <div
          key={level}
          className={cx('w-12 cursor-default rounded px-1', `lexi-word-${level}`, {
            'lexi-button-ignored': level === 'ignored',
          })}
          title={stats.of[level]?.join('\n') ?? 'No words'}
        >
          {stats.of[level]?.length ?? 0}
        </div>
      ))}
    </>
  );
});

interface TextStatsViewProps extends PropsWithChildren {
  stats: Lexi.TextStats;
  hidePercentages?: boolean;
}

export const TextStatsView = observer((props: TextStatsViewProps) => {
  const stats = useMemo(() => TextStatsStore.of(props.stats), [props.stats]);
  const personal = useMemo(() => PersonalStatsStore.of(stats.uniqueWords), [stats.uniqueWords]);

  return (
    <>
      <div
        className={cx('flex items-center gap-2 text-right text-sm', {
          // 'bg-emerald-50': true,
          'bg-amber-50': !personal.of['unidentified']?.length,
        })}
      >
        {props.children}
        <div className="w-12" title="Paragraphs">
          {stats.paragraphCount || '...'}
        </div>
        <div className="w-12" title="Sentences">
          {stats.sentenceCount || '...'}
        </div>
        <div className="w-12" title="Total words">
          {stats.wordCount || '...'}
        </div>
        <div className="w-12 font-semibold" title="Unique words">
          {stats.uniqueWordCount || '...'}
        </div>

        <PersonalStatsView stats={personal} />
      </div>
      {!props.hidePercentages && <Percentages stats={personal} />}
    </>
  );
});
