import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';

import { meaningfulLevelKeys } from '@/modules/levels/constants.ts';
import { ReviewStore } from '@/modules/review/ReviewStore.ts';

export const ReviewPage = observer(() => {
  const review = useMemo(() => ReviewStore.of(), []);

  return (
    <>
      {review.reviewedTerms ? (
        <div>
          <ul className="mb-12 flex w-full gap-4 p-4">
            {review.reviewedTerms.map((term, index) => (
              <li
                key={term.term.id}
                className={cx('w-full rounded px-2', {
                  'text-[0]': index > review.current,
                  'bg-slate-200': term.status === 'unreviewed',
                  'bg-red-200': term.status === 'unknown',
                  'bg-green-200': term.status === 'known',
                })}
              >
                {term.term.id}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-16">
            <div
              className={cx('font-caps my-auto rounded-lg px-4 py-1 text-4xl capitalize', {
                [`lexi-word-${review.level}`]: review.level,
              })}
            >
              {review.currentTerm?.term.id}
            </div>

            <div className="group flex min-w-96 flex-col items-center gap-4 rounded bg-slate-100 p-4">
              <div className="text-sm text-slate-500">Hover to see notes</div>
              <div className="bg-slate-100 opacity-0 transition group-hover:opacity-100">
                {review.currentTerm?.term.notes}
              </div>
            </div>

            <div className="flex gap-8">
              <button
                className="lexi-button bg-red-200 hover:bg-red-100"
                onClick={() => review.mark('unknown')}
              >
                I don't know this word
              </button>
              <button
                className="lexi-button bg-green-200 hover:bg-green-100"
                onClick={() => review.mark('known')}
              >
                I know this word
              </button>
            </div>

            {review.finished && (
              <button className="lexi-button" onClick={() => review.back()}>
                Back to main screen
              </button>
            )}
          </div>
        </div>
      ) : (
        <>
          <ul className="mt-20 flex flex-wrap justify-evenly gap-4">
            {meaningfulLevelKeys.map((level) => (
              <li key={level} className="w-1/3">
                <button
                  className={cx('rounded p-4', {
                    [`lexi-word-${level}`]: level,
                  })}
                  onClick={() => review.populate(level)}
                >
                  Review 10 random level {level} terms
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
});
