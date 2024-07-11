import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';

import { Term } from '@/modules/terms/components/Term.tsx';
import { TermNotes } from '@/modules/terms/components/TermNotes.tsx';
import { TermSharedNotes } from '@/modules/terms/components/TermSharedNotes.tsx';
import { terms } from '@/modules/terms/stores/TermsStore.ts';
import { LoadingState } from '@/modules/ui/components/LoadingState.tsx';

interface TermViewProps {
  term: string;
}

export const TermView = observer((props: TermViewProps) => {
  const term = useMemo(() => terms.map.get(props.term), [props.term, terms.map]);

  if (!term) {
    return <LoadingState />;
  }

  return (
    <div className="flex w-full flex-col overflow-y-auto p-4">
      <h1 className="mb-2">
        <Term term={term} />
      </h1>

      {!Number.isNaN(term.level) && (
        <div>
          <button
            className="lexi-button"
            onClick={() => {
              const level = parseInt(term?.level);

              term?.setLevel(String(Math.max(0, level - 1)) as Lexi.Level);
            }}
          >
            <ArrowLeft size="14" />
            Level down
          </button>
          <button
            className="lexi-button"
            onClick={() => {
              const level = parseInt(term?.level);

              term?.setLevel(String(Math.min(5, level + 1)) as Lexi.Level);
            }}
          >
            <ArrowRight size="14" />
            Level up
          </button>
        </div>
      )}
      <TermNotes term={term} />
      <TermSharedNotes term={term} />
    </div>
  );
});
