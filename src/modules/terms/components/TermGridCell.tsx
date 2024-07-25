import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { TermStore } from '@/modules/terms/stores/TermStore.ts';
import { terms } from '@/modules/terms/stores/TermsStore.ts';

interface TermGridCellProps {
  word: string;
}

export const TermGridCell = observer((props: TermGridCellProps) => {
  const navigate = useNavigate();
  const term = useMemo(() => {
    if (!terms.map.has(props.word)) {
      terms.map.set(props.word, TermStore.of({ _id: props.word, level: 'unidentified' }));
    }

    return terms.map.get(props.word);
  }, [props.word]);

  return (
    <li
      className={cx(
        'font-caps mb-1.5 flex cursor-pointer items-baseline truncate rounded px-1 capitalize',
        {
          [`lexi-word-${term?.level}`]: term?.level,
          'cell has-note': term?.notes,
        },
      )}
      style={{
        borderRightWidth: Math.min((term?.notes?.length ?? 0) / 2, 50),
      }}
      onClick={() => {
        navigate(`/terms/term/${term?.id}`);
      }}
    >
      {term?.id}
    </li>
  );
});
