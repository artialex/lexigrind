import cx from 'clsx';
import { observer } from 'mobx-react-lite';

import { levelKeys } from '@/constants/levels.ts';
import { terms } from '@/stores/TermsStore.ts';

export const TermsGrid = observer(() => (
  <ul className="m-4 flex w-full gap-2">
    {levelKeys.map(
      (level) =>
        (terms.of[level] ?? []).length > 0 && (
          <li className="w-1/6 ">
            <ul className={cx(' p-2', {})}>
              {(terms.of[level] ?? []).map((term) => (
                <li
                  className={cx('mb-1.5 rounded px-1', {
                    [`lexi-word-${level}`]: level,
                  })}
                >
                  {term.id}
                </li>
              ))}
            </ul>
          </li>
        ),
    )}
  </ul>
));
