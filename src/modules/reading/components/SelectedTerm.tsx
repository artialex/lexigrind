import cx from 'clsx';
import { observer } from 'mobx-react-lite';

import { levelKeys } from '@/modules/levels/constants.ts';
import { Term } from '@/modules/terms/components/Term.tsx';
import { TermNotes } from '@/modules/terms/components/TermNotes.tsx';
import { TermSharedNotes } from '@/modules/terms/components/TermSharedNotes.tsx';
import { terms } from '@/modules/terms/stores/TermsStore.ts';

export const SelectedTerm = observer(() => {
  return (
    <div className="flex w-[260px] flex-col gap-2">
      {terms.selected ? (
        <div>
          <div className="my-4 text-center">
            <Term term={terms.selectedTerm!} />
          </div>
          <label className="flex flex-col gap-1 text-sm">
            <div className="flex gap-1">
              {levelKeys.map((level) => (
                <button
                  key={level}
                  className={cx(
                    'aspect-square basis-1/5 rounded border uppercase transition hover:opacity-60',
                    {
                      'lexi-word-0 border-slate-300': level === '0',
                      'border-emerald-200 bg-emerald-50 text-emerald-800': level === '1',
                      'border-sky-200 bg-sky-50 text-sky-800': level === '2',
                      'border-amber-200 bg-amber-50 text-amber-800': level === '3',
                      'border-rose-200 bg-rose-50 text-rose-800': level === '4',
                      'border-fuchsia-200 bg-fuchsia-50 text-fuchsia-800': level === '5',
                      'lexi-button-ignored': level === 'ignored',
                    },
                  )}
                  onClick={() => {
                    terms.selectedTerm?.setLevel(level as Lexi.Level);
                  }}
                >
                  {level.at(0)}
                </button>
              ))}
            </div>
          </label>

          <TermNotes term={terms.selectedTerm!} />
          <TermSharedNotes term={terms.selectedTerm!} />
        </div>
      ) : (
        <span>Not selected</span>
      )}
    </div>
  );
});
