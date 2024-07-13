import cx from 'clsx';
import { observer } from 'mobx-react-lite';

import { TermStore } from '@/modules/terms/stores/TermStore.ts';

interface TermProps {
  term: TermStore;
}

export const Term = observer(({ term }: TermProps) => (
  <div
    className={cx('inline-block rounded px-2 py-0.5 uppercase', {
      [`lexi-word-${term.level}`]: term.level,
    })}
  >
    <span className="text-xl">{term.id.at(0)}</span>
    <span className="text-lg">{term.id.slice(1)}</span>
  </div>
));
