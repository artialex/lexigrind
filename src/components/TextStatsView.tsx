import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { Fragment, useMemo } from 'react';

import { Level, levelKeys } from '@/constants/levels.ts';
import { PersonalStats } from '@/stores/PersonalStatsStore.ts';
import { terms } from '@/stores/TermsStore.ts';
import { TextStatsStore } from '@/stores/TextStatsStore.ts';

// import { terms } from '@/models/Terms.model.ts';
// import { TextStatsModel } from '@/models/TextStats.model.ts';

const PersonalStatsView = observer((props: { words: string[] }) => {
  const stats = useMemo(() => new PersonalStats(props.words, terms), [props.words]);

  return (
    <Fragment>
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
    </Fragment>
  );
});

export const TextStatsView = observer((props: { stats: Lexi.TextStats }) => {
  const stats = useMemo(() => new TextStatsStore(props.stats), [props.stats]);

  return (
    <Fragment>
      <div className="flex items-center gap-2 text-right  text-sm">
        {/*
        {stats.chapterCount && (
          <div className="w-12" title="Chapters">
            {stats.chapterCount || '...'}
          </div>
        )}
        */}
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

        <PersonalStatsView words={stats.uniqueWords} />

        {/* <div
        className={cx('flex text-sm', {
          'bg-emerald-50':
            wordsBy[2].size === 0 &&
            wordsBy[3].size === 0 &&
            wordsBy[4].size === 0 &&
            wordsBy[5].size === 0,
          'bg-amber-50': unidentifiedWords.length === 0,
        })}
      >
      </div>
      <div className=" z-30 mt-0.5 h-2 w-full bg-slate-50">
        {levelKeys.map((level) => (
          <Percentage
            key={level}
            total={stats.uniqueWordCount}
            count={wordsBy[level].size}
            level={level}
          />
        ))}
        */}
      </div>
    </Fragment>
  );
});

interface PercentageProps {
  level: Level;
  count: number;
  total: number;
}

function Percentage({ level, count, total }: PercentageProps) {
  const percent = useMemo(() => {
    return (count / total) * 100;
  }, []);

  return (
    <div
      key={level}
      className={cx('inline-block h-full ', {
        // border-b
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
  );
}
