import cx from 'clsx';
import { observer } from 'mobx-react-lite';

import { terms } from '@/stores/TermsStore';
import { TokenStore } from '@/stores/TokenStore.ts';

export const TokenView = observer(({ token }: { token: TokenStore }) => {
  return (
    <>
      {token.token.pre}
      <span
        className={cx('lexi-word-unidentified border border-dashed border-transparent', {
          [`lexi-word-${token.term?.level}`]: token.term?.level,
          'border-slate-500': token.normalized === terms.selected,
          asterisk: token.term?.notes,
        })}
        onClick={() => terms.select(token.normalized)}
      >
        {token.token.text}
      </span>
      {token.token.post}
    </>
  );
});
