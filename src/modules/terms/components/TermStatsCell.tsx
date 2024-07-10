import cx from 'clsx';
import { Link } from 'react-router-dom';

import { Numbers } from '@/modules/platform.browser/numbers.ts';
import { TermStore } from '@/modules/terms/stores/TermStore.ts';

interface TermStatsCellProps {
  level: Lexi.Level;
  terms: (TermStore | string)[];
  hideUnidentified?: boolean;
  path: string;
}

export const TermStatsCell = ({ path, level, terms, hideUnidentified }: TermStatsCellProps) => {
  const className = cx('lexi-cell order-2 cursor-pointer rounded', {
    [`lexi-word-${level}`]: level,
    '!bg-transparent': level === 'unidentified' && !terms?.length,
    'lexi-button-ignored': level === 'ignored',
    'order-1': level === 'unidentified',
    hidden: level === 'unidentified' && hideUnidentified,
  });

  const title = terms?.map((_) => (_ instanceof TermStore ? _.id : _)).join('\n') ?? 'No words';

  return (
    <Link to={`${path}/terms/${level}`} className={className} title={title}>
      {Numbers.format(terms?.length) ?? 0}
    </Link>
  );
};
