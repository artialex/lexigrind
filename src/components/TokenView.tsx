import cx from 'clsx';
import { observer } from 'mobx-react-lite';

import { terms } from '@/stores/TermsStore';
import { TokenStore } from '@/stores/TokenStore.ts';

export const TokenView = observer(({ token }: { token: TokenStore }) => {
  return (
    <span
      className={cx({
        'lexi-speech': token.token?.tags.includes('speech'),
      })}
    >
      {token.token?.pre}

      <span
        className={cx(
          'lexi-word-unidentified whitespace-nowrap border border-dashed border-transparent',
          {
            [`lexi-word-${token.term?.level}`]: token.term?.level,
            '!border-slate-500': token.normalized === terms.selected,
            'mark has-note': token.term?.notes,
            'mark exclamation': token.term?.notes?.startsWith('!'),
            'mark question': token.term?.notes?.startsWith('?'),
          },
        )}
        onClick={() => terms.select(token.normalized)}
      >
        {token.token.text}
      </span>
      {token.token?.post}
    </span>
  );
});
