import cx from 'clsx';
import { observer } from 'mobx-react-lite';

import { TermNotes } from '@/components/TermNotes.tsx';
import { TermSharedNotes } from '@/components/TermSharedNotes.tsx';
import { levels } from '@/constants/levels.ts';
import { Texts } from '@/services/Texts.service.ts';
import { terms } from '@/stores/TermsStore.ts';

import TermLevel = Lexi.TermLevel;

export const SelectedTerm = observer(() => {
  return (
    <div className="flex w-[260px] flex-col gap-2">
      <h2 className="font-semibold uppercase">Selected Term</h2>

      {terms.selected ? (
        <div>
          <div className="text-center">
            <span
              className={`rounded text-sm uppercase lexi-word-${terms.selectedTerm?.level} self-center px-2 py-0.5 text-center`}
            >
              {terms.selectedTerm?.id}
            </span>
          </div>

          <label className="flex flex-col gap-1 text-sm">
            <span className="font-semibold">Level</span>
            <div className="flex flex-wrap gap-1">
              {Object.entries(levels).map(([level, name]) => (
                <button
                  key={level}
                  className={cx('min-h-8 flex-grow basis-1/3 rounded', {
                    'lexi-word-0': level === '0',
                    'lexi-word-1': level === '1',
                    'lexi-word-2': level === '2',
                    'lexi-word-3': level === '3',
                    'lexi-word-4': level === '4',
                    'lexi-word-5': level === '5',
                    'lexi-button-ignored': level === 'ignored',
                  })}
                  onClick={() => {
                    terms.selectedTerm?.setLevel(level as TermLevel);
                  }}
                >
                  {Texts.capitalize(name)}
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
