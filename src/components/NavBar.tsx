import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import { levelKeys } from '@/constants/levels.ts';
import { terms } from '@/stores/TermsStore.ts';

const Summary = observer(() => {
  return (
    <ul className="flex items-center gap-2 text-right text-sm">
      {levelKeys.map((level) => (
        <li
          key={level}
          className={cx('w-12 cursor-default rounded px-1', `lexi-word-${level}`, {
            'lexi-button-ignored': level === 'ignored',
          })}
          title={(terms.of[level] ?? []).map((_) => _.id).join('\n')}
        >
          {terms.of[level]?.length || '0'}
        </li>
      ))}
    </ul>
  );
});

export const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-8 w-full justify-between border-b border-b-slate-300 bg-slate-100 px-4">
      <ul className="flex items-center gap-2 p-1 ">
        <li>
          <Link className="lexi-button" to={'/sources'}>
            Sources
          </Link>
        </li>
        <li>
          <Link className="lexi-button" to={'/terms'}>
            Terms
          </Link>
        </li>
      </ul>
      <Summary />
    </nav>
  );
};
