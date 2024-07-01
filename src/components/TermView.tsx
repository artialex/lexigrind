import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';

import { TermNotes } from '@/components/TermNotes.tsx';
import { terms } from '@/stores/TermsStore.ts';

interface TermViewProps {
  term: string;
}

export const TermView = observer((props: TermViewProps) => {
  const term = useMemo(() => terms.map.get(props.term), [props.term, terms.map]);

  if (!term) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <h1
        className={cx('inline-block w-fit rounded px-4 text-2xl uppercase', {
          [`lexi-word-${term?.level}`]: term?.level,
        })}
      >
        {term?.id}
      </h1>

      {!Number.isNaN(term.level) && (
        <div>
          <button
            className="lexi-button"
            onClick={() => {
              const level = parseInt(term?.level);

              term?.setLevel(String(Math.max(0, level - 1)) as Lexi.TermLevel);
            }}
          >
            <ArrowLeft size="14" />
            Level down
          </button>
          <button
            className="lexi-button"
            onClick={() => {
              const level = parseInt(term?.level);

              term?.setLevel(String(Math.min(5, level + 1)) as Lexi.TermLevel);
            }}
          >
            <ArrowRight size="14" />
            Level up
          </button>
        </div>
      )}

      {/*<TermFamily term={term} />*/}
      <TermNotes term={term} />
    </div>
  );
});
