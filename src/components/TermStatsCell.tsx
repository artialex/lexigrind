import cx from 'clsx';

import { Level } from '@/constants/levels.ts';
import { TermStore } from '@/stores/TermStore.ts';
import { Numbers } from '@/utils/numbers.ts';

interface TermStatsCellProps {
  level: Level;
  terms: (TermStore | string)[];
  hideUnidentified?: boolean;
}

export const TermStatsCell = ({ level, terms, hideUnidentified }: TermStatsCellProps) => {
  return (
    <div
      className={cx('lexi-cell order-2 cursor-pointer rounded', {
        [`lexi-word-${level}`]: level,
        '!bg-transparent': level === 'unidentified' && !terms?.length,
        'lexi-button-ignored': level === 'ignored',
        'order-1': level === 'unidentified',
        hidden: hideUnidentified && level === 'unidentified',
      })}
      title={terms?.map((_) => (_ instanceof TermStore ? _.id : _)).join('\n') ?? 'No words'}
    >
      {Numbers.format(terms?.length) ?? 0}
    </div>
  );
};
