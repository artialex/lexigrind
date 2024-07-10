import cx from 'clsx';
import { groupBy } from 'lodash';
import { observer } from 'mobx-react-lite';
import { useMemo, useState } from 'react';

import { meaningfulLevelKeys } from '@/modules/levels/constants.ts';
import { TermGridCell } from '@/modules/terms/components/TermGridCell.tsx';
import { useTermsQuery } from '@/modules/terms/terms.queries.ts';

interface TermsGridProps {
  ids?: string[];
}

const sortings = {
  alphabetically: (a: Lexi.Term, b: Lexi.Term) => {
    return a._id.localeCompare(b._id);
  },
  'by-notes-length': (a: Lexi.Term, b: Lexi.Term) => {
    return (b.notes?.length ?? 0) - (a.notes?.length ?? 0);
  },
};

export const TermsGrid = observer(({ ids }: TermsGridProps) => {
  const { data, isLoading } = useTermsQuery(ids);
  const [sort, setSort] = useState<keyof typeof sortings>('alphabetically');

  const grouped = useMemo(() => groupBy(data?.items, (term) => term?.level), [data]);

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-4 w-full">
      <button
        className="lexi-button my-2"
        onClick={() => {
          setSort((prev) => (prev === 'alphabetically' ? 'by-notes-length' : 'alphabetically'));
        }}
      >
        Sorted: {sort === 'alphabetically' ? 'Alpabetically' : 'By Notes Length'}
      </button>
      <ul className="flex w-full gap-1">
        {meaningfulLevelKeys.map(
          (level) =>
            (grouped[level] ?? []).length > 0 && (
              <li key={level} className="w-1/6 ">
                <ul className={cx('', {})}>
                  {(grouped[level] ?? []).sort(sortings[sort]).map((term) => (
                    <TermGridCell key={term._id} word={term._id} />
                  ))}
                </ul>
              </li>
            ),
        )}
      </ul>
    </div>
  );
});
