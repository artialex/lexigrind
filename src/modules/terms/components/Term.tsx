import cx from 'clsx';
import { observer } from 'mobx-react-lite';

import { TermStore } from '@/modules/terms/stores/TermStore.ts';

interface TermProps {
  term: TermStore;
}

export const Term = observer(({ term }: TermProps) => (
  <div
    className={cx('font-caps inline-block rounded px-2 py-0.5 text-xl capitalize', {
      [`lexi-word-${term.level}`]: term.level,
    })}
  >
    {term.id}
    {/*<span className="text-xl">{.at(0)}</span>*/}
    {/*<span className="text-lg">{term.id.slice(1)}</span>*/}
  </div>
));
