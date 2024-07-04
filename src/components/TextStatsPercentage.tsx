import cx from 'clsx';

import { PersonalStatsStore } from '@/stores/PersonalStatsStore.ts';

export const TextStatsPercentages = ({ stats }: { stats: PersonalStatsStore }) => {
  const className = (level: Lexi.TermLevel) =>
    cx('inline-block h-full border-t', {
      'border-dashed border-red-500 bg-white': level === 'ignored',
      'border-slate-400 bg-slate-200': level === '0',
      'border-emerald-500 bg-emerald-200': level === '1',
      'border-sky-500 bg-sky-200': level === '2',
      'border-amber-500 bg-amber-200': level === '3',
      'border-rose-500 bg-rose-200': level === '4',
      'border-fuchsia-500 bg-fuchsia-200': level === '5',
    });

  const title = stats.percents
    .filter(({ level }) => !isNaN(Number(level)))
    .map(({ percent }) => `${percent.toFixed(1)}%`)
    .join(', ');

  return (
    <div className="z-30 mt-1 h-2 w-full  bg-slate-50" title={title}>
      {stats.percents.map(({ level, percent }) => (
        <div key={level} className={className(level)} style={{ width: `${percent}%` }}>
          &nbsp;
        </div>
      ))}
    </div>
  );
};
