import cx from 'clsx';
import { observer } from 'mobx-react-lite';

// import { useState } from 'react';
import { TermGridCell } from '@/components/TermGridCell.tsx';
import { Level, meaningfulLevelKeys } from '@/constants/levels.ts';
import { TermStore } from '@/stores/TermStore.ts';

// FIXME: too complicated
type Entry = string | TermStore;

interface TermsGridProps {
  terms: {
    of: Partial<Record<Level, Entry[]>>;
  };
}

// const sortings = {
//   alphabetically: (a: Entry, b: Entry) => {
//     if (a instanceof TermStore && b instanceof TermStore) {
//       return a.id.localeCompare(b.id);
//     } else if (typeof a === 'string' && typeof b === 'string') {
//       return a.localeCompare(b);
//     }
//
//     return;
//   },
//   // 'by-notes-length': (a: Entry, b: Entry) => (b.notes?.length ?? 0) - (a.notes?.length ?? 0),
// };

// type SortingOptions = keyof typeof sortings;

export const TermsGrid = observer(({ terms }: TermsGridProps) => {
  // const [sort, setSort] = useState<SortingOptions>('alphabetically');

  return (
    <div className="mx-4 w-full">
      {/*
      <button
        className="lexi-button my-2"
        onClick={() => {
          setSort((prev) => (prev === 'alphabetically' ? 'by-notes-length' : 'alphabetically'));
        }}
      >
        Sorted: {sort === 'alphabetically' ? 'Alpabetically' : 'By Notes Length'}
      </button>
*/}
      <ul className="flex w-full gap-1">
        {meaningfulLevelKeys.map(
          (level) =>
            (terms.of[level] ?? []).length > 0 && (
              <li key={level} className="w-1/6 ">
                <ul className={cx('', {})}>
                  {(terms.of[level] ?? [])
                    // .sort(sortings.alphabetically)
                    .map((term) => (
                      <TermGridCell
                        key={term instanceof TermStore ? term.id : term}
                        word={term instanceof TermStore ? term.id : term}
                      />
                    ))}
                </ul>
              </li>
            ),
        )}
      </ul>
    </div>
  );
});
