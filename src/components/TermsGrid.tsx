import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useMemo, useState } from 'react';

import { TermGridCell } from '@/components/TermGridCell.tsx';
import { Level, levelKeys } from '@/constants/levels.ts';
import { TermStore } from '@/stores/TermStore.ts';

// FIXME: too complicated
interface TermsGridProps {
  terms: {
    of: Partial<Record<Level, TermStore[]>>;
  };
}

const sortings = {
  alphabetically: (a: TermStore, b: TermStore) => a.id.localeCompare(b.id),
  'by-notes-length': (a: TermStore, b: TermStore) =>
    (b.notes?.length ?? 0) - (a.notes?.length ?? 0),
};

type SortingOptions = keyof typeof sortings;

export const TermsGrid = observer(({ terms }: TermsGridProps) => {
  console.log('TermsGrid :: 22', terms);

  const [sort, setSort] = useState<SortingOptions>('alphabetically');

  const meaningfulLevels = useMemo(
    () => levelKeys.filter((_) => _ !== 'ignored' && _ !== 'unidentified'),
    [],
  );

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
        {meaningfulLevels.map(
          (level) =>
            (terms.of[level] ?? []).length > 0 && (
              <li key={level} className="w-1/6 ">
                {/*<div className="text-center font-bold">{terms.of[level]?.length}</div>*/}
                <ul className={cx('', {})}>
                  {(terms.of[level] ?? []).sort(sortings[sort]).map((term) => (
                    <TermGridCell key={term.id} word={term.id} />
                  ))}
                </ul>
              </li>
            ),
        )}
      </ul>
    </div>
  );
});
