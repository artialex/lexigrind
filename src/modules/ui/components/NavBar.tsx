import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import { settings } from '@/modules/settings/settings.store';
import { TermSummary } from '@/modules/stats/components/TermSummary.tsx';

const links = {
  '/sources': 'Sources',
  '/terms': 'Terms',
  '/notes': 'Notes',
  '/review': 'Review',
};

export const NavBar = observer(() => {
  if (settings.zen) {
    return null;
  }
  return (
    <nav className="sticky top-0 z-50 flex h-8 w-full justify-between border-b border-b-slate-300 bg-slate-100 px-4">
      <ul className="flex items-center gap-2 p-1 ">
        {Object.entries(links).map(([to, text]) => (
          <li key={to}>
            <Link className="lexi-button" to={to}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <TermSummary />
    </nav>
  );
});
